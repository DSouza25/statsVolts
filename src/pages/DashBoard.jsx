import Donut from "../componentes/Graficos/Consumo_diario";
import Grafico_linha from "../componentes/Graficos/Consumo_semanal";
import Consumo_mensal from "../componentes/Graficos/Consumo_mensal";
function Dashboard() {
  return (
  <div> 
    <Consumo_mensal/>
    <Grafico_linha/>
  <Donut/>


  </div>
  
  )
}

export default Dashboard;
