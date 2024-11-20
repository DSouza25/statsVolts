import "./TextButton.css";
import { Link, useNavigate } from "react-router-dom";

function TextButton() {
  const navigate = useNavigate();

  function nav() {
    return navigate("/");
  }
  return (
    <div className="text">
      <img
        src="src\assets\Oops! Esta página não pode ser encontrada!.png"
        alt=""
      />
      <img
        src="src\assets\Parece que não conseguimos encontrar o que você está procurando. retorne para a página principal..png"
        alt=""
      />
      <button type="submit" onClick={nav}>
        <Link to={"/Login"}>
          <img src="../src\assets\Retornar a página principal.png" alt="" />
        </Link>
      </button>
    </div>
  );
}

export default TextButton;
