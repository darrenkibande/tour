// SignUpForm.js
import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
// import { FaGoogle, FaApple, FaMicrosoft } from 'react-icons/fa';
import './Register.css';

const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="sign-up-form">
      <p className='title-secondary' style={{textAlign:"center"}}>Sign up</p>

      <form>
        <div className="form-group">
          <input type="text" name="email" required />
          <label>Email address*</label>
        </div>
        <div className="form-group">
          <input type="text" name="username" required />
          <label>Username*</label>
        </div>
        <div className="form-group">
          <div className="password-input">
            <input type={passwordVisible ? "text" : "password"} name="password" required />
            <label>Password*</label>
            <FaEye onClick={togglePasswordVisibility} className="eye-icon" />
          </div>
        </div>
        <button type="submit" className="btn-continue">Continue</button>
      </form>
      <div className="login-link">
        <span>Already have an account? </span>
        <a href="/login">Log in</a>
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

export default Register;
