import React from 'react';
import './AddClass.css';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { AuthContext } from '../../../../Components/AuthProvider/AuthProvider';

const AddClass = () => {

    const [addClass, setAddClass] = useState()
    const {user} = useContext(AuthContext);

    const handleAddclass = event => {

        event.preventDefault();

        const form = event.target;

        const className = form.className.value;
        const classImage = form.classImage.value;
        const instructorName = form.instructorName.value;
        const instructorEmail = form.instructorEmail.value;
        const message = form.message.value;
        const availableSeat = form.availableSeat.value;
        const price = form.price.value;
        const status = 'pending';
        const feedback = 'null'

        const addClass = {

            class_image: classImage,
            class_name: className,
            instructor_name: instructorName,
            instructor_email: instructorEmail,
            quote: message,
            available_seat:availableSeat,
            price: price,
            status,
            feedback
        }

        console.log(addClass);

        fetch('http://localhost:5000/addclass', {

            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addClass)
        })
            .then(res => res.json())
            .then(data => {
                  
                setAddClass(data)
                Swal.fire({
                    
                    icon: 'success',
                    title: 'ADDED!',
                    showConfirmButton: false,
                    timer: 1500
                  })

                  form.reset();
            })
            .catch(error => {

                console.log(error);
            })


    }

    console.log(addClass);


    return (
        <div className='p-8 md:p-0 md:mt-10'>
            <h1>ADD YOU CLASS</h1>
            <form onSubmit={handleAddclass} className="cf">
                <div className="half left cf">
                    <input type="text" name='className' id="input-name" placeholder="Class name" required/>
                    <input type="text" name='classImage' id="input-subject" placeholder="Class Image" required/>
                    <input type="text" name='instructorName' id="input-subject" placeholder="Instructor name" required/>
                    <input type="email" name='instructorEmail' defaultValue={user?.email} disabled id="input-email" placeholder="Instructor email" required/>
                </div>
                <div className="half right cf">
                    <textarea name="message" type="text" id="input-message" placeholder="Message" required/>
                    <input type="text" name='availableSeat' id="input-subject" placeholder="Available seats" required/>
                    <input type="number" name='price' id="input-subject" placeholder="$Price" required/>
                </div>

                <input type="submit" value="Add Class" id="input-submit" />

            </form>
        </div>
    );
};

export default AddClass;
