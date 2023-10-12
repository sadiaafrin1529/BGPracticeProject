import React from 'react';
import { Link } from 'react-router-dom';

const DasboardMenu = () => {
    return (
        <div className='dashboard-menu'>
        <ul>
            <li ><Link style={{color:"white"}} className='link' to="/">Home</Link></li>
            {/* <li><Link style={{color:"white"}} className='link' to="/dashboard/users">All Information</Link></li> */}
            <li><Link style={{color:"white"}} className='link' to="/">UserAdded</Link></li>
            
        </ul>
    </div>
    );
};

export default DasboardMenu;