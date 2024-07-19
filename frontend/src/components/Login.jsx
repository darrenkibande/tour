// LoginForm.js
import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
// import { FaGoogle, FaApple, FaMicrosoft } from 'react-icons/fa';
import './Login.css';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="login-form">
      <p className='title-secondary' style={{textAlign:"center"}}>Login</p>
      <form>
        <div className="form-group">
          <input type="text" name="username" required />
          <label>Username or Email address*</label>
        </div>
        <div className="form-group">
          <div className="password-input">
            <input type={passwordVisible ? "text" : "password"} name="password" required />
            <label>Password*</label>
            <FaEye onClick={togglePasswordVisibility} className="eye-icon" />
          </div>
        </div>
        <div className="forgot-password">
          <a href="/forgot-password">Forgot password?</a>
        </div>
        <button type="submit" className="btn-continue">Continue</button>
      </form>
      <div className="signup-link">
        <span>Don't have an account? </span>
        <a href="/Register">Sign up</a>
      </div>
      {/* <div className="separator">OR</div>
      <div className="social-login">
        <button className="btn-social google"><FaGoogle /> Continue with Google</button>
        <button className="btn-social apple"><FaApple /> Continue with Apple</button>
        <button className="btn-social microsoft"><FaMicrosoft /> Continue with Microsoft Account</button>
      </div> */}
    </div>
  );
};

export default Login;
