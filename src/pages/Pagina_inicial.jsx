import "../csspages/Pagina_inicial.css";
import Acesse from "../componentes/Register/componentes/Acesse.jsx";
import { Link, useNavigate } from "react-router-dom";
function Tela_inicial() {
    return (
        <div className='acesse_Aqui'>
            <div>
                <h1>SEJA BEM VINDO!</h1>
            </div>
            <h2>Faça login na sua conta para continuar</h2>
            <div className='botoes'>

                <Link id='botao_criar_conta'
                    to={"/Criar_conta"}>CRIAR CONTA</Link>

                <Link id='botao_login' to={"/Login"}>LOGIN</Link>
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
    )
}
export default Tela_inicial;