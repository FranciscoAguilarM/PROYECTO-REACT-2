import React, { Fragment, useEffect, useState } from 'react';
import ClienteAxios from '../../config/axios';
import { Link } from 'react-router-dom';

function Archivos () {
    const [archivos, setArchivos] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchArchivos = async () => {
            try {
                const response = await ClienteAxios.get('/Archivos');
                setArchivos(response.data);
            } catch (error) {
                setError('Error al cargar los Archivos. Inténtalo de nuevo más tarde.');
                console.error('Error fetching Archivos:', error);
            }
        };

        fetchArchivos();
    }, []);
    return (
        <Fragment>
            <h2>Archivos</h2>
            {error && <p>{error}</p>}
            <Link to="/nuevo-archivos" className="btn btn-verde nvo-archivos">
                <i className="fas fa-plus-circle"></i> Nuevo archivos
            </Link>
            <ul className="listado-archivos">
                {archivos.map(archivos => 
                    <li className="archivos">
                        <div className="info-archivos">
                            <p className="nombre">{archivos.Nombre}</p>
                            <p>{archivos.id_Categoria}</p>

                        </div>
                        <div className="acciones">
                            <Link to={`/editar-archivos/${archivos.id}`} className="btn btn-azul">
                                <i className="fas fa-pen-alt"></i> Editar archivos
                            </Link>
                            <Link to={`/eliminar-archivos/${archivos.id}`} className="btn btn-rojo btn-eliminar">
                                <i className="fas fa-times"></i> Eliminar archivos
                            </Link>
                        </div>
                    </li>
                )}
            </ul>
        </Fragment>
    );
}

export default Archivos;