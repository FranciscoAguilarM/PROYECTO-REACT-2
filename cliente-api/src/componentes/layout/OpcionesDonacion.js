import React from 'react';
import './OpcionesDonacion.css';

const OpcionesDonacion = () => {
    return (
        <section className="opciones-donacion">
            <h2>Opciones de Donación</h2>
            <div className="opcion">
                <h3>Donación Económica</h3>
                <p>Contribuye con dinero para apoyar nuestras causas.</p>
                <button>Donar Ahora</button>
            </div>
            <div className="opcion">
                <h3>Donación en Especie</h3>
                <p>Dona alimentos, ropa o artículos necesarios.</p>
                <button>Contactar</button>
            </div>
        </section>
    );
};

export default OpcionesDonacion;
