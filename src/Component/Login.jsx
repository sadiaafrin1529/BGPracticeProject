// src/components/Login.js
import React, { useState } from 'react';
import '../Component/Login.css'
import { useNavigate, useNavigation } from 'react-router-dom';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
const navigate = useNavigate()
  const handleLogin = () => {
  console.log (username,password)
  alert('login sucess')
  navigate('/')
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form style={{padding:"20px"}} className=''>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
