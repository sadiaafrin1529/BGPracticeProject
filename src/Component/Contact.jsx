import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from './Auth/AuthGuard';

const Contact = () => {
  const [contact, setContact] = useState([])
  const navigate = useNavigate()
  if(authService.isAuthenticated){
    useEffect(() => {
      fetch("http://10.10.83.41:8088/api/Contact",
      {
        method:"GET",
        headers:{
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+ authService.getUser().access_token,
        }
      })
        .then(res => res.json())
        .then(data => setContact(data))
    }, [])
  }
  else{
    return navigate('/login')
  }
  return (
    <div className="w3-container">
      <h2>Contact</h2>


      <table className="w3-table w3-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Display Name</th>
            <th>PhotoUrl</th>
            <th>isDelete</th>

          </tr>
        </thead>
        <tbody>
          {contact.map((alldata) => (
            <tr key={alldata.id}>
              <td>{alldata.displayName}</td>
              <img style={{ width: '80px' }} src={alldata.photoURL} alt="" />
              <td>{alldata.isDelete + ''}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contact;