import React from "react";
import { Link } from "react-router-dom";

const Header = ({ name, surname }) => {
  return (
    <header>
      <h1>
        {name} {surname}
      </h1>
      <nav>
        <Link to="/page1">Page 1</Link> | <Link to="/page2">Page 2</Link>
      </nav>
    </header>
  );
};

export default Header;
