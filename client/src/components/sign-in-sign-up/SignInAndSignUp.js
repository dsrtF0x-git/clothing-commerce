import React from "react";
import "./SignInAndSignUp.scss";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function SignInAndSignUp() {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default SignInAndSignUp;
