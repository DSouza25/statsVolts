import "../csspages/LoginPage.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-container">
      <div className="login-header">
        <h1>BEM-VINDO</h1>
      </div>
      <h2>Insira suas credenciais para fazer login</h2>
      <div className="login-form">
        <label htmlFor="username">Usuário:</label>
        <input type="text" id="username" name="username" required />
        
        <label htmlFor="password">Senha:</label>
        <input type="password" id="password" name="password" required />
        
        <button type="submit" className="login-button">LOGIN</button>
      </div>
      <div className="alternate-access">
        <div className="separator-line"></div>
        <span className="or-access">Ou Acesse:</span>
        <div className="separator-line"></div>
      </div>
      <div className="additional-links">
        <Link to="/register" className="register-link">CRIE UMA CONTA</Link>
        <Link to="/forgot-password" className="forgot-password-link">ESQUECI A SENHA</Link>
      </div>
    </div>
  );
}

export default Login;
