import React, { useContext, useEffect, useState } from 'react';
//import { authService } from '../Auth/AuthGuard';
import { AuthContext } from '../Auth/auth.service';

//const auth = authService();
const DashboardUser = () => {
  //const login_storage_key = "bgr_login";
 // const [user,setUser] = useState([])
   //const [login, setLogin] = useState(auth.user);
//  console.log(login)
const [users, setUser] = useState(null);
const {authenticated,user}=useContext(AuthContext)
//const authData = authService;
//console.log(authData);
useEffect(() => {
  const userData = user;
  console.log(userData)
  setUser(userData);
  // if (userData) {
  //   setUser(userData);
  //   console.log(user)
  // }
}, [user,authenticated]);
const login = user;
console.log(login)

    return (
        <div >
          <div style={{display:"flex",alignItems:'center',justifyContent:"space-around"}}>
          <h6><span style={{border:"2px solid #6C5F5B",borderRadius:"5px",padding:"5px",boxShadow:"5px 5px 5px #B3A492" }}> Email</span>  <span style={{border:"2px solid #6C5F5B",borderRadius:"5px",padding:"5px" }}>{login?.email}</span> </h6>
            <p style={{border:"2px solid #6C5F5B",borderRadius:"5px",padding:"5px",width:"60px" }}>save</p>
          </div>
          <div style={{display:"flex",alignItems:'center',justifyContent:"space-around"}}>
          <h6><span style={{border:"2px solid #6C5F5B",borderRadius:"5px",padding:"5px",boxShadow:"5px 5px 5px #B3A492" }}>DisplayName</span>  <span style={{border:"2px solid #6C5F5B",borderRadius:"5px",padding:"5px" }}>{login?.displayName}</span> </h6>
            <p style={{border:"2px solid #6C5F5B",borderRadius:"5px",padding:"5px",width:"65px" }}>Update</p>
          </div>
        </div>
    );
};

export default DashboardUser;