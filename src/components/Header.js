import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
  <header>
  <div className="header-container">

    <div className="logo">
      <img
        src="https://www.ascencia-business-school.mt/wp-content/uploads/2022/11/Ascencia-Malta-Logo.svg"
        alt="Ascencia Logo"
      />
    </div>

    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>

  </div>
</header>
  );
}

export default Header;