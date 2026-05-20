import React from 'react';

function UsersForm({ onAgregar }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const rolSeleccionado = form.rol.value === 'admin' 
            ? { id: 2, nombre_rol: "admin", descripcion: "Administrador del sistema con permisos totales" }
            : { id: 1, nombre_rol: "comun", descripcion: "Usuario regular del sistema" };

        onAgregar({
            nombre: form.nombre.value,
            email: form.email.value,
            password: form.password.value,
            rol: rolSeleccionado,
            fecha_registro: new Date().toISOString().split('T')[0] 
        });
        
        form.reset();
    };

    return (
        <div className="card p-4 shadow-lg rounded" style={{ border: "2px solid #0d6efd" }}>
            <h5 className="text-center fw-bold mb-4" style={{ color: "#0d6efd" }}>Nuevo Usuario</h5>
            <form onSubmit={handleSubmit}>
                <input className="form-control mb-3" name="nombre" placeholder="Nombre completo" required />
                <input className="form-control mb-3" type="email" name="email" placeholder="Email" required />
                <input className="form-control mb-3" type="password" name="password" placeholder="Contraseña" required />
                <select className="form-control mb-4" name="rol" required>
                    <option value="">Seleccionar rol...</option>
                    <option value="comun">Común</option>
                    <option value="admin">Administrador</option>
                </select>
                <button type="submit" className="btn btn-primary w-100 fw-bold">Registrar Usuario</button>
            </form>
        </div>
    );
}

export default UsersForm;