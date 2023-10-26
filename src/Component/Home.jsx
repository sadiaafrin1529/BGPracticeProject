import React from 'react';
import Login from './Login';
import Navbar from './Navbar';
import UserTable from './UserTable';
import TodoItems from './TodoItems';

const Home = () => {
    return (
        <div>
            {/* <Navbar/> */}
            <UserTable/>
            {/* <TodoItems/> */}
        </div>
    );
};

export default Home;