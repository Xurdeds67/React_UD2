import React from 'react';

function Login(props) {
    const manejarEnvio = (e) => {
        e.preventDefault(); 
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        props.onLogin(email, password);
    };

    return (
        <div className="card p-4 shadow-lg" style={{ backgroundColor: "#ffffff", border: "3px solid #0d6efd", borderRadius: "15px" }}>
            <h3 className="card-title mb-4 text-center" style={{ color: "#0d6efd", fontWeight: "bold" }}>
                Iniciar sesión
            </h3>
            <form onSubmit={manejarEnvio}>
                <div className="mb-3">
                    <label className="form-label" style={{ fontWeight: "700", color: "#0d6efd" }}>
                        Correo
                    </label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        required
                        style={{ border: "2px solid #ced4da", borderRadius: "8px" }}
                    />
                </div>
                <div className="mb-4">
                    <label className="form-label" style={{ fontWeight: "700", color: "#0d6efd" }}>
                        Contraseña
                    </label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        required
                        style={{ border: "2px solid #ced4da", borderRadius: "8px" }}
                    />
                </div>
                <button
                    type="submit"
                    className="btn w-100"
                    style={{ background: "#198754", color: "white", fontWeight: "bold", borderRadius: "10px", padding: "12px" }}
                >
                    Entrar
                </button>
            </form>
        </div>
    );
}

export default Login;