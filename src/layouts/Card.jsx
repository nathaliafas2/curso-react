import "./Card.css";
import React from "react";

export default function Card(props){
    return (
        <div className="Card">
             <div className="Title"> <h3>{props.titulo}</h3></div>
             <div className="Content">Conteudo</div>
        </div>
    )
}