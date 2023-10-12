import React, { useState } from 'react';

import '../Dashboard/Dashboard.css'
import DashboardMenu from './DasboardMenu';
import { Outlet } from 'react-router-dom';
const Dashboard = () => {
    const [activeMenu,setActiveMenu] = useState(true)
    return (
       <div>
         <div className='dashboard-navbar-container'>
            <div className='dashboard-container'>
            <div className='fs-2 fw-bold' style={{color:"white" , fontFamily:"cursive"}}>
                BGProject
                </div>
                <div style={{display:"flex",gap:"20px"}}>
                <button>LogOut</button>
                <i style={{color:"white",width:"40px",height:"40px"}} class="fa-solid fa-user"></i>
                <i onClick={()=>setActiveMenu(!activeMenu)} style={{alignItems:"center",color:"white"}} class="fa-solid fa-bars"></i>
               
                </div>
            </div>
        </div>
        <div style={{position:"relative",display:"flex"}}>
            {activeMenu && <DashboardMenu/>}
            <div className='middle-container'>
                
               <Outlet></Outlet>
            </div>
        </div>
       </div>
    );
};

export default Dashboard;