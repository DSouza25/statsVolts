import Donut from "../componentes/Graficos/Consumo_diario";
import Consumo_mensal from "../componentes/Graficos/Consumo_mensal";
import "../csspages/Dashboard.css";
import Consumo_semanal from "../componentes/Graficos/Consumo_semanal";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="containerDash">
      <div className="box">
        <Consumo_mensal />
      </div>
      <div className="box">
        <Donut />
      </div>
      <div className="box">
        destaque
        <div className="box" id="pontosConsumo">
          <span id="title">Pricipais pontos de consumo</span>
          <Link to={"/"} className="listPontos">
            <img src="src/assets/vitrine.png" alt="" />
            <span className="listPontosName">
              Vitrine Principal <span className="kwhVitrine">60 kWh/m²</span>
            </span>
          </Link>
          <Link to={"/"} className="listPontos">
            <img src="src/assets/Estoque.png" alt="" />
            <span className="listPontosName">
              Estoque <span className="kwhEstoque">40 kWh/m²</span>
            </span>
          </Link>
          <Link to={"/"} className="listPontos">
            <img src="src\assets\Escritorio.png" alt="" />
            <span className="listPontosName">
              Escritório/Administrativo
              <span className="kwhEscritorio">22 kWh/m²</span>
            </span>
          </Link>
          <Link to={"/"} className="listPontos">
            <img src="src\assets\setor-novidades.png" alt="" />
            <span className="listPontosName">
              Setor de Novidades
              <span className="kwhNovidade">22 kWh/m²</span>
            </span>
          </Link>
        </div>
      </div>

      <div className="box" id="semanal">
        <Consumo_semanal />
      </div>
    </div>
  );
}

export default Dashboard;
