import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
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

//provider google

const provider = new GoogleAuthProvider();

//provider face

const providerface = new FacebookAuthProvider();

const signInWithFace = () => {
  signInWithPopup(auth, providerface)
    .then((result) => {
      console.log(result.user);
    })
    .catch((error) => {
      console.log(error);
    });
};
export { auth, db, provider, signInWithFace };
