import React, { useContext } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {

    const { createLogIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogIn = event => {

        event.preventDefault();

        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        // console.log(email, password);

        createLogIn(email, password)
            .then(result => {

                const user = result.user;
                console.log(user);
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })

                Toast.fire({
                    icon: 'success',
                    title: 'Signed in successfully'
                })
                navigate('/');
            })

            .catch(error => {

                Swal.fire({
                    title: 'warning!',
                    text: error,
                    icon: 'warning',
            })})
    }



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
                    <form onSubmit={handleLogIn} className="card-body md:w-96">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="text" placeholder="email" name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text  text-white">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input type='submit' className='btn btn-neutral'
                                value="Log in"
                            />
                        </div>
                        <p className='text-white tracking-tight mx-auto'>If You're new, Please<Link to="/signup"><span className=' text-orange-200 ms-2'>Sign Up</span></Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
