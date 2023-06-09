import React, { useContext } from 'react';
import useSports from '../../Hook/Hook';
import { BiSelectMultiple } from "react-icons/bi";
import ShareSection from '../../Share/ShareSection/ShareSection';
import { AuthContext } from '../../Components/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import useUsers from '../../Hook/useUsers/useUsers';

const Classes = () => {

    const [classes] = useSports();
    
    
    const {user} = useContext(AuthContext);
    const { _id, email } = user;

    const handleSelectedClasses = selectedItem => {

        console.log(selectedItem);

        if (user && user.email) {

            const { class_name, class_image, price } = selectedItem;

            const classesItems = {
                classId: _id,
                class_name,
                class_image,
                price,
                userEmail: email
            };

            fetch('http://localhost:5000/classes', {

                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },

                body: JSON.stringify(classesItems)
            })

                .then(res => res.json())
                .then(data => {

                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                })
        }
    }


    return (
        <div className='p-16'>


            <ShareSection heading="OUR CLASSES" title="Sports teaches you character, it teaches you to play by the rules, it teaches you to know what it feels like to win and lose—it teaches you about life">

            </ShareSection>




            {
                classes.map(c =>

                    <div className="card md:card-side border rounded-none mb-5 hover:shadow-xl">
                        <figure><img src={c.class_image} className='md:mt-0 md:w-96 ms-0 mt-0 md:h-full' alt="Movie" /></figure>
                        <div className="card-body">

                            <h2 className="card-title text-4xl text-orange-400">{c.class_name}</h2>
                            <p>Name Of Instructor : {c.instructor_name}</p>
                            <p>Instructor' email : {c.instructor_email}</p>
                            <p>Total Students : {c.total_students}</p>
                            <p className='text-2xl text-orange-400'>Available Seat: {c.available_seat}</p>

                            {/* <p>{c.instructor_email}</p> */}
                            <div className="card-actions mx-auto mt-5 md:mx-0 justify-end">
                                <button onClick={() => handleSelectedClasses(c)} className="btn bg-white border-none text-orange-400"> Select <BiSelectMultiple></BiSelectMultiple> </button>
                            </div>
                        </div>
                    </div>
                )
            }

        </div>
    );
};

export default Classes;