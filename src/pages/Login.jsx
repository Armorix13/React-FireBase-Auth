import React from "react";
import GoogleButton from "react-google-button";
import { signInWithPopup } from "firebase/auth";
import "./style.css";
import { auth, googleauthProvider } from "../../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const GoggleHandler = async () => {
    try {
      const result = await signInWithPopup(auth, googleauthProvider);
      console.log(result);
      localStorage.setItem("token", result.user.accessToken);
      localStorage.setItem("user", JSON.stringify(result.user));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="Screen">
      <GoogleButton onClick={GoggleHandler} />
    </div>
  );
};

export default Login;
