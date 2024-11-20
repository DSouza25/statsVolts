import "../pages/csspages/Pagina_inicial.css";
import Acesse from "./componentes/Register/componentes/Acesse";
import { Link } from "react-router-dom";

function Tela_inicial() {
  return (
    <div className="acesse_Aqui">
      <div>
        <h1>ACESSE AQUI</h1>
      </div>
      <div className="botoes">
        <Link id="botao_criar_conta" to={"/Criar_conta"}>
          CRIAR CONTA
        </Link>

        <Link id="botao_login" to={"/Login"}>
          LOGIN
        </Link>
      </div>

      <div className="container-linha">
        <div className="linha"></div>
        <span className="ouAcesse">
          Ou <br /> Acesse:
        </span>
        <div className="linha"></div>
      </div>
      <Acesse />
    </div>
  );
}
export default Tela_inicial;
