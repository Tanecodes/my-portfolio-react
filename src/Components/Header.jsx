import React from "react";
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>MY PORTFOLIO.</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;