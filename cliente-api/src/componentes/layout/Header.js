import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../layout/Logo.jpeg'; // Ajusta la ruta según la ubicación de tu imagen.

function Header() {
    return (
        <header className="header">
            <div className="navegacion">
                <div className="logo-container">
                    <img src={logo} alt="Logo Codiscun" className="Logo" />
                    <h1>Codiscun</h1>
                </div>
                <nav className="navegacion">
                    <Link to="/" className="Inicio">Inicio</Link>
                    <Link to="/quienes-somos" className="Quienes_somos">¿Quiénes somos?</Link>
                    <Link to="/prevencion-educacion" className="Prevencion_y_Educacion">Prevención y Educación</Link>
                    <Link to="/archivos" className="archivos">Contáctanos</Link>
                    <Link to="/recursos" className="Recursos">Recursos</Link>
                    <Link to="/donaciones/vistadonaciones" className="donaciones">Dona ahora</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;



