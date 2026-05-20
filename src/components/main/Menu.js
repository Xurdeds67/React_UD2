import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Menu({ usuarioLogueado, onLogout }) {
    const navigate = useNavigate();

    const manejarCierreSesion = () => {
        onLogout();
        navigate('/login'); 
    };

    if (!usuarioLogueado) return null;

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Incidencias IES</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/incidencias">Ver Incidencias</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/registrar">Registrar Incidencia</Link>
                        </li>

                        {usuarioLogueado.rol.nombre_rol === 'admin' && (
                         <li className="nav-item">
                             <Link className="nav-link" to="/usuarios">Gestión Usuarios</Link>
                        </li>
                        )}
                    </ul>
                    <button className="btn btn-outline-danger" onClick={manejarCierreSesion}>
                        Cerrar sesión
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Menu;