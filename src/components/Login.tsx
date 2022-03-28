import React from "react";
import "./Login.scss";

const Login = () => {
  return (
    <div className="center-item">
      <form>
        <h1>Please Login !</h1>
        <input type="text" placeholder="Enter Username" />
        <input type="password" placeholder="Enter Password" />
        <button type="submit">Login</button>

        <p>
          Not Registered ?<a href="#">Create Account Now!</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
