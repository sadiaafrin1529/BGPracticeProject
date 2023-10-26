import React, { useState } from 'react';

const Registar = () => {
  // Define state variables for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleForm = async (e) => {
    e.preventDefault();
    const userInformation = {
      email,
      password,
    };
    console.log(userInformation);

    try {
      const response = await fetch('http://10.10.83.41:8088/api/User', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInformation),
      });

      if (response.ok) {
        console.log('Registration successful');
        // Optionally, you can redirect the user to a success page.
      } else {
        console.error('Registration failed');
        // Handle the registration failure, e.g., display an error message to the user.
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <div className="login-container">
        <h2>Register</h2>
        <form onSubmit={handleForm} style={{ padding: "20px" }}>
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
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Registar;
