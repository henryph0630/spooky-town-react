import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav id="main-nav">
      <button
        id="hamburger-menu"
        aria-label="Open menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>
      <div id="nav-links" className={isOpen ? "nav-open" : "nav-closed"}>
        <Link to="/">Home</Link>
        <Link to="/costumes">Costumes</Link>
        <Link to="/about">About Us</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/blog">Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;