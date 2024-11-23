import { useState } from "react";
import "../csspages/LoginPage.css";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

        <button type="submit" className="login-button">
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
