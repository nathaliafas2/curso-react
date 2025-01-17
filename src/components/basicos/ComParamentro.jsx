import React from "react"

export default function ComParametro(props){
    console.log(props)
    const status = props.nota >= 7 ? 'Aprovado' : 'Reprovado'
    return (
    <div>
        <p>
            <h2>{ props.titulo }</h2>
            <h3><strong>{ props.aluno } </strong>
                 obteve a nota            
                <strong> { props.nota }</strong>
                e foi
                <strong> { status }</strong>
            </h3>
        </p>
    </div>
    )
}