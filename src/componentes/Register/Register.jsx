import "./Register.css";
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
        <input type="text" placeholder="Nome Completo:" className="inputName" />
        <input
          type="tel"
          placeholder="Numero de telefone:"
          className="inputNumber"
        />
        <input type="email" placeholder="E-mail:" className="inputEmail" />
        <input type="password" placeholder="Senha:" className="inputPassword" />
        <input
          type="password"
          placeholder="Confirmar senha:"
          className="inputCreatePassword"
        />
      </div>
    </div>
  );
}
export default Register;
