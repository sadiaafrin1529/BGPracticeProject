import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Component/Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log(username, password);
    // You might want to remove this alert and add proper handling
    alert('Login success');
    navigate('/');
  };

  const handleForm = async (e) => {
    e.preventDefault();
    const userInformation = {
      username,
      password,
    };
    console.log(userInformation);

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInformation),
      });

      if (response.ok) {
        console.log('Login successful');
        // Optionally, you can redirect the user to a success page.
      } else {
        console.error('Login failed');
        // Handle the login failure, e.g., display an error message to the user.
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleForm} style={{ padding: "20px" }}>
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
        <button onClick={handleLogin} type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
