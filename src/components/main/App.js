import IncidentList from '../list/IncidentList.js';
import Header from '../header/Header.js';
import Footer from '../footer/Footer.js';
import React, { useState } from 'react';
import Form from '../Form.js';
import Fondo from '../../img/Fondo.jpg';

function App() {

  const [incidencias, setIncidencias] = useState([
    {
      id_incidencias: 1,
      id_usuario: "xurdeds",
      titulo: "Proyector averia",
      descripcion: "Proyector averiado en el aula 2",
      categoria: "Hardware",
      nivel_urgencia: "Alta",
      fecha_registro: "2025-10-20",
      estado: "Abierto",
      ubicacion: "B205"
    },
    {
      id_incidencias: 2,
      id_usuario: "xurdeds",
      titulo: "Ordenador averia",
      descripcion: "Ordenador no enciende",
      categoria: "Hardware",
      nivel_urgencia: "Media",
      fecha_registro: "2025-10-20",
      estado: "Abierto",
      ubicacion: "B205"
    },
    {
      id_incidencias: 3,
      id_usuario: "xurdeds",
      titulo: "Persiana averia",
      descripcion: "Persiana no baja",
      categoria: "Infraestructuras",
      nivel_urgencia: "Media",
      fecha_registro: "2025-10-20",
      estado: "Abierto",
      ubicacion: "B205"
    }
  ]);

  const agregarIncidencia = (
    titulo_nuevo,
    usuario_nuevo,
    descripcion_nuevo,
    categoria_nuevo,
    nivel_urgencia_nuevo,
    ubicacion_nuevo
  ) => {

    const fecha = new Date();
    const year = fecha.getFullYear();
    const month = String(fecha.getMonth() + 1).padStart(2, '0');
    const day = String(fecha.getDate()).padStart(2, '0');
    const fecha_formateada = `${year}-${month}-${day}`;

    const nueva_incidencia = {
      id_incidencias: incidencias.length + 1,
      id_usuario: usuario_nuevo,
      titulo: titulo_nuevo,
      descripcion: descripcion_nuevo,
      categoria: categoria_nuevo,
      nivel_urgencia: nivel_urgencia_nuevo,
      fecha_registro: fecha_formateada,
      estado: "Abierta",
      ubicacion: ubicacion_nuevo
    };

    setIncidencias([...incidencias, nueva_incidencia]);
    console.log("Datos recibidos", nueva_incidencia);
  };

  return (
    <div
      className="card"
      style={{
        backgroundImage: `url(${Fondo})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
      <Header />
      <h2 className='mb-4 text-center'>Mi aplicación</h2>
      <div className="container-fluid mt4 row">
        <main className='col-md-6'>
          <p>Este es mi contenido de la app</p>
          <IncidentList incidencias={incidencias} />
        </main>
        <aside className='col-md-6'>
          <Form agregarIncidencia={agregarIncidencia} />
        </aside>
      </div>
      <Footer />
    </div>
  );
}

export default App;
