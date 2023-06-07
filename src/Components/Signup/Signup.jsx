import React, { useContext } from 'react';
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from "react-icons/ai";
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Signup = () => {

    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleRegister = event => {

        event.preventDefault();

        const form = event.target;


        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPass.value;

        // console.log(name, email, password, confirmPassword);

        if (password === confirmPassword) {

            createUser(email, password)
                .then(result => {

                    const user = result.user;
                    console.log(user);
                    Swal.fire({
                        title: 'Successfully created!',
                        icon: 'success',      
                    })

                    form.reset();
                })
                .catch(error => {
                    Swal.fire({

                        text: error,
                        icon: 'error',
                        
                      })
                })
                navigate('/');
        }
        else {

            Swal.fire({
                title: 'warning!',
                text: 'Password not matched',
                icon: 'warning',
                
            })
        }


    }

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://images.pexels.com/photos/773063/pexels-photo-773063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>



            <div className='md:mx-0 md:flex md:gap-48 hero-overlay bg-opacity-60 '>

                <div className="card w-full max-w-sm ">

                    <form onSubmit={handleRegister} className="card-body md:ms-24 md:w-full mt-16 mb-16">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name='name' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Photo" name='photo' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" placeholder="confirm password" name='confirmPass' className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input type='submit' className='btn btn-neutral' value="Register"
                            />
                        </div>
                        <div className="form-control mt-6">
                            <p className='text-white tracking-tight mx-auto'>Already have an account? Please<Link to="/login"><span className=' text-orange-200 ms-2'>Log in</span></Link></p>
                        </div>
                    </form>
                </div>



                <div className="divider lg:divider-horizontal text-white">OR</div>



                <div className='mx-16 md:mt-64 md:mb-16 '>

                    <button className="btn btn-wide"><FcGoogle></FcGoogle></button>
                    <button className="btn btn-wide mt-10 mb-10"><AiFillGithub></AiFillGithub></button>

                </div>


            </div>




        </div>



    );
};

export default Signup;