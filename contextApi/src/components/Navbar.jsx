import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav>
      <h1>Navbar</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <Button />
      </ul>
    </nav>
  );
};

export default Navbar;
