import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css'; // Import CSS for styling

function Register() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="register-cont">
    <form className="registration-form" onSubmit={handleSubmit}>
      <p className="reg-title">Register</p>
      <p className="message">Signup now and get full access to our app.</p>
      <div className="flex">
        <label>
          <input required placeholder=" " type="text" className="input" name="firstname" value={formData.firstname} onChange={handleChange}  />
          <span>Firstname</span>
        </label>

        <label>
          <input required placeholder=" " type="text" className="input" name="lastname" value={formData.lastname} onChange={handleChange}  />
          <span>Lastname</span>
        </label>
      </div>

      <label>
        <input required placeholder=" " type="email" className="input" name="email" value={formData.email} onChange={handleChange}  />
        <span>Email</span>
      </label>

      <label>
        <input required placeholder=" " type="password" className="input" name="password" value={formData.password} onChange={handleChange}  />
        <span>Password</span>
      </label>
      <label>
        <input required placeholder=" " type="password" className="input" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange}  />
        <span>Confirm password</span>
      </label>
      <button type="submit" className="submit">Submit</button>
      <p className="signin">Already have an account? <Link to='/Login'> Sign in </Link>  </p>

    </form>
    </div>
  );
}

export default Register;
