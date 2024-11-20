import "./Register.css";

import Acesse from "./componentes/Acesse.jsx";
import { auth, db } from "./Config/firebase.js";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import "firebase/auth";

const Register = () => {
  const [fullname, setFullname] = useState("");
  const [numberTel, setNumberTel] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const navigate = useNavigate();

  async function handleForm(e) {
    e.preventDefault();

    //validação que retorna um alert na tela com a mensagem da restrição
    if (!validarSenha(password)) {
      alert(
        "A senha deve conter no mínimo 8 caracteres, incluindo um número, uma letra maiúscula, uma letra minúscula e um caractere especial."
      );

      return;
    }

    //jogar os valores dos inputs para o firetore database, estrutura dentro de uma função.
    await addDoc(collection(db, "usuarios"), {
      nome_completo: fullname,
      numero_telefone: numberTel,
      email: email,
      senha: password,
    });
    alert("cadastro realizado!");

    setFullname("");
    setNumberTel("");
    setEmail("");
    setPassword("");
    setPasswordConfirm("");
    navigate("/login");
  }

  //função assincrona que ao clicar no botao o usuario tem a sua autenticação de email e senha dentro do firebase
  async function cadastrar() {
    await createUserWithEmailAndPassword(auth, email, password);
  }

  // uma constante function que restrige a senha com o formato default
  const validarSenha = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    return regex.test(password);
  };

  return (
    <div className="Registrar">
      <h1 className="titulo">
        Criar uma conta. Vamos-lá! <br />
        <span className="menor">
          Já é membro?
          <Link className="Link" to={"/Login"}>
            Faça login
          </Link>
        </span>
      </h1>

      <form className="forms" onSubmit={handleForm}>
        <input
          type="text"
          placeholder="Nome Completo:"
          name="Nome Completo"
          id="fullNameInput"
          onChange={(e) => setFullname(e.target.value)}
          value={fullname}
          required
        />
        <input
          type="text"
          placeholder="Numero de telefone:"
          name="numero"
          id="telNumberInput"
          onChange={(e) => setNumberTel(e.target.value)}
          value={numberTel}
          required
        />
        <input
          type="email"
          placeholder="E-mail:"
          name="email"
          id="emailInput"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <input
          type="password"
          placeholder="Senha:"
          name="senha"
          id="passwordInput"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />

        <input
          type="password"
          placeholder="Confirmar senha:"
          name="confirmar senha"
          id="confPasswordInput"
          onChange={(e) => setPasswordConfirm(e.target.value)}
          value={passwordConfirm}
          required
        />

        <button
          className="createAccount"
          type="submit"
          id="buttonCreateAccount"
          onClick={cadastrar}
        >
          Criar Conta
        </button>

        <div className="container-linha">
          <div className="linha"></div>
          <span className="ouAcesse">
            Ou <br /> Acesse:
          </span>
          <div className="linha"></div>
        </div>
      </form>

      <Acesse />
    </div>
  );
};
export default Register;
