import "./TextButton.css";
import { Link, useNavigate } from "react-router-dom";

function TextButton() {
  const navigate = useNavigate();

  function nav() {
    return navigate("/Pagina-Inicial");
  }
  return (
    <div className="text">
      <h1>
        Oops! Esta página não pode ser encontrada! <br />
        <span>
          Parece que não conseguimos encontrar o que você está procurando.
          retorne para a página principal.
        </span>
      </h1>
      <button type="submit" onClick={nav}>
        <Link to={"/Login"}>
          <img src="../src\assets\Retornar a página principal.png" alt="" />
        </Link>
      </button>
    </div>
  );
}

export default TextButton;
