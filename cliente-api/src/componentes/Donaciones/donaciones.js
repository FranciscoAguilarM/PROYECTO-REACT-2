import React, { Fragment, useEffect, useState } from 'react';
import ClienteAxios from '../../config/axios';
import { Link } from 'react-router-dom';

function Donaciones() {
    const [donaciones, setDonaciones] = useState([]);
    const [error, setError] = useState(null);

    // Fetch initial donations from the API
    useEffect(() => {
        const fetchDonaciones = async () => {
            try {
                const response = await ClienteAxios.get('/donaciones'); // Asegúrate de que esta ruta coincide con tu backend
                setDonaciones(response.data);
            } catch (error) {
                setError('Error al cargar las donaciones. Inténtalo de nuevo más tarde.');
                console.error('Error fetching donaciones:', error);
            }
        };

        fetchDonaciones();
    }, []);

    return (
        <Fragment>
            <h2>Donaciones</h2>
            {error && <p className="error">{error}</p>}
            <Link to="/nueva-donacion" className="btn btn-verde nvo-donacion">
                <i className="fas fa-plus-circle"></i> Nueva Donación
            </Link>
            <ul className="listado-donaciones">
                {donaciones.length > 0 ? (
                    donaciones.map((donacion) => (
                        <li key={donacion.id} className="donacion">
                            <div className="info-donacion">
                                <p className="tipo"><strong>Tipo:</strong> {donacion.tipo}</p>
                                <p className="cantidad"><strong>Cantidad:</strong> {donacion.cantidad}</p>
                                <p className="descripcion"><strong>Descripción:</strong> {donacion.descripcion}</p>
                                <p className="metodo-pago"><strong>Método de Pago:</strong> {donacion.metodoPago}</p>
                            </div>
                            <div className="acciones">
                                <Link to={`/editar-donacion/${donacion.id}`} className="btn btn-azul">
                                    <i className="fas fa-pen-alt"></i> Editar Donación
                                </Link>
                                <Link to={`/eliminar-donacion/${donacion.id}`} className="btn btn-rojo btn-eliminar">
                                    <i className="fas fa-times"></i> Eliminar Donación
                                </Link>
                            </div>
                        </li>
                    ))
                ) : (
                    <p>No hay donaciones registradas.</p>
                )}
            </ul>
        </Fragment>
    );
}

export default Donaciones;


