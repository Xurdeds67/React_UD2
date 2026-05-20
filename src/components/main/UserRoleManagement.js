import React from 'react';
import UsersForm from './UsersForm';

function UserRoleManagement({ usuarios, setUsuarios, API_URL }) {
   
    const rolComun = { id: 1, nombre_rol: "comun", descripcion: "Usuario regular del sistema" };
    const rolAdmin = { id: 2, nombre_rol: "admin", descripcion: "Administrador del sistema con permisos totales" };

    const onCambiarRol = async (id, rolActual) => {
        const nuevoRol = rolActual?.nombre_rol === 'admin' ? rolComun : rolAdmin;
        
        try {
            let response = await fetch(`${API_URL}/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ rol: nuevoRol })
            });
            if (response.ok) {
                let userActualizado = await response.json();
                setUsuarios(usuarios.map(u => u.id === id ? userActualizado : u));
            }
        } catch (e) {
            console.error("Error al cambiar rol:", e);
        }
    };

    const agregarUsuario = async (nuevoUser) => {
        try {
            let response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(nuevoUser)
            });
            if(response.ok) {
                let data = await response.json();
                setUsuarios([...usuarios, data]);
            }
        } catch (e) { console.error(e); }
    };

    return (
        <div className="container mt-3">
            <h3 className="mb-4 text-center" style={{ color: "#0d6efd", fontWeight: "bold" }}>
                👥 Gestión de Usuarios
            </h3>
            
            <div className="row">
                <div className="col-md-8">
                    <table className="table table-hover shadow bg-white rounded">
                        <thead className="bg-dark text-white">
                            <tr>
                                <th>Nombre</th>
                                <th>Email</th>
                                <th>Rol</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuarios.map(u => (
                                <tr key={u.id}>
                                    <td>{u.nombre}</td>
                                    <td>{u.email}</td>
                                    <td>
                                        <span className={`badge ${u.rol?.nombre_rol === 'admin' ? 'bg-danger' : 'bg-success'}`}>
                                            {u.rol?.nombre_rol || 'Sin rol'}
                                        </span>
                                    </td>
                                    <td>
                                        <button className="btn btn-sm btn-outline-dark" onClick={() => onCambiarRol(u.id, u.rol)}>
                                            Cambiar Rol
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="col-md-4">
                    <UsersForm onAgregar={agregarUsuario} />
                </div>
            </div>
        </div>
    );
}

export default UserRoleManagement;