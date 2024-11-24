import React, { useState } from "react";
import Chart from "react-apexcharts";
import "./Grafico_pie.css";
//pelo amor de Deus funciona, vai funcionar
const Consumo_mensal = () => {
  const [chartData] = useState({
    series: [
      {
        name: "Últimos 6 dias",
        data: [40, 60, 55, 70, 80, 65, 90, 75, 100, 75, 70, 100], // Dados para a barra azul
      },
      {
        name: "Semana passada",
        data: [30, 50, 45, 60, 70, 55, 80, 65, 90, 85, 100, 110], // Dados para a barra cinza
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        toolbar: {
          show: false, // Remove o menu de opções do gráfico
        },
      },
      colors: ["#007bff", "#ced4da"], // Azul para "Últimos 6 dias" e cinza para "Semana passada"
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "30%", // Largura das barras
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false, // Oculta os valores diretamente sobre as barras
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12",
        ], // Rótulos para os meses
        title: {
          text: "Mês",
        },
        //perte gpt
      },
      yaxis: {
        labels: {
          show: false,
        },
        title: {
          show: false,
        },
      },
      fill: {
        opacity: 1,
      },
      //fim da parte gpt
    },
  });

  return (
    <div>
      <h3>Relatório de Consumo</h3>
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>IDR 7.852.000</p>
      <p style={{ color: "green" }}>↑ 2.1% Última semana</p>
      <p>Consumo de energia por mês</p>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={350}
        width={1000}
      />
    </div>
  );
};

export default Consumo_mensal;
