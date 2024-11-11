import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFnm-MccX5hbhAIbqjfzCHGBUVjJ6hsG4",
  authDomain: "statsvolts.firebaseapp.com",
  projectId: "statsvolts",
  storageBucket: "statsvolts.appspot.com",
  messagingSenderId: "307737807047",
  appId: "1:307737807047:web:4a113b38023a001966d6e2",
  measurementId: "G-SKB8RDB828",
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseapp);
const db = getFirestore(firebaseapp);

//auth com o google

const provider = new GoogleAuthProvider();

const signInWithGoogle = (navigate) => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result.user);
      navigate("/login");
    })
    .catch((error) => {
      console.log(error);
    });
};

//login com Facebook

const providerFacebook = new FacebookAuthProvider();

const FacebookAuth = async (navigate) => {
  const fbAuth = signInWithPopup(auth, providerFacebook);
  return fbAuth, navigate("/login");
};

export { auth, db, signInWithGoogle, FacebookAuth };
