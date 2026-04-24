// Usamos '../' para salir de la carpeta 'main' hacia 'components'
// y '../../' para salir hasta 'src' para buscar la imagen

import IncidentList from '../list/IncidentList.js'; 
import Header from '../header/Header.js'; 
import Footer from '../footer/Footer.js'; 
import React, { useState, useEffect } from 'react';
import Form from '../Form.js'; // Asumiendo que Form.js está directo en 'components'
import Fondo from '../../img/Fondo.jpg'; // Salimos de 'main', salimos de 'components', entramos a 'img'

function App() {

  const INCIDENCIA_API = 'http://localhost:3004/incidencias';
  const USUARIO_API = 'http://localhost:3004/users';

  const [usuarios, setUsuarios] = useState([]);
  const [incidencias, setIncidencias] = useState([]);

  // Carga inicial de datos (GET)
  useEffect(() => {
    const obtenerIncidencias = async () => {
      try {
        let response = await fetch(INCIDENCIA_API);
        if (!response.ok) throw new Error("Error al obtener incidencias");
        const data = await response.json();
        setIncidencias(data);
      } catch (e) {
        console.error(e.message);
      }
    };

    const obtenerUsuarios = async () => {
      try {
        let response = await fetch(USUARIO_API);
        if (!response.ok) throw new Error("Error al obtener usuarios");
        const data = await response.json();
        setUsuarios(data);
      } catch (e) {
        console.error(e.message);
      }
    };

    obtenerIncidencias();
    obtenerUsuarios();
  }, []);

  // Función para agregar incidencia (POST)
  const agregarIncidencia = async (
    titulo_nuevo,
    email_usuario_nuevo, // Recibimos el email
    descripcion_nuevo,
    categoria_nuevo,
    nivel_urgencia_nuevo,
    ubicacion_nuevo
  ) => {

    // 1. Calcular fecha actual
    const fecha = new Date();
    const year = fecha.getFullYear();
    const month = String(fecha.getMonth() + 1).padStart(2, '0');
    const day = String(fecha.getDate()).padStart(2, '0');
    const fecha_formateada = `${year}-${month}-${day}`;

    // 2. Buscar si el usuario existe por su email
    // (Asegúrate de que en tu db.json los usuarios tengan el campo "email")
    let usuarioEncontrado = usuarios.find((u) => u.email === email_usuario_nuevo);

    if (usuarioEncontrado) {
      // 3. Crear el objeto incidencia (Sin ID, JSON Server lo pone)
      const nueva_incidencia = {
        usuario: usuarioEncontrado, // Guardamos todo el objeto usuario
        titulo: titulo_nuevo,
        descripcion: descripcion_nuevo,
        categoria: categoria_nuevo,
        nivel_urgencia: nivel_urgencia_nuevo,
        fecha_registro: fecha_formateada,
        estado: "Abierta",
        ubicacion: ubicacion_nuevo,
        comentarios: [] 
      };

      try {
        // 4. Petición POST
        let response = await fetch(INCIDENCIA_API, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(nueva_incidencia)
        });

        if (!response.ok) {
          throw new Error(`Fallo de la petición POST. Estado: ${response.status}`);
        }

        // 5. Actualizar el estado visual con la respuesta del servidor (que trae el ID)
        let data = await response.json();
        console.log("Incidencia guardada:", data);
        setIncidencias([...incidencias, data]);

      } catch (e) {
        console.error(e);
        alert("Error al guardar en el servidor");
      }

    } else {
      // Si el email no coincide con ninguno en la base de datos
      alert("No se puede crear incidencia. Usuario no encontrado (Verifica el email).");
    }
  };

  return (
    <div
      className="card"
      style={{
        backgroundImage: `url(${Fondo})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh"
      }}
    >
      <Header />
      <h2 className='mb-4 text-center mt-3'>Mi aplicación</h2>
      <div className="container-fluid mt-4 row">
        <main className='col-md-8'>
          <IncidentList incidencias={incidencias} />
        </main>
        <aside className='col-md-4'>
          <Form agregarIncidencia={agregarIncidencia} />
        </aside>
      </div>
      <Footer />
    </div>
  );
}

export default App;