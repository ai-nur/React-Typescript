import React, { useState } from "react";
import "./Login.scss";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = (e: any) => {
    e.preventDefault
  }
  return (
    <div className="center-item">
      <form>
        <h1>Please Login !</h1>
        <input
          type="text"
          placeholder="Enter Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={handleClick}>Login</button>

        <p>
          Not Registered ?<a href="#">Create Account Now!</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
