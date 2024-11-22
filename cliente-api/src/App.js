import React, { Fragment } from 'react';
import Header from './componentes/layout/Header';
import Footer from './componentes/layout/Footer'; // Asegúrate de haber creado este componente
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Donaciones from "./componentes/Donaciones/donaciones";
import FormularioDonaciones from "./componentes/Donaciones/FormularioDonaciones";
import Vistadonaciones from './componentes/Donaciones/Vistadonaciones';
// import AdminPanel from "./componentes//Donaciones/AdminPanel";

function App() {
  return (
    <Router>
      <Fragment>
        <Header /> {/* Header con logo y título */}
        <main className="caja-contenido col-12"> {/* Contenedor principal para las vistas */}
          <Routes>
            <Route path="/Donaciones/VistaDonaciones" element={<Vistadonaciones />} />
            <Route path="/Donaciones/Donaciones" element={<Donaciones />} />
            <Route path="/FormularioDonaciones" element={<FormularioDonaciones />} />
          </Routes>
        </main>
        <Footer /> {/* Footer agregado al final */}
      </Fragment>
    </Router>
  );
}

export default App;