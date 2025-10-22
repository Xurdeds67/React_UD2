import React from "react";
class Milista extends React.Component{
    state = {incidencias: [
    {
        id_incidencia: 1,
        id_usuario: 'e768590345h',
        titulo: "Proyector averiado en aula 2",
        descripcion:"El proyector no enciende y la lámpara parece dañada.",
        categoria: "Hardware",
        nivel_urgencia: "Alta",
        fecha_registro: "2025-10-03",
        estado: "Abierta",
        ubicacion: "A301"
    },
    {
        id_incidencia: 2,
        id_usuario: 'e235439802s',
        titulo: "Ordenador de secretaría no enciende",
        descripcion:"El equipo no responde al presionar el botón de encendido",
        categoria: "Hardware",
        nivel_urgencia: "Media",
        fecha_registro: "2025-10-02",
        estado: "En proceso",
        ubicacion: "B205"
    },
    {
        id_incidencia: 3,
        id_usuario: 'e7658449381b',
        titulo: "Impresora sin conexión",
        descripcion:"La impresora de la sala de profesores no aparece en red",
        categoria: "Red/Impresión",
        nivel_urgencia: "Alta",
        fecha_registro: "2025-10-01",
        estado: "Resuelta",
        ubicacion: "Sala de profesores"
    },
]

    }


    render(){
        return(
            <>
             <ul>
                {this.state.incidencias.map((i) => (
                <li><strong>Título:</strong>{i.titulo}<br></br>
                <strong>Descripción:</strong> {i.descripcion}<br></br>
                <strong>Usuario:</strong> {i.id_usuario}<br></br>
                <strong>Ubicación:</strong> {i.ubicacion}<br></br><br></br>
                </li>
             ))}
            </ul>
        
        </>
        );
    };
};
export default Milista;