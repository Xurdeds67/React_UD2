import React from "react";
import Logo from '../../img/logoIES.png';

class Header extends React.Component{
    render(){
        return(
            <div className="text-center text-white p-4" style={{ backgroundColor: "#0d6efd", borderBottom: "4px solid #0a58ca" }}>
                <img src={Logo} alt="Logo IES" style={{ height: '70px', marginRight: '20px', borderRadius: '10px' }} /><br></br>
                <h2 style={{ display: 'inline-block', margin: 0, fontWeight: 'bold' }}>Bienvenido a la página de gestión de incidencias</h2>
            </div>
        );
    };
};

export default Header;