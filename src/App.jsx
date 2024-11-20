import Logo from "./pages/componentes/Logo/Logo";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="fundoPag">
      <div className="bordaPrincipal">
        <Logo />
        <Outlet />
      </div>
    </div>
  );
}
export default App;
