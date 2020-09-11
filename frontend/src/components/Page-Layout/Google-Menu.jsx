import React from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function GoogleMenu() {
  return (
    <Menu size="massive" stackable inverted color="red" fixed="top">
      <Menu.Item header className="pageMenu">
        Google Book Search
      </Menu.Item>
      <Menu.Item as={NavLink} to="/" name="search" exact />
      <Menu.Item as={NavLink} to="/saved" name="save" exact />
    </Menu>
  );
}
