import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavBar from '../components/organisms/NavBar';

function Home() {
  return (
    
    <div className="main-bg">
      <nav className="navbar-custom">
        <NavBar />
         <div id="intro" className="home-container"> 
        </div>
      </nav>
      <div className="home-container">
        <div className="profile-pic-container">
          <img
            src="/fotoPerfil/perfil.webp"
            alt="Javier Vieytes"
            className="profile-pic"
          />
        </div>
        <h1 className="profile-name">Javier Vieytes</h1>
        <p className="profile-desc">
          Estudiante de informática Duoc UC
        </p>

        <p className='github-name'>
          Github
        </p>

        <a className="profile-link" href="https://github.com/Javiervieytes" target="_blank" rel="noopener noreferrer">
          <img src="/github/github.webp" alt="Github"  className="github-btn"/>
        </a>
        
        <p className="profile-welcome">
          Hola este es mi portafolio en el cual podras conocer un poco mas sobre mi y mis proyectos.
        </p>
      </div>
    </div>
  );
}

export default Home;


