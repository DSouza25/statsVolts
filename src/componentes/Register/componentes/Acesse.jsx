import { signInWithFacebook, signInWithGoogle } from "../Config/firebase";
import "./Acesse.css";

function Acesse() {
  return (
    <div className="borda">
      <div className="image-container">
        <img
          src="./src/componentes/Register/images/google 1.svg"
          onClick={signInWithGoogle}
          style={{ cursor: "pointer" }}
        />

        <img src="./src/componentes/Register/images/linkdin.svg" alt="" />

        <img
          src="./src/componentes/Register/images/facebook 1.svg"
          alt=""
          onClick={signInWithFacebook}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
}

export default Acesse;
