import React, { useState, useEffect } from 'react';
import '../Component/Login.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const login_storage_key = "bgr_login";
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(null); // Initialize with login from local storage


  const location = useLocation()
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/dashboard";


  
  useEffect(() => {
    const storedLogin = localStorage.getItem(login_storage_key);
    if (storedLogin) {
        setLogin(JSON.parse(storedLogin));
        navigate(from, { replace: true });
    }
}, [navigate, from]);

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
        const loginData = await response.json();
        //const loginData =  Object.assign(data,{}); 
        // Store the login in the component's state
        //setLogin(loginData);
        // Store the login in local storage for persistence
        //localStorage.setItem('bgr_login', loginData);
        /*
        const headers = { 'Content-Type': 'application/json', 
        'Authorization': 'Bearer '+loginData.access_token }
        fetch('http://10.10.83.41:8088/api/User', { headers })
            .then(res => res.json())
            .then(data => {
              console.log(data)
            });
        */
        /*
        console.log(loginData)*/
        const res = await fetch('http://10.10.83.41:8088/api/User', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+loginData.access_token ,
          }//,
          // body: JSON.stringify(userInformation),
        });
        if (res.ok) {
          const userData = await res.json();
          let data = Object.assign(userData,loginData); 
          setLogin(data);
          localStorage.setItem(login_storage_key, JSON.stringify(data));
          //console.log(data)
          navigate(from, { replace: true });
         
        }
  
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  if (login) {
    return <Navigator to="/dashboard" />;
}

  const handleLogout = () => {
    // Clear the login from state and local storage
    setLogin(null);
    localStorage.removeItem(login_storage_key);
  };

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
