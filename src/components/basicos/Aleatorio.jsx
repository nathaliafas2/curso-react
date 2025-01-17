import React from "react"

export default function Aleatorio(props){
    const numAleatorio = Math.floor(Math.random() * (props.max - props.min + 1)) + props.min;
    return (
    <div>
        <p>
            <h2> Entre {props.min} e {props.max}, o número sorteado foi: <strong>{ numAleatorio } </strong></h2>          
        </p>
    </div>
    )
}