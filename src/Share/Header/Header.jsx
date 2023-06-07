import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Components/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const userLogOut = () => {

        logOut()
            .then(() => {


                Swal.fire({
                    title: 'Log out!',
                    icon: 'success'
                })

                navigate('/login')
     
            })
            .catch(error => {

                console.log(error);
            })
    }

    const navItems = <>

        <Link to="/"><li>Home</li></Link>
        <Link to="/instructors"><li>Instructors</li></Link>
        <Link><li>Classes</li></Link>
        {
            user ? <Link><li>Dashboard</li></Link> : <></> 
        }

    </>


    return (


        <div className="navbar bg-black bg-opacity-50 text-white max-w-screen-xl fixed z-10">
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


            {/* Avater, Logout, Logins */}
            <div className="navbar-end">

                {
                    user ? <div className="dropdown dropdown-end">
                        <label tabIndex={0}>
                            <div className="avatar">
                                <div className="w-12 rounded-full">
                                    <img src={user.photoURL} alt="" />
                                </div>
                            </div>
                        </label>
                        <ul tabIndex={0} className="text-black dropdown-content menu p-2 shadow bg-base-100 w-24">
                            <button onClick={userLogOut}>Log Out</button>
                        </ul>
                    </div> : <Link to="/login"><button className="btn rounded-none btn-outline btn-info">Log in</button></Link>
                }

            </div>
        </div>
    );
};

export default Header;