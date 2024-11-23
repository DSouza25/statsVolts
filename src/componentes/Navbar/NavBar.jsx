import "./NavBar.css";

function NavBar() {
  return (
    <div className="container-main">
      <div className="logoTitle">
        <img src="./src\assets\logo-stats-volts.svg" alt="" />
        <span>STATSVOLTS</span>
      </div>

      <div className="bar-pesquisa-wrapper">
        <input type="text" placeholder="Buscar" className="bar-pesquisa" />
        <img
          src="src\assets\inco-pesquisa.png"
          alt=""
          className="icone-pesquisa"
        />
      </div>

      <div className="perfilNot">
        <ul>
          <li>
            <img src="src\assets\user.png" className="img-user" alt="" />
          </li>
          <li className="user-Name">testeUsuario</li>
          <li>
            <img src="src\assets\Notif Icon.png" className="noti-User" alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
