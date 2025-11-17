import './App.css';
import MiLista from '../list/Milista';
import Header from '../header/Header.js';
import Footer from '../footer/Footer.js';
import React, { useState } from 'react';
import Form from '../Form.js';

function App() {

  const [incidencias, setIncidencias] = useState([
    {
      id_incidencias: 1,
      id_usuario: "xurdeds",
      titulo: "Proyecto averia",
      descripcion: "Proyecto averiado en el aula 2",
      categoria: "Hardware",
      nivel_urgencia: "Media",
      fecha_registro: "2025-10-20",
      estado: "Abierto",
      ubicacion: "B205"
    },
    {
      id_incidencias: 2,
      id_usuario: "xurdeds",
      titulo: "Proyecto averia",
      descripcion: "Ordenador no enciende",
      categoria: "Hardware",
      nivel_urgencia: "Baja",
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
    <>
      <Header />
      <h2>Mi aplicación</h2>
      <p>Este es mi contenido de la app</p>

      <div className="Contenedor-incidencias">
        <main>
          <MiLista incidencias={incidencias} />
        </main>

        <aside>
          <Form agregarIncidencia={agregarIncidencia} />
        </aside>
      </div>

      <Footer />
    </>
  );
}

export default App;
