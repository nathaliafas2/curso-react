import "./Input.css";
import React, { useState } from "react";

export default (props) => {
  const [valor, setValor] = useState("Inicial");

  function quandoMudar(e) {
    setValor(e.target.value);
  }

  return (
    <div className="Input">
      <h2>{valor}</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "10px",
        }}
      >
        <input id="input" value={valor} onChange={quandoMudar} />
        <p></p>
        <input id="input" value={valor} readOnly />
      </div>
    </div>
  );
};
