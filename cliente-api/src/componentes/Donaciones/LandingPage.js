import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <div>
            <h1>Bienvenido al Portal de Donaciones</h1>
            <p>
                Aquí puedes registrar tus donaciones y ayudar a nuestra causa. Si eres
                administrador, puedes gestionar las donaciones.
            </p>
            <div>
                <Link to="/donaciones/formulario">
                    <button>Realizar una Donación</button>
                </Link>
                <Link to="/admin">
                    <button>Panel de Administrador</button>
                </Link>
            </div>
        </div>
    );
};

export default LandingPage;
