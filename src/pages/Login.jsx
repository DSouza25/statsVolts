import "../csspages/LoginPage.css";
import { Link, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../componentes/Register/Config/firebase";
import { useState } from "react";

import { useEffect } from "react";

function Login() {
  const [SignInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  function handleSignIn(e) {
    e.preventDefault();
    SignInWithEmailAndPassword(email, password);
  }

  useEffect(() => {
    if (user) {
      alert("conta confirmada");
      navigate("/dashboard");
    }
  }); // Redireciona para a página de dashboard } }, [user, navigate]);

  useEffect(() => {
    if (error) {
      alert("Conta Inválida, Verifique email e senha.");
    }
  }, [error]);

  return (
    <div className="login-container">
      <div className="login-header">
        <h1>Faça Login em sua conta.</h1>
      </div>
      <h2 id="Bem_vindo">Bem vindo de Volta!</h2>
      <form id="formulario" className="forms">
        <input
          type="email"
          placeholder="E-mail:"
          name="email"
          id="emailInput"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha:"
          name="senha"
          id="passwordInput"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <span>
          <input type="checkbox" id="lembreDeMim" />
          <span id="Lembra-me">Lembra-me</span>
        </span>
        <button type="submit" className="login-button">
          LOGIN
        </button>
      </form>
      <div className="additional-links">
        <Link to="/register" className="register-link">
          Não tenho uma conta. <span id="Cadastrar">Cadastrar</span>
        </Link>
      </div>
      <Link
        id="Esqueci_senha"
        to="/forgot-password"
        className="forgot-password-link"
      >
        Esqueceu a senha?
      </Link>
    </div>
  );
}

export default Login;
