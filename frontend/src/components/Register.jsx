import React, { useState, useEffect } from 'react';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Register.css';
import AOS from "aos";
import "aos/dist/aos.css";

const Register = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init();
    AOS.refresh();
  }, []);

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    phonenumber: ''
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

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhoneNumber = (phonenumber) => {
    const re = /^[0-9]{10,15}$/;
    return re.test(String(phonenumber));
  };

  const validateForm = () => {
    if (!validateEmail(formData.email)) {
      setError('Invalid email address');
      return false;
    }
    if (formData.username.trim() === '') {
      setError('Username is required');
      return false;
    }
    if (!validatePhoneNumber(formData.phonenumber)) {
      setError('Invalid phone number');
      return false;
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to register user');
      }

      const data = await response.json();
      console.log(data);

      setSuccess('User registered successfully');
      setFormData({ email: '', username: '', password: '', phonenumber: '' });
      setError('');
    } catch (err) {
      console.error('Error:', err); // Log the error for debugging
      setError(err.message);
      setSuccess('');
    }
  };

  return (
    <div data-aos="zoom-in" className="sign-up-form">
      <p className='title-secondary' style={{ textAlign: "center" }}>Sign up</p>

      <form className='register-form' onSubmit={handleSubmit}>
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
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <label>Username*</label>
        </div>
        <div className="form-group">
          <input
            type="text"
            name="phonenumber"
            value={formData.phonenumber}
            onChange={handleChange}
            required
          />
          <label>Phone Number*</label>
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
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
        <button type="submit" className="btn-continue">Continue</button>
      </form>
      <div className="login-link">
        <span>Already have an account? </span>
        <Link className='l-link' to='/login'><span>Login</span></Link>
      </div>
    </div>
  );
};

export default Register;
