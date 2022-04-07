import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.scss";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault;
  };

  return (
    <div className="center-item">
      <form>
        <div className="header">
          <p className="pp">
            <Link className="p-link" to="/">
              Back
            </Link>
          </p>
          <h1>Register</h1>
        </div>
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
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>

        <p>
          Already Registered ?<Link to="/login">Login now!</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
