import React, { useState } from 'react';

import '../Dashboard/Dashboard.css'

import { Link, Navigate, Outlet } from 'react-router-dom';
import DashboardUser from './DashboardUser';
import { authService } from '../Auth/AuthGuard';

const auth = authService();
const Dashboard = () => {
    const [activeMenu, setActiveMenu] = useState(true)
   // const login_storage_key = "bgr_login";
    // const [user, setUser] = useState([])
    //const [login, setLogin] = authService()
    //console.log(login)
    const handleLogout = () => {
        // Clear the user's login status
        // setLogin(null);
        auth.signOut();
    
        // Clear user-related data from local storage
        // localStorage.removeItem(login_storage_key);
    
        
    };
    if (!auth.isAuthenticated) {
        // Redirect to the login page if the user is not logged in
        return <Navigate to="/login" />;
    }
    return (
        <div>
            <div className='dashboard-navbar-container'>
                <div className='dashboard-container'>
                    <div className='fs-2 fw-bold' style={{ color: "white", fontFamily: "cursive" }}>
                        BGProject
                    </div>
                    <div style={{ display: "flex", gap: "20px" }}>
                        <p style={{ color: "white", fontWeight: "20px" }}>Profile</p>
                        <p style={{ color: "white", fontWeight: "20px" }}>Todo</p>
                        <p style={{ color: "white", fontWeight: "20px" }}>Admin</p>
                        <ul style={{ display: "flex", listStyle: 'none' }}>
                            {auth.isAuthenticated? (
                                <li onClick={() => handleLogout()}><Link to='/login'>Logout</Link></li>
                            ) : (
                                <li><Link to='/login'>Login</Link></li>
                            )}
                        </ul>
                        {/* <p style={{ color: "white", fontWeight: "20px" }}>Logout</p> */}
                        <i style={{ color: "white", width: "40px", height: "40px" }} class="fa-solid fa-user"></i>
                        <i onClick={() => setActiveMenu(!activeMenu)} style={{ alignItems: "center", color: "white" }} class="fa-solid fa-bars"></i>



                    </div>
                </div>
            </div>
            <div style={{ position: "relative", display: "flex" }}>
                {/* {activeMenu && <DashboardMenu/>} */}
                <div className='middle-container'>

                    <Outlet></Outlet>
                    <DashboardUser />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;