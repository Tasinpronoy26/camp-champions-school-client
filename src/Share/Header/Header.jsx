import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const navItems = <>

        <Link><li>Home</li></Link>
        <Link><li>Instructors</li></Link>
        <Link><li>Classes</li></Link>
        <Link><li>Dashboard</li></Link>

    </>


    return (


        <div className="navbar bg-black text-white max-w-screen-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">

                        {/* Responsive NavItems */}

                        {navItems}

                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl italic font-thin">CAMP CHAMPIONS <span className='text-orange-200'>SCHOOL</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-3">


                    {navItems}


                </ul>
            </div>
            <div className="navbar-end">
                <div className="avatar">
                    <div className="w-12 rounded-full">
                        <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;