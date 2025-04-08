import React from "react";
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>.My Portfolio.</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;