import { useNavigate } from "react-router-dom";
import { provider, auth } from "../Config/firebase";
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
      </div>
      <h3>Sing in winth google</h3>
    </div>
  );
}

export default Acesse;
