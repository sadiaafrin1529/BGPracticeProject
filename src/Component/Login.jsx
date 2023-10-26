//import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import '../Component/Login.css';

import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(null); // State to store the token

  const handleLogin = async (e) => {
    e.preventDefault();

    const userInformation = {
      email,
      password,
    };

    try {
      // Make a POST request to your login API endpoint
      const response = await fetch('http://10.10.83.41:8088/api/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInformation),
      });

      if (response.ok) {
        const data = await response.json();
        const userToken = data.token; // Assuming your API returns the token
        setToken(userToken); // Store the token in the component's state
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
    <div>
      <div className="login-container">
        <h2>Login</h2>
        {token ? (
          <div >
            <p>You are logged in.  </p>
            <p>Token:</p>
            <textarea style={{width:"400px",padding:"10px"}} name="" id="" cols="30" rows="10">{token}</textarea>
            
            {/* Display content for logged-in users */}
          </div>
        ) : (
          <form onSubmit={handleLogin} style={{ padding: "20px" }}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
            <button type="submit">Login</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;

