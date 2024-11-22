import React, { Fragment, useState } from 'react';
import ClienteAxios from '../../config/axios';

function NuevoArchivo() {
    const [nombre, setNombre] = useState('');
    const [categoria, setCategoria] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Lógica para enviar el nuevo archivo al servidor usando ClienteAxios
            // Aquí puedes enviar los datos del formulario al backend
        } catch (error) {
            setError('Error al crear el nuevo archivo. Inténtalo de nuevo más tarde.');
            console.error('Error creating new file:', error);
        }
    };

    return (
        <Fragment>
            <h2>Nuevo Archivo</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                {/* Aquí va el formulario para crear un nuevo archivo */}
            </form>
        </Fragment>
    );
}

export default NuevoArchivo;
