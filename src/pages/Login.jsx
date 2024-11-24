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
      <h2>Bem vindo de Volta!</h2>
      <form className="forms">
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

        <button type="submit" className="login-button" onClick={handleSignIn}>
          LOGIN
        </button>
      </form>
      <div className="alternate-access">
        <div className="separator-line"></div>
        <span className="or-access">Ou Acesse:</span>
        <div className="separator-line"></div>
      </div>
      <div className="additional-links">
        <Link to="/register" className="register-link">
          CRIE UMA CONTA
        </Link>
        <Link to="/forgot-password" className="forgot-password-link">
          ESQUECI A SENHA
        </Link>
      </div>
    </div>
  );
}

export default Login;
