
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar-custom">
      <div className="navbar-title">Mi Portafolio</div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <NavLink to="/" end onClick={() => setMenuOpen(false)}>Introducción</NavLink>
        <NavLink to="/proyectos" onClick={() => setMenuOpen(false)}>Proyectos</NavLink>
        <NavLink to="/noticias" onClick={() => setMenuOpen(false)}>Noticias</NavLink>
        <NavLink to="/contacto" onClick={() => setMenuOpen(false)}>Contacto</NavLink>
      </div>
    </nav>
  );
}

export default NavBar;

