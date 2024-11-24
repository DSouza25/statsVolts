import Donut from "../componentes/Graficos/Consumo_diario";
import Grafico_linha from "../componentes/Graficos/Consumo_semanal";
import Consumo_mensal from "../componentes/Graficos/Consumo_mensal";
import Destaques from "../componentes/Graficos/Destaques";
function Dashboard() {
  return (
  <div> 
    <Consumo_mensal/>
    <Grafico_linha/>
 
  <Destaques/>


  </div>
  
  )
}

export default Dashboard;
