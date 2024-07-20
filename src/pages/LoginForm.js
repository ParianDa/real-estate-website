import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin, errorMessage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    const user = onLogin(email, password);
    if (user) {
      navigate("/dashboard"); // Navigate to dashboard after successful login
    }
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <label>Email</label>
        <input
          type="email"
          placeholder="enter your email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          placeholder="enter your password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default Login;
