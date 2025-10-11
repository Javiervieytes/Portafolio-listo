
import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar-custom">
      <div className="navbar-title">Mi Portafolio</div>
      <div className="navbar-links">
        <NavLink to="/" end>Introducción</NavLink>
        <NavLink to="/proyectos">Proyectos</NavLink>
        <NavLink to="/noticias">Noticias</NavLink>
        <NavLink to="/contacto">Contacto</NavLink>
      </div>
    </nav>
  );
}

export default NavBar;


// NavBar eliminado según solicitud. Si necesitas una barra personalizada, puedes crearla aquí.

// Si quieres asociar la ruta de productos a "Proyectos", simplemente cambia la ruta y el nombre en el componente de rutas principal (por ejemplo, en App.jsx o donde definas las rutas).

// Ejemplo de cómo podrías reutilizar el código de Products para Proyectos:
// <Route path="/proyectos" element={<Products />} />
