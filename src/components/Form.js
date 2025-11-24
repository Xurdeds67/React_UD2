import React from "react";

function Form(props) {

    const envioFormulario = (event) => {
        event.preventDefault();
        const form = event.target;

        props.agregarIncidencia(
            form.titulo.value,
            form.usuario.value,
            form.descripcion.value,
            form.categoria.value,
            form.nivel.value,
            form.ubicacion.value
        );

        // Limpiar el formulario después de enviar
        form.reset();
    };

    return (
        <div
            className="card p-4 shadow-lg"
            style={{
                backgroundColor: "#ffffff",
                border: "3px solid #0d6efd",
                borderRadius: "15px",
                boxShadow: "0 8px 16px rgba(13, 110, 253, 0.2)"
            }}
        >
            <h2
                className="card-title mb-4 text-center"
                style={{
                    color: "#0d6efd",
                    fontWeight: "bold",
                    fontSize: "28px",
                    textShadow: "1px 1px 2px rgba(0,0,0,0.1)"
                }}
            >
                📝 Registrar Nueva Incidencia
            </h2>
            <form onSubmit={envioFormulario}>

                {/*titulo incidencia*/}
                <div className="mb-3">
                    <label
                        className="form-label"
                        style={{
                            fontWeight: "700",
                            color: "#0d6efd",
                            fontSize: "15px",
                            marginBottom: "8px"
                        }}
                    >
                        📌 Título:
                    </label>
                    <input
                        className="form-control"
                        type="text"
                        name="titulo"
                        placeholder="Introduce el título de la incidencia"
                        required
                        style={{
                            border: "2px solid #ced4da",
                            borderRadius: "8px",
                            padding: "10px 15px",
                            fontSize: "14px",
                            transition: "all 0.3s"
                        }}
                        onFocus={(e) => e.target.style.border = "2px solid #0d6efd"}
                        onBlur={(e) => e.target.style.border = "2px solid #ced4da"}
                    />
                </div>

                {/* usuario*/}
                <div className="mb-3">
                    <label
                        className="form-label"
                        style={{
                            fontWeight: "700",
                            color: "#0d6efd",
                            fontSize: "15px",
                            marginBottom: "8px"
                        }}
                    >
                        👤 Usuario:
                    </label>
                    <input
                        className="form-control"
                        type="text"
                        name="usuario"
                        placeholder="Introduce tu nombre de usuario"
                        required
                        style={{
                            border: "2px solid #ced4da",
                            borderRadius: "8px",
                            padding: "10px 15px",
                            fontSize: "14px",
                            transition: "all 0.3s"
                        }}
                        onFocus={(e) => e.target.style.border = "2px solid #0d6efd"}
                        onBlur={(e) => e.target.style.border = "2px solid #ced4da"}
                    />
                </div>

                {/* Descripción*/}
                <div className="mb-3">
                    <label
                        className="form-label"
                        style={{
                            fontWeight: "700",
                            color: "#0d6efd",
                            fontSize: "15px",
                            marginBottom: "8px"
                        }}
                    >
                        📄 Descripción:
                    </label>
                    <textarea
                        className="form-control"
                        name="descripcion"
                        placeholder="Describe detalladamente la incidencia..."
                        rows="4"
                        required
                        style={{
                            border: "2px solid #ced4da",
                            borderRadius: "8px",
                            padding: "10px 15px",
                            fontSize: "14px",
                            transition: "all 0.3s",
                            resize: "vertical"
                        }}
                        onFocus={(e) => e.target.style.border = "2px solid #0d6efd"}
                        onBlur={(e) => e.target.style.border = "2px solid #ced4da"}
                    ></textarea>
                </div>

                <div className="mb-3">
                    <label
                        className="form-label"
                        style={{
                            fontWeight: "700",
                            color: "#0d6efd",
                            fontSize: "15px",
                            marginBottom: "8px"
                        }}
                    >
                        🔧 Categoría:
                    </label>
                    <select
                        className="form-control"
                        name="categoria"
                        required
                        style={{
                            border: "2px solid #ced4da",
                            borderRadius: "8px",
                            padding: "10px 15px",
                            fontSize: "14px",
                            transition: "all 0.3s",
                            cursor: "pointer"
                        }}
                        onFocus={(e) => e.target.style.border = "2px solid #0d6efd"}
                        onBlur={(e) => e.target.style.border = "2px solid #ced4da"}
                    >
                        <option value="">Seleccionar categoría...</option>
                        <option>Hardware</option>
                        <option>Software</option>
                        <option>Red y conectividad</option>
                        <option>Usuarios y accesos</option>
                        <option>Infraestructuras</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label
                        className="form-label"
                        style={{
                            fontWeight: "700",
                            color: "#0d6efd",
                            fontSize: "15px",
                            marginBottom: "8px"
                        }}
                    >
                        ⚠️ Nivel de urgencia:
                    </label>
                    <select
                        className="form-control"
                        name="nivel"
                        required
                        style={{
                            border: "2px solid #ced4da",
                            borderRadius: "8px",
                            padding: "10px 15px",
                            fontSize: "14px",
                            transition: "all 0.3s",
                            cursor: "pointer"
                        }}
                        onFocus={(e) => e.target.style.border = "2px solid #0d6efd"}
                        onBlur={(e) => e.target.style.border = "2px solid #ced4da"}
                    >
                        <option value="">Seleccionar urgencia...</option>
                        <option>Alta</option>
                        <option>Media</option>
                        <option>Baja</option>
                    </select>
                </div>

                {/* Ubicación*/}
                <div className="mb-4">
                    <label
                        className="form-label"
                        style={{
                            fontWeight: "700",
                            color: "#0d6efd",
                            fontSize: "15px",
                            marginBottom: "8px"
                        }}
                    >
                        📍 Ubicación:
                    </label>
                    <input
                        className="form-control"
                        type="text"
                        name="ubicacion"
                        placeholder="Ej: B205, Aula 3, Sala de servidores..."
                        required
                        style={{
                            border: "2px solid #ced4da",
                            borderRadius: "8px",
                            padding: "10px 15px",
                            fontSize: "14px",
                            transition: "all 0.3s"
                        }}
                        onFocus={(e) => e.target.style.border = "2px solid #0d6efd"}
                        onBlur={(e) => e.target.style.border = "2px solid #ced4da"}
                    />
                </div>

                {/*Botón*/}
                <button
                    type="submit"
                    className="btn mx-auto d-grid w-100"
                    style={{
                        background: "linear-gradient(135deg, #198754 0%, #146c43 100%)",
                        color: "white",
                        fontWeight: "bold",
                        padding: "14px",
                        fontSize: "17px",
                        border: "none",
                        borderRadius: "10px",
                        boxShadow: "0 4px 8px rgba(25, 135, 84, 0.3)",
                        transition: "all 0.3s",
                        cursor: "pointer"
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.transform = "translateY(-2px)";
                        e.target.style.boxShadow = "0 6px 12px rgba(25, 135, 84, 0.4)";
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = "translateY(0)";
                        e.target.style.boxShadow = "0 4px 8px rgba(25, 135, 84, 0.3)";
                    }}
                >
                    ✅ Registrar Incidencia
                </button>

            </form>
        </div>
    );
}

export default Form;