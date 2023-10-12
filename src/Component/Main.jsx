import React from 'react';

import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';

const Main = () => {
    return (
        <>
        <Navbar/>
        {/* <Dashboard></Dashboard> */}
        <Outlet></Outlet>
        </>
    );
};

export default Main;