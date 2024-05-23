import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w3-container w3-center w3-padding-32">
      <h1><b>Anonymous Blog</b></h1>
      <p>Welcome to the blog of <Link style={{ textDecoration: "none" }} to="/Dashboard" className="w3-tag">Anonymous</Link></p>
    </header>
  );
};

export default Header;
