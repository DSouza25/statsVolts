import "./logo.css";
function Logo() {
  return (
    <div className="bordaLogo">
      <div className="logo">
        <img src="src/assets/logo-stats-volts.svg" alt="logo statsvolts" />
        <h1 className="title">
          BEM-VINDO AO <span className="pular">STATSVOLTS!</span>
        </h1>
      </div>
    </div>
  );
}
export default Logo;
