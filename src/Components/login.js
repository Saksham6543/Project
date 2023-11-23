import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './login.css';


const Login = () => {
const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the login or sign-up logic
    // For simplicity, let's just log the values for now
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="App2">
      <h1>{isLogin ? 'LOGIN' : 'SIGN UP'}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <FontAwesomeIcon icon={faEnvelope} /> Email:
          <input type="email" value={email} onChange={handleEmailChange} required />
        </label>
        <br />
        <label>
          <FontAwesomeIcon icon={faLock} /> Password:
          <input type="password" value={password} onChange={handlePasswordChange} required />
        </label>
        <br />
        <button onClick={()=>{navigate("/")}} type="submit" className="submit-btn">
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>
      <p onClick={toggleForm} className="toggle-btn">
        {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Login'}
      </p>
    </div>
   
 
  );
};

export default Login;
