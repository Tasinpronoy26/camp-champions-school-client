import React, { useContext, useEffect, useState } from 'react';
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { GoogleAuthProvider } from 'firebase/auth';

const Signup = () => {
    const { createUser, createUSerWithGoogle, updateDisplayProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPass.value;

        if (password === confirmPassword) {
            createUser(email, password)
                .then(result => {
                    const user = result.user;

                    updateDisplayProfile(name, photo)
                        .then(() => {
                            const userInfo = { name: user.displayName, email: user.email, photo: user.photoURL };

                            fetch('http://localhost:5000/users', {
                                method: 'POST',
                                headers: {
                                    'content-type': 'application/json',
                                },
                                body: JSON.stringify(userInfo),
                            })
                                .then(res => res.json())
                                .then(data => {
                                    if (data.insertedId) {
                                        Swal.fire({
                                            title: 'Successfully Sign Up',
                                            icon: 'success',
                                        });
                                    }

                                    navigate('/');
                                    form.reset();
                                })
                                .catch(error => {
                                    console.log(error);
                                });
                        })
                        .catch(error => {
                            console.log(error);
                        });
                })
                .catch(error => {
                    Swal.fire({
                        text: error.message,
                        icon: 'error',
                    });
                });
        } else {
            Swal.fire({
                title: 'Warning!',
                text: 'Password not matched',
                icon: 'warning',
            });
        }
    };

    const provider = new GoogleAuthProvider();
    const handleGoogle = () => {
        createUSerWithGoogle(provider)
            .then(result => {
                const user = result.user;
                const userInfo = { name: user.displayName, email: user.email, photo: user.photoURL };

                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(userInfo),
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                title: 'Successfully log in!!',
                                icon: 'success',
                            });
                        }

                        navigate('/');
                    })
                    .catch(error => {
                        Swal.fire({
                            title: error,
                            icon: 'error',
                        });
                    });
            })
            .catch(error => {
                Swal.fire({
                    title: error,
                    icon: 'error',
                });
            });
    };

    

    // State to track whether the profile picture has been updated
    const [isProfilePictureUpdated, setProfilePictureUpdated] = useState(false);

    useEffect(() => {
        // Check if the profile picture has been updated, then reload the page
        if (isProfilePictureUpdated) {
            setProfilePictureUpdated();
        }
    }, [isProfilePictureUpdated]);

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://images.pexels.com/photos/773063/pexels-photo-773063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
            <div className="md:flex md:gap-48 hero-overlay bg-opacity-60 ">
                <div className="card w-full max-w-sm mx-auto md:mx-0">
                    <form onSubmit={handleRegister} className="card-body md:ms-24 md:w-full mt-16 mb-16">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Photo" name="photo" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" placeholder="confirm password" name="confirmPass" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-neutral" value="Register" />
                        </div>
                        <div className="form-control mt-6">
                            <p className="text-white tracking-tight mx-auto">
                                Already have an account? Please
                                <Link to="/login">
                                    <span className="text-orange-200 ms-2">Log in</span>
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
                <div className="divider lg:divider-horizontal text-white">OR</div>
                <div className="mx-36 md:mx-16 md:mt-64 md:mb-16">
                    <button onClick={handleGoogle} className="btn btn-wide">
                        <FcGoogle />
                    </button>
                    <button className="btn btn-wide mt-10 mb-10">
                        <AiFillGithub />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Signup;
