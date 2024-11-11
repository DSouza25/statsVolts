import { FacebookAuth, signInWithGoogle } from "../Config/firebase";
import "../css/Acesse.css";
import { useNavigate } from "react-router-dom";

const Acesse = () => {
  const navigate = useNavigate();

  //evento para login com o google e ser direcionado para page login
  const handleGoogleLogin = () => {
    return signInWithGoogle(navigate);
  };

  async function handleFacebookLogin() {
    const user = await FacebookAuth();
    console.log("facebook user:", user);
    return FacebookAuth(navigate);
  }
  return (
    <div className="borda">
      <div className="image-container">
        <img
          src="./src/componentes/Register/images/google 1.svg"
          onClick={handleGoogleLogin}
          style={{ cursor: "pointer" }}
        />

        <img src="./src/componentes/Register/images/linkdin.svg" alt="" />

        <img
          src="./src/componentes/Register/images/facebook 1.svg"
          onClick={handleFacebookLogin}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export default Acesse;
