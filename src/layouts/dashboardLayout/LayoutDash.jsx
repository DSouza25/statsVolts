import { Outlet } from "react-router-dom";
import Menu from "../../componentes/Menu/Menu";
import NavBar from "../../componentes/Navbar/NavBar";
import "./LayoutDash.css";

function LayoutDash() {
  return (
    <div className="main">
      <NavBar />
      <div className="container">
        <div className="menuContainer">
          <Menu />
        </div>

        <div className="conteudoContain"></div>
        <Outlet />
      </div>
    </div>
  );
}

export default LayoutDash;
