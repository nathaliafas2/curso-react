import "./Sorteio.css";
import React, { useState } from "react";

export default (props) => {
  function gerarNumeros(qtde) {
    const numeros = Array(qtde)
      .fill(0)
      .reduce((nums) => {
        const novoNumero = gerarNumeroNaoContido(1, 60, nums);
        return [...nums, novoNumero];
      }, [])
      .sort((n1, n2) => n1 - n2);
    return numeros;
  }

  function gerarNumeroNaoContido(min, max, array) {
    const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min;
    return array.includes(aleatorio)
      ? gerarNumeroNaoContido(min, max, array)
      : aleatorio;
  }

  const numerosIniciais = gerarNumeros(props.qtdeNumero);
  const [qtdeNumero, setQtde] = useState(props.qtdeNumero || 6);
  const [numeros, setNumeros] = useState(numerosIniciais);

  return (
    <div className="Sorteio">
      <h2>Mega</h2>
      <h3>{numeros.join(" ")}</h3>
      <div>
        <label htmlFor="">Quantidade de Números</label>
        <div>
          <input
            min="6"
            max="17"
            type="number"
            value={qtdeNumero}
            onChange={(e) => {
              setQtde(+e.target.value);
              setNumeros(gerarNumeros(+e.target.value));
            }}
          />
        </div>
      </div>
      <button onClick={(_) => setNumeros(gerarNumeros(qtdeNumero))}>
        Gerar Números
      </button>
    </div>
  );
};
