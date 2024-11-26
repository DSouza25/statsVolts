import { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import "./Grafico_pie.css";

const Consumo_mensal = () => {
  const [chartData, setChartData] = useState({
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
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setChartData((prevData) => {
        const newSeries = prevData.series.map((serie) => {
          const newData = serie.data.map((value) => {
            const oscillation = Math.floor(Math.random() * 10) - 8+11;
            return value + oscillation;
          });
          return { ...serie, data: newData };
        });
        return { ...prevData, series: newSeries };
      });
    }, 2000); // Atualiza a cada 2 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h3>Relatório de Consumo</h3>

      <p style={{ fontSize: "24px", fontWeight: "bold" }}>BRL 230,00</p>

      <p style={{ color: "green" }}>↑ 2.1% Última semana</p>

      <p
        style={{
          fontSize: "13",
          width: "400px",
          color: "rgba(0, 0, 0, 1)",
          marginTop: "20px",
        }}
      >
        Consumo de energia por mês
      </p>

      <button
        style={{
          marginBottom: "90px",
          position: "relative",
          left: "100px",
          top: "30px",
        }}
        id="Ver_relatorio"
      >
        Visualizar relatório
      </button>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={200}
        width={900}
      />
    </div>
  );
};

export default Consumo_mensal;