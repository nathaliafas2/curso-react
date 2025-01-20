import './App.css'
import React from "react";
import PrimeiroNovo from './components/basicos/PrimeiroNovo';
import ComParametro from './components/basicos/ComParamentro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio'
import Card from "./layouts/Card";
import Familia from './components/basicos/Familia';

export default function App(props){
    return (
        <div className="App">
            <h1> Fundamentos React </h1> 

            <div className="Cards">

                <Card 
                    titulo="#05 - Componente com filhos" color=" #9bb412">
                        <Familia sobrenome="Boreal"></Familia>   
                </Card>

                <Card 
                    titulo="#04 - Desafio Aleatório" color=" #d87373">
                        <Aleatorio min={1} max={10}/>
                </Card>

                <Card 
                    titulo="#03 - Fragmento" color=" #eca162">
                        <Fragmento />
                </Card>

                <Card 
                    titulo="#02 - Com Parametro" color=" #33a99a">
                    <ComParametro 
                        titulo="Situação do Aluno" 
                        aluno="Nathália Fernandes"
                        nota={9.5}>
                    </ComParametro>
                </Card>
                

                <Card 
                    titulo="#01 - Primeiro Componente" color="	#6648a1">
                        <PrimeiroNovo></PrimeiroNovo>   
                </Card>
                
             </div>
        </div>
    )
}