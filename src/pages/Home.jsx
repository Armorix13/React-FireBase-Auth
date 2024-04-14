import React from "react";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const LogoutHandler = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Welcome New User , {user.displayName}</h1>
      <hr />
      <div>{user && user.email}</div>
      <br />
      <div>{user && <img src={user.photoURL} alt="profile" />}</div>
      <hr />
      <button onClick={LogoutHandler}>Logout</button>
    </div>
  );
};

export default Home;
