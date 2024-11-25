import { useState } from "react";
import Chart from "react-apexcharts";
import "./Grafico_pie.css";

function Consumo_semanal() {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "Últimos 6 dias",
        data: [30, 40, 35, 50, 49, 60], // Dados para a série azul
      },
      {
        name: "Semana passada",
        data: [20, 30, 40, 35, 45, 55], // Dados para a série cinza
      },
    ],
    options: {
      chart: {
        height: 322,
        type: "line",
        toolbar: {
          show: false, // Remove o menu de opções do gráfico
        },
      },
      colors: ["#007bff", "#ced4da"], // Azul para os últimos 6 dias e cinza para a semana passada
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth", // Linhas suaves
        width: [3, 2], // Diferença na espessura das linhas
      },
      xaxis: {
        categories: ["01", "02", "03", "04", "05", "06"], // Dias da semana
        title: {
          text: "Dias",
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
        title: {
          show: false,
        },
      },
      legend: {
        position: "bottom", // Legenda na parte inferior
        markers: {
          width: 10,
          height: 10,
        },
      },
      tooltip: {
        shared: true, // Mostra ambas as séries ao passar o mouse
      },
    },
  });

  return (
    <div>
      <h3>Semana</h3>
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>85 kWh/m²</p>
      <p style={{ color: "red" }}>↓ 2.1% Semana passada</p>
      <p style={{ color: "green" }}>↑ 3.1% Fim da semana</p>
      <button
        style={{
          marginBottom: "90px",
          position: "relative",
          left: "20px",
          top: "5px",
        }}
        id="Ver_relatorio"
      >
        Vizualizar relatorio
      </button>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="line"
        height={200}
        width={350}
      />
    </div>
  );
}

//teste

export default Consumo_semanal;
