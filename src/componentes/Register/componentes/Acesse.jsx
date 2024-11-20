import { useNavigate } from "react-router-dom";
import { provider, auth, signInWithFace } from "../Config/firebase";
import { signInWithPopup } from "firebase/auth";
import "./Acesse.css";

function Acesse() {
  const navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        setTimeout(navigate("/login"), 5000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="borda">
      <div className="image-container">
        <img
          src="./src/componentes/Register/images/google 1.svg"
          style={{ cursor: "pointer" }}
          onClick={signInWithGoogle}
        />

        <img src="./src/componentes/Register/images/linkdin.svg" alt="" />

        <img
          src="./src/componentes/Register/images/facebook 1.svg"
          alt=""
          style={{ cursor: "pointer" }}
          onClick={signInWithFace}
        />
      </div>
    </div>
  );
}

export default Acesse;
