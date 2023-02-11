import React, { useContext } from "react";
import UserAuthContext from "../../utils/UserAuthContext";
import "./styles/login.css";

const Login = () => {
  const { setIsLoggedIn } = useContext(UserAuthContext);

  return (
    <div className="login-form-container">
      <div className="login-form">
        <div>
          <h3 style={{ margin: 0 }}>Login</h3>
        </div>
        <label htmlFor="emailId" style={{ marginTop: 20 }}>
          Email
        </label>
        <input id="emailId" className="search-box" type="email" />
        <label htmlFor="password" style={{ marginTop: 20 }}>
          Password
        </label>
        <input id="password" className="search-box" type="password" />
        <button
          className="login-button"
          style={{ marginTop: 40 }}
          onClick={() => setIsLoggedIn(true)}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
