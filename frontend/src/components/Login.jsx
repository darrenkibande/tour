import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom';

import { FaApple } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

function Login() {
  return (
    <div className="login-cont">
    <div className="custom-form-container">
    <p className="custom-title">Welcome Back</p>
    <form className="custom-form">
      <input type="email" className="custom-input" placeholder="Email" />
      <input type="password" className="custom-input" placeholder="Password" />
      <p className="custom-page-link">
        <span className="custom-page-link-label">Forgot Password?</span>
      </p>
      <button className="custom-form-btn">Log in</button>
    </form>
    <p className="custom-sign-up-label">
      Don't have an account? <Link to='/Register'><span className="custom-sign-up-link">Sign up</span></Link>
    </p>
    <div className="custom-buttons-container">
      <div className="custom-apple-login-button">
        <FaApple/>
        <span>Log in with Apple</span>
      </div>
      <div className="custom-google-login-button">
        <FcGoogle/>
        <span>Log in with Google</span>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Login