const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  title: String,
  subtitle: String,
  authors: [String],
  description: String,
  image: String,
  link: String
})

module.exports = mongoose.model('Result', schema)