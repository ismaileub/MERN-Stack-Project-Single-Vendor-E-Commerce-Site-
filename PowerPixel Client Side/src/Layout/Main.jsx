import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Pages/Home/Components/NavBar';

const Main = () => {
    return (
        <div className=''>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;