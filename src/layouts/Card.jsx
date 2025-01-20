import "./Card.css";
import React from "react";

export default function Card(props){

    const estilo = {
        backgroundColor: props.color,
        borderColor: props.color

    }

    return (
        <div className="Card" style={estilo}>
             <div className="Title"> <h3>{props.titulo}</h3></div>
             <div className="Content">
                {props.children}
                </div>
        </div>
    )
}