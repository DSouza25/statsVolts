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
  document.getElementById("password").addEventListener("input", function () {
    const password = this.value;
    const requeriment = document.getElementById("requerimentsSenha");

    requeriment.style.display = "block";

    const length = document.getElementById("length");

    if (password.length >= 6) {
      length.classList.remove("invalid");
      length.classList.add("valid");
    } else {
      length.classList.remove("valid");
      length.classList.add("invalid");
    }

    const letters = document.getElementById("letters");

    if(/[a-zA-Z]/.test(password)) {
      letters.classList.remove("invalid")
      letters.classList.add("valid")
    } else {
      letters.classList.remove("valid")
      letters.classList.
    }
  });

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

        <div id="requerimentsSenha">
          <ul>
            <li id="length" className="invalid">
              deve ter 6 caracteres
            </li>
            <li id="letters" className="invalid">
              Letras
            </li>
            <li id="numbers" className="invalid">
              Numeros
            </li>
            <li id="symbols" className="invalid">
              Simbolos
            </li>
          </ul>
        </div>

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
