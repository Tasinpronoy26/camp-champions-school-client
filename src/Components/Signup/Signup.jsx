import React from 'react';
import './Signup.css';

const Signup = () => {

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://images.pexels.com/photos/773063/pexels-photo-773063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>



            <div className='mx-24 md:mx-0 md:flex md:gap-48'>

                <div className="card w-full max-w-sm ">

                    <div className="card-body md:ms-24">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" placeholder="confirm password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className='btn-log-in'>
                                Register
                            </button>
                        </div>
                    </div>
                </div>

                
                    
                    <div className="divider lg:divider-horizontal text-white">OR</div>
                    


                <div className='mx-16 md:mt-48'>

                    <button className="btn btn-wide">Wide</button>
                    <button className="btn btn-wide mt-10 mb-10">Wide</button>

                </div>


            </div>




        </div>



    );
};

export default Signup;