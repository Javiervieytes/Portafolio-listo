import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/organisms/NavBar";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="main-bg">
      <NavBar />

      <div className="notfound-container">
        <div className="notfound-box">
          <h1>404</h1>
        </div>

        <div className="notfound-box">
          <p>Página no encontrada</p>
        </div>

        <button
          className="notfound-button"
          onClick={() => navigate('/')}
        >
          Volver al inicio
        </button>
      </div>
    </div>
  );
}

export default NotFound;

