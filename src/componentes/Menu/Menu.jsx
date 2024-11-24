import { Link } from "react-router-dom";
import "./Menu.css";
import {menu} from "../../dados"

function Menu() {
  return (
    <div className="Menu">
    {menu.map((item) =>(
    <div className="item">
    <span className="titulo-menu">MENU</span>
    <Link to={"/"} className="listItem">
      <img src="src\assets\Chart.svg" alt="" />
      <span className="listItemTitle">DashBoard</span>
    </Link>
    <Link to={"/"} className="listItem">
      <img src="src\assets\Document.svg" alt="" />
      <span className="listItemTitle">Gerenciar Menu</span>
    </Link>
  </div>
  <div className="item">
    <span className="titulo-menu">MENU</span>
    <Link to={"/"} className="listItem">
      <img src="src\assets\Chart.svg" alt="" />
      <span className="listItemTitle">DashBoard</span>
    </Link>
    <Link to={"/"} className="listItem">
      <img src="src\assets\Document.svg" alt="" />
      <span className="listItemTitle">Gerenciar Menu</span>
    </Link>
  </div>
    ))}  
    </div>
  );
}

export default Menu;
