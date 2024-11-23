import React, { Component } from 'react';
import Chart from 'react-apexcharts'
import "./Grafico_pie.css"
class Donut extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
            type: "donut",
          },
          labels: ["Noite", "Tarde", "Manhã"], // Legendas para cada segmento
          colors: ["#007bff", "#66bb6a", "#ffb74d"], // Azul, verde e laranja
          legend: {
            position: "bottom",
            markers: {
              width: 10,
              height: 10,
            },
            itemMargin: {
              horizontal: 10,
              vertical: 5,
            },
          },
    
        labels:['Noite', 'Tarde', 'Manhã' ],
        dataLabels: {
           enabled: false,
           formatter: function (val) {return val + "%"},
        },
        colors: ['#5A6ACF','#DEE1F4','#C7CEFF']
        
      },
      series: [45,32,23],
     
    }
  }

  render() {

    return (
        
            <div id='Grafico_pie'>
                <div id='Titulos'>
                <div>Pico de consumo diário</div>
    
                <span id='subtitulo'>Dado por m<sup>2</sup></span>
                </div>
    
                <button id='Ver_relatorio'>Vizualizar relatorio</button>
    <div>
      <div className="donut">
        <Chart options={this.state.options} series={this.state.series} type="donut" height={350} width={500} />
      </div>
      </div>
      </div>
    );
  }
}

export default Donut;
