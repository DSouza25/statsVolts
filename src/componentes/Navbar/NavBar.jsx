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

      <div className="perfilNot"></div>
    </div>
  );
}

export default NavBar;
