import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://images.pexels.com/photos/773063/pexels-photo-773063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
            <div className="hero-overlay bg-opacity-60 md:flex items-center justify-center gap-24">
                <div className="text-center mt-24 mx-12 md:mt-0 sm:text-left text-white md:w-96">
                    <h1 className="text-2xl italic">CAMP CHAMPIONS <span className="text-orange-200">SCHOOL</span></h1>
                    <br />
                    <p>
                        "CAMP CHAMPIONS SCHOOL" is an exciting and dynamic website dedicated to the world of summer camps, specifically focused on teaching students sports. It provides a unique and enriching experience for young individuals who are passionate about athletics and eager to develop their skills in a fun and supportive environment.
                    </p>
                </div>

                <hr className="w-1/2 lg:hidden mx-auto my-8 border border-white" />
                {/* TODO: DIVIDER FOR LG */}


                {/* LOG IN FORM */}
                <div>
                    <div className="card-body md:w-96">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text  text-white">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className='btn-log-in'>
                                Button
                            </button>
                        </div>
                        <p className='text-white tracking-tight mx-auto'>If You're new, Please<Link to="/signup"><span className=' text-orange-200 ms-2'>Sign Up</span></Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
