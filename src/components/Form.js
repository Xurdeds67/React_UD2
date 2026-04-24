import React from "react";

function Form(props) {

    const envioFormulario = (event) => {
        event.preventDefault();
        const form = event.target;

        // Llamamos a la función del padre pasando los valores
        // NOTA: El segundo parámetro es form.email.value
        props.agregarIncidencia(
            form.titulo.value,
            form.email.value, 
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
            }}
        >
            <h2 className="card-title mb-4 text-center" style={{ color: "#0d6efd", fontWeight: "bold" }}>
                📝 Registrar Incidencia
            </h2>
            <form onSubmit={envioFormulario}>

                {/* Título */}
                <div className="mb-3">
                    <label className="form-label" style={{ fontWeight: "700", color: "#0d6efd" }}>
                        📌 Título:
                    </label>
                    <input
                        className="form-control"
                        type="text"
                        name="titulo"
                        placeholder="Ej: Fallo en impresora"
                        required
                        style={{ border: "2px solid #ced4da", borderRadius: "8px" }}
                    />
                </div>

                {/* Email del Usuario (CAMBIO IMPORTANTE) */}
                <div className="mb-3">
                    <label className="form-label" style={{ fontWeight: "700", color: "#0d6efd" }}>
                        📧 Email del Usuario:
                    </label>
                    <input
                        className="form-control"
                        type="email"
                        name="email" 
                        placeholder="ejemplo@educastur.org"
                        required
                        style={{ border: "2px solid #ced4da", borderRadius: "8px" }}
                    />
                </div>

                {/* Descripción */}
                <div className="mb-3">
                    <label className="form-label" style={{ fontWeight: "700", color: "#0d6efd" }}>
                        📄 Descripción:
                    </label>
                    <textarea
                        className="form-control"
                        name="descripcion"
                        placeholder="Detalles de la incidencia..."
                        rows="3"
                        required
                        style={{ border: "2px solid #ced4da", borderRadius: "8px" }}
                    ></textarea>
                </div>

                {/* Categoría */}
                <div className="mb-3">
                    <label className="form-label" style={{ fontWeight: "700", color: "#0d6efd" }}>
                        🔧 Categoría:
                    </label>
                    <select
                        className="form-control"
                        name="categoria"
                        required
                        style={{ border: "2px solid #ced4da", borderRadius: "8px" }}
                    >
                        <option value="">Seleccionar...</option>
                        <option>Hardware</option>
                        <option>Software</option>
                        <option>Red y conectividad</option>
                        <option>Usuarios y accesos</option>
                        <option>Infraestructuras</option>
                    </select>
                </div>

                {/* Nivel de urgencia */}
                <div className="mb-3">
                    <label className="form-label" style={{ fontWeight: "700", color: "#0d6efd" }}>
                        ⚠️ Urgencia:
                    </label>
                    <select
                        className="form-control"
                        name="nivel"
                        required
                        style={{ border: "2px solid #ced4da", borderRadius: "8px" }}
                    >
                        <option value="">Seleccionar...</option>
                        <option>Alta</option>
                        <option>Media</option>
                        <option>Baja</option>
                    </select>
                </div>

                {/* Ubicación */}
                <div className="mb-4">
                    <label className="form-label" style={{ fontWeight: "700", color: "#0d6efd" }}>
                        📍 Ubicación:
                    </label>
                    <input
                        className="form-control"
                        type="text"
                        name="ubicacion"
                        placeholder="Ej: Aula 5"
                        required
                        style={{ border: "2px solid #ced4da", borderRadius: "8px" }}
                    />
                </div>

                {/* Botón */}
                <button
                    type="submit"
                    className="btn w-100"
                    style={{
                        background: "linear-gradient(135deg, #198754 0%, #146c43 100%)",
                        color: "white",
                        fontWeight: "bold",
                        borderRadius: "10px",
                        padding: "12px"
                    }}
                >
                    ✅ Registrar
                </button>

            </form>
        </div>
    );
}

export default Form;