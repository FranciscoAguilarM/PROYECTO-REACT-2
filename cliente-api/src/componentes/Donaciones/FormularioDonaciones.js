import React, { useState } from "react";
import ClienteAxios from "../../config/axios";

const FormularioDonaciones = () => {
    const [formData, setFormData] = useState({
        nombres: "",
        apellidos: "",
        empresa: "",
        descripcion: "",
        articulo: "",
        fecha_recoleccion: "",
        direccion: "",
        telefono: "",
        imagen: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, imagen: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        Object.keys(formData).forEach((key) => {
            formDataToSend.append(key, formData[key]);
        });

        try {
            const response = await ClienteAxios.post("/donaciones", formDataToSend);
            alert("Donación enviada con éxito.");
            setFormData({
                nombres: "",
                apellidos: "",
                empresa: "",
                descripcion: "",
                articulo: "",
                fecha_recoleccion: "",
                direccion: "", 
                telefono: "",
                imagen: null,
            });
        } catch (error) {
            console.error("Error al enviar la donación:", error);
            alert("Hubo un problema al enviar la donación.");
        }
    };

    return (
        <div className="container">
            <header className="header">
                <h1>Donación de Especies</h1>
                <img
                    src="https://via.placeholder.com/600x200" // Reemplazar con la URL de tu imagen
                    alt="Donación"
                    className="header-image"
                />
            </header>

            <main className="form-section">
                <h2>Formulario para Donaciones</h2>
                <form onSubmit={handleSubmit} className="donation-form">
                    <div className="form-group">
                        <label>Nombre *</label>
                        <input
                            type="text"
                            name="nombres"
                            value={formData.nombres}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Apellido *</label>
                        <input
                            type="text"
                            name="apellidos"
                            value={formData.apellidos}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Empresa (Opcional)</label>
                        <input
                            type="text"
                            name="empresa"
                            value={formData.empresa}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Descripción *</label>
                        <textarea
                            name="descripcion"
                            value={formData.descripcion}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label>Artículo *</label>
                        <input
                            type="text"
                            name="articulo"
                            value={formData.articulo}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Fecha de Recolección *</label>
                        <input
                            type="date"
                            name="fecha_recoleccion"
                            value={formData.fecha_recoleccion}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Direccion </label>
                        <input
                            type="text"
                            name="Direccion"
                            value={formData.direccion}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Teléfono *</label>
                        <input
                            type="text"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Selecciona una Imagen del Producto *</label>
                        <input
                            type="file"
                            name="imagen"
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                    </div>
                    <button type="submit" className="submit-button">
                        Enviar Donación
                    </button>
                </form>
            </main>
        </div>
    );
};

export default FormularioDonaciones;
