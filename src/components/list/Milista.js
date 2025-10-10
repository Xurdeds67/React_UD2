import React from "react";
class Milista extends React.Component{
    render(){
        return(
            <div ClassName="ista">
            <h4>Lista de </h4>
            <ul>
                <li>{this.props.nombre1}</li>
                <li>{this.props.nombre2}</li>
                <li>{this.props.nombre3}</li>
                <li>{this.props.nombre4}</li>
            </ul>
            </div>
        );
    };
};
export default Milista;