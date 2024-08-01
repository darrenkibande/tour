import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    if (!validateEmail(formData.email)) {
      setError('Invalid email address');
      return false;
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return false;
    }
    setError('');
    return true;
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to log in');
      }

      const data = await response.json();
      console.log(data);

      setSuccess('Logged in successfully');
      setFormData({ email: '', password: '' });
      setError('');
    } catch (err) {
      console.error('Error:', err); // Log the error for debugging
      setError(err.message);
      setSuccess('');
    }
  };

  return (
    <div className="login-form">
      <p className='title-secondary' style={{ textAlign: "center" }}>Login</p>

      <form className='loginform-sect' onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label>Email address*</label>
        </div>
        <div className="form-group">
          <div className="password-input">
            <input
              type={passwordVisible ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <label>Password*</label>
            <FaEye onClick={togglePasswordVisibility} className="eye-icon" />
          </div>
        </div>
        <div className="forgot-password">
          <a href="/forgot-password">Forgot password?</a>
        </div>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
        <button type="submit" className="btn-continue">Continue</button>
      </form>
      <div className="signup-link">
        <span>Don't have an account? </span>
        <Link className='l-link' to='/register'><span>Sign up</span></Link>
      </div>
    </div>
  );
};

export default Login;
