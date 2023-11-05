import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import '../Component/Login.css';
import { authService } from './Auth/AuthGuard';

const Login = () => {
  const [email, setEmail] = useState('Bg@gmail.com');
  const [password, setPassword] = useState('Bg@2023');


  const location = useLocation()
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/dashboard";

  const handleLogin = async (e) => {
    e.preventDefault();
   // After a successful login, set the user as authenticated
   /*authService.authenticated(() => {
      // Redirect to the dashboard
      navigate('/dashboard');
    });*/

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
        const loginData = await response.json();
        const res = await fetch('http://10.10.83.41:8088/api/User', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+loginData.access_token ,
          }
        });
        if (res.ok) {
          const userData = await res.json();
          let data = Object.assign(userData,loginData); 
          authService.setLogin(data,() => {
            //Test
            console.log(authService.isAuthenticated,authService.getUser());  
            // Redirect to the dashboard
            //navigate('/dashboard');
            navigate('/dashboard', { replace: true });
          });
        }
  
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  /*
  if (login) {
      return <Navigator to="/dashboard" />;
  }*/
  /*
  const handleLogout = () => {
    // Clear the login from state and local storage
    setLogin(null);
    localStorage.removeItem(login_storage_key);
  };
  */
  return (
    <div>
      <div className="login-container">
        <h2>Login</h2>
      
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
        
      </div>
    </div>
  );
};

export default Login;
