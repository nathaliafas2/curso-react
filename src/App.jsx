import React from "react";
import PrimeiroNovo from './components/basicos/PrimeiroNovo';
import ComParametro from './components/basicos/ComParamentro';
import Fragmento from './components/basicos/Fragmento';

export default function App(props){
    return (
        <div id="app">
            <h1> Fundamentos React </h1> 
          <Fragmento />

            <ComParametro 
                titulo="Situação do Aluno" 
                aluno="Nathália Fernandes"
                nota={9.5}>
            </ComParametro>
            <ComParametro 
                aluno="Jesus Cristo"
                nota={10.0}>
            </ComParametro>
            
            <PrimeiroNovo></PrimeiroNovo>        
        </div>
    )
}