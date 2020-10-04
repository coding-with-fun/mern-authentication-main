import React from "react";
import logo from "../assets/SignIn.svg";

function SignIn() {
  return (
    <div className="signin">
      <div className="signin__logo">
        <img src={logo} alt="Sign In" />
      </div>
    </div>
  );
}

export default SignIn;
