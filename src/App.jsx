import "./App.css";
import React from "react";
import PrimeiroNovo from "./components/basicos/PrimeiroNovo";
import ComParametro from "./components/basicos/ComParamentro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./layouts/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";
import Sorteio from "./components/mega/Sorteio";

export default function App(props) {
  return (
    <div className="App">
      <h1> Fundamentos React </h1>

      <div className="Cards">
        <Card titulo="#14 - Desafio Mega Sena" color="rgb(216, 89, 50)">
          <Sorteio qtdeNumero={3} />
        </Card>

        <Card titulo="#13 - Contador" color="rgb(12, 151, 133)">
          <Contador numeroInicial={0}> </Contador>
        </Card>

        <Card
          titulo="#12 - Componente Controlado (Input)"
          color="rgb(211, 22, 69)"
        >
          <Input> </Input>
        </Card>

        <Card titulo="#11 - Comunicação Indireta" color="rgb(211, 22, 138)">
          <IndiretaPai> </IndiretaPai>
        </Card>

        <Card titulo="#10 - Comunicação Direta" color="rgb(183, 211, 22)">
          <DiretaPai> </DiretaPai>
        </Card>

        <Card titulo="#9 - Renderização Condicional" color="rgb(50, 126, 212)">
          <ParOuImpar numero={21}></ParOuImpar>
          <UsuarioInfo usuario={{ nome: "Fernando" }}></UsuarioInfo>
          <UsuarioInfo usuario={{}}></UsuarioInfo>
        </Card>

        <Card titulo="#8 - Desafio Repeticao" color=" #e3ab10">
          <TabelaProdutos></TabelaProdutos>
        </Card>

        <Card titulo="#7 - Repetição" color=" #FF6347">
          <ListaAlunos></ListaAlunos>
        </Card>

        <Card titulo="#06 - Componente com Filhos" color=" #ff7e02">
          <Familia sobrenome="Boreal">
            <FamiliaMembro nome="Aurora"></FamiliaMembro>
            <FamiliaMembro nome="Ricardo"></FamiliaMembro>
            <FamiliaMembro nome="Antonia"></FamiliaMembro>
          </Familia>
        </Card>

        <Card titulo="#05 - Componente com filhos" color=" #9bb412">
          <Familia sobrenome="Boreal">
            <FamiliaMembro nome="Aurora"></FamiliaMembro>
            <FamiliaMembro nome="Ricardo"></FamiliaMembro>
            <FamiliaMembro nome="Antonia"></FamiliaMembro>
          </Familia>
        </Card>

        <Card titulo="#04 - Desafio Aleatório" color=" #d87373">
          <Aleatorio min={1} max={10} />
        </Card>

        <Card titulo="#03 - Fragmento" color=" #eca162">
          <Fragmento />
        </Card>

        <Card titulo="#02 - Com Parametro" color=" #33a99a">
          <ComParametro
            titulo="Situação do Aluno"
            aluno="Nathália Fernandes"
            nota={9.5}
          ></ComParametro>
        </Card>

        <Card titulo="#01 - Primeiro Componente" color="	#6648a1">
          <PrimeiroNovo></PrimeiroNovo>
        </Card>
      </div>
    </div>
  );
}
