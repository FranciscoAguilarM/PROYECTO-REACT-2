import React from 'react';
import './Testimonios.css';

const Testimonios = () => {
    return (
        <section className="testimonios" id="testimonios">
            <h2>Testimonios de primera persona</h2>
            <div className="testimonio">
                <p>"Gracias a sus donaciones, pudimos superar momentos difíciles."</p>
                <span>- María G.</span>
            </div>
            <div className="testimonio">
                <p>"Estas contribuciones realmente transformaron nuestras vidas."</p>
                <span>- Juan P.</span>
            </div>
        </section>
    );
};

export default Testimonios;
