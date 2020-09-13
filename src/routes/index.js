const router = require('express').Router();
const axios = require('axios');
const Result = require('../models/result');


router.get('/api/search/', async (req, res) => {
    const { q } = req.query;
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${q}&key=${process.env.API_KEY}`)
        .catch(error => {
            res.status(500).json([])
            console.log(error.response)
        })
    console.log('Items: ', response.data.items.length)
    console.log('Query ', q)
    const results = response.data.items.map((result) => {
        return {
            title: result.volumeInfo.title,
            subtitle: result.volumeInfo.subtitle,
            authors: result.volumeInfo.authors,
            description: result.volumeInfo.description,
            image: result.volumeInfo.imageLinks.thumbnail,
            link: result.volumeInfo.previewLink
        }
    })
    res.status(200).json(results)
})

router.get('/api/result', async (req, res) => {

    const results = await Result.find({})
        .catch(error => res.status(500).send({ message: error }));

    res.status(200).json(
        results.map(({ id, title, subtitle, description, image, link, authors }) => ({
            id,
            title,
            subtitle,
            description,
            authors,
            image,
            link
        })))
})

router.post('/api/result', async (req, res) => {
    const { result } = req.body;
    if (!result) res.status(400).send({ message: 'Missing result to save' })

    const savedResult = await Result.create(result).catch(error => res.status(500).send({ message: error }));
    res.status(200).json(savedResult)
})

router.delete('/api/result/:id', async (req, res) => {
    const { id } = req.params;
    const result = await Result.findByIdAndDelete(id).catch(error => res.status(500).send({ message: error }));
    if (!result) {
        return response.status(404).send({ message: 'Result not found!' })
    }
    res.status(200).json(result)
})




module.exports = router