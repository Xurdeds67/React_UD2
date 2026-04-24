import React from 'react';

function IncidentList(props) {
    const getUrgenciaColor = (nivel) => {
        switch (nivel) {
            case 'Alta': return '#dc3545';
            case 'Media': return '#ffc107';
            case 'Baja': return '#198754';
            default: return '#6c757d';
        }
    };

    return (
        <div className="container mt-3">
            <h3 className="mb-4 text-center" style={{ color: "#0d6efd", fontWeight: "bold" }}>
                📋 Listado de Incidencias
            </h3>

            <div className="table-responsive">
                <table className="table table-hover shadow" style={{ backgroundColor: "white", borderRadius: "10px", overflow: "hidden" }}>
                    <thead style={{ backgroundColor: "#0d6efd", color: "white" }}>
                        <tr>
                            <th>ID</th>
                            <th>Usuario</th>
                            <th>Email</th>
                            <th>Título</th>
                            <th>Descripción</th>
                            <th>Categoría</th>
                            <th>Urgencia</th>
                            <th>Fecha</th>
                            <th>Estado</th>
                            <th>Ubicación</th>
                        </tr>
                    </thead>

                    <tbody>
                        {props.incidencias.map((i) => (
                            <tr key={i.id} style={{ borderBottom: "1px solid #dee2e6" }}>
                                <td style={{ fontWeight: "bold", color: "#0d6efd" }}>{i.id}</td>
                                {/* Usamos optional chaining (?.) para evitar errores si el usuario no viene cargado */}
                                <td style={{ fontWeight: "600", color: "#495057" }}>👤 {i.usuario?.nombre || "Desconocido"}</td>
                                <td style={{ color: "#6c757d", fontSize: "0.9em" }}>{i.usuario?.email || "-"}</td>
                                <td style={{ fontWeight: "600" }}>{i.titulo}</td>
                                <td>{i.descripcion}</td>
                                <td><span className="badge bg-secondary">{i.categoria}</span></td>
                                <td>
                                    <span
                                        className="badge"
                                        style={{ backgroundColor: getUrgenciaColor(i.nivel_urgencia) }}
                                    >
                                        {i.nivel_urgencia}
                                    </span>
                                </td>
                                <td>{i.fecha_registro}</td>
                                <td><span className="badge bg-info text-dark">{i.estado}</span></td>
                                <td>📍 {i.ubicacion}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default IncidentList;