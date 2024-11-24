import React from "react";

const Destaques = () => {
  //
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        width: "650px",
        margin: "auto",
      }}
    >
      <h3 style={{ textAlign: "center" }}>Destaques</h3>
      <p style={{ textAlign: "left", fontSize: "14px", color: "#666" }}>
        Pontos de atenção mensais
      </p>

      <svg width="350" height="350" viewBox="0 0 350 350">
        {/* Círculo "Geral" */}
        <circle cx="175" cy="175" r="70" fill="#F6C23E" />
        <text
          x="175"
          y="170"
          textAnchor="middle"
          fontSize="18"
          fill="#fff"
          fontWeight="bold"
        >
          -17,1 kWh/h
        </text>
        <text x="175" y="190" textAnchor="middle" fontSize="14" fill="#fff">
          geral
        </text>

        {/* Círculo "Economia" */}
        <circle cx="90" cy="110" r="50" fill="#4E73DF" />
        <text
          x="90"
          y="105"
          textAnchor="middle"
          fontSize="16"
          fill="#fff"
          fontWeight="bold"
        >
          +1,5%
        </text>
        <text x="90" y="125" textAnchor="middle" fontSize="14" fill="#fff">
          Economia
        </text>

        {/* Círculo "Rede Analisada" */}
        <circle cx="80" cy="240" r="65" fill="#36A2EB" />
        <text
          x="80"
          y="235"
          textAnchor="middle"
          fontSize="16"
          fill="#fff"
          fontWeight="bold"
        >
          92%
        </text>
        <text x="80" y="255" textAnchor="middle" fontSize="14" fill="#fff">
          rede analisada
        </text>
      </svg>
    </div>
  );
};

export default Destaques;
