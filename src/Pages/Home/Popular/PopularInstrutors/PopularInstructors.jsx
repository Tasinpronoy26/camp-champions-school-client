import Aos from 'aos';
import 'aos/dist/aos.css'
import React from 'react';
import { useEffect } from 'react';

const PopularInstructors = ({ classes }) => {

    const { class_image, class_name, total_students, instructor_name, instructor_image, instructor_email } = classes;
    
    useEffect(() => {

        Aos.init({ duration: 2000 })

    }, [])

    return (
        <div data-aos="fade-down" className="card w-full image-full">
            <figure><img src={class_image} /></figure>
            <div className="card-body">
                <div className="avatar">
                    <div className="w-36 rounded-full">
                        <img src={instructor_image} />
                    </div>
                </div>
                <h2 className="card-title">{instructor_name}</h2>
                <p className=' text-orange-300'>{class_name}</p>
                <p>{instructor_email}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline hover:bg-white hover:text-black border-none p-3 rounded-none text-orange-300">Total Student: {total_students}</div>
                </div>
            </div>
        </div>
    );
};

export default PopularInstructors;