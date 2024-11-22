import "./authLayout.css";
import { Outlet } from "react-router-dom";
import Logo from "../../componentes/Logo/Logo";
function AuthLayout() {
  return (
    <div className="fundoPag">
      <div className="bordaPrincipal">
        <Logo />
        <Outlet />
      </div>
    </div>
  );
}
export default AuthLayout;
