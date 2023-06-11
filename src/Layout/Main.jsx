import React, { useState } from 'react';
import Header from '../Share/Header/Header';
import Footer from '../Share/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
      setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    
    return (
        <div className={`${theme === 'dark' ? 'bg-gray-800' : ''}`}>

            <Header toggleTheme={toggleTheme} theme={theme}></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;