import React from 'react';
import './HistoriasCambio.css';

const HistoriasCambio = () => {
    return (
        <section className="historias-cambio" id="historias">
            <h2>Historias de cambio</h2>
            <div className="historia">
                <p>
                    "Con las donaciones recibidas, pudimos construir un aula para los niños."
                </p>
                <img src="https://via.placeholder.com/150" alt="Historia 1" />
            </div>
            <div className="historia">
                <p>
                    "Gracias a la ayuda, logramos distribuir alimentos a familias necesitadas."
                </p>
                <img src="https://via.placeholder.com/150" alt="Historia 2" />
            </div>
        </section>
    );
};

export default HistoriasCambio;
