import React, { useState } from "react";

function SignIn() {
  const [authState, setAuthState] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setAuthState({ email: "", password: "" });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setAuthState({ ...authState, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          value={authState.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          name="password"
          type="password"
          value={authState.password}
          onChange={handleChange}
          required
        />
        <label htmlFor="password">Password</label>
        <input type="submit" value="Submit Form" />
      </form>
    </div>
  );
}

export default SignIn;
