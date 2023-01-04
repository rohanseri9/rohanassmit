import React from "react";
import "./header.css";
import {  Button } from "antd";
import { useNavigate } from "react-router-dom";
//import MoviesList from "../Components/MoviesList";


const HeaderNav = () => {
  let navigate = useNavigate()
  const navigateToHome = () => {
    navigate("/")
  }
  const Login = () => {
    navigate("/AdminLogin")
  }
  return(
    <div className="header">
      <div className="Logo">Movie Rating</div>
      <div className="headerBtn">
        <Button onClick={navigateToHome}>Home</Button>
        <Button onClick={Login}>Login</Button>
      </div>
    </div>
  )
};
export default HeaderNav;
