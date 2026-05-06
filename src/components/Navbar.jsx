import { useState, useRef, useEffect } from "react";
import "../styles/navbar.css"
import logo from "../assets/fglogo.jpg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

   // ✅ Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="brand">
        <img src={logo} alt="logo" className="logo-img" />
        <h2 className="logo-text">Sagi Art Studio</h2>
      </div>

      {/* desktop menu */}
      <div className="nav-links">
          <div className="nav-link">
          <a href="#home">Home</a>
          </div>
          <div className="nav-link">
          <a href="#gallery">Gallery</a>
          </div>
          <div className="nav-link">
          <a href="#about">About</a>
          </div>
          <div className="nav-link">
          <a href="#contact">Contact</a>
          </div>
      </div>

      {/* Mobile icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Side menu */}
      <div ref={menuRef} className={`side-menu ${menuOpen ? "active" : ""}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>

      {menuOpen && <div className="overlay"></div>}
      
    </nav>
  );
}

export default Navbar;