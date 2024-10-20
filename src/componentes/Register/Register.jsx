import "./Register.css";
import Acesse from "./componentes/Acesse.jsx";
function Register() {
  return (
    <div className="Registrar">
      <h1 className="titulo">
        Criar uma conta. Vamos-lá! <br />
        <span className="menor">
          Já é membro?<span className="Link"> Faça login</span>
        </span>
      </h1>

      <div className="forms">
        <input
          type="text"
          placeholder="Nome Completo:"
          name="Nome Completo"
          required
        />
        <input
          type="tel"
          placeholder="Numero de telefone:"
          name="numero"
          required
        />
        <input type="email" placeholder="E-mail:" name="email" required />
        <input type="password" placeholder="Senha:" name="senha" required />
        <input
          type="password"
          placeholder="Confirmar senha:"
          name="confirmar senha"
          required
        />
        <button className="createAccount">Criar Conta</button>

        <div className="container-linha">
          <div className="linha"></div>
          <span className="ouAcesse">
            Ou <br /> Acesse:
          </span>
          <div className="linha"></div>
        </div>
      </div>
      <Acesse />
    </div>
  );
}
export default Register;
