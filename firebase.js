// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAO-zgeYvqbHr8JKazxxYnVgH43qaQbCKU",
  authDomain: "react-firsebase-auth.firebaseapp.com",
  projectId: "react-firsebase-auth",
  storageBucket: "react-firsebase-auth.appspot.com",
  messagingSenderId: "288890464467",
  appId: "1:288890464467:web:fc471d8710b7b40d5ccc26",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const googleauthProvider = new GoogleAuthProvider();

export default app;
