import React, { useEffect, useState } from 'react';

const Contact = () => {
    const [contact, setContact] = useState([])
    useEffect(() => {
        fetch("http://10.10.83.41:8088/api/contacts")
            .then(res => res.json())
            .then(data => setContact(data))
    }, [])
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
              <img style={{width:'80px'}} src={alldata.photoURL} alt="" />
              <td>{alldata.isDelete+''}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
};

export default Contact;