import Aos from 'aos';
import 'aos/dist/aos.css'
import React from 'react';
import { useEffect } from 'react';



const PopularClasses = ({ classes }) => {

    const { class_name, class_image, available_seat, total_students, price } = classes;
    // console.log(classes);

    
    useEffect(() => {

        Aos.init({ duration: 2000 })

    }, [])

    

    return (

        <div >

            <div data-aos="fade-down" className="card w-full rounded-none border hover:shadow-2xl">
                <figure><img src={class_image} className='w-full h-64' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-serif text-orange-600 md:flex justify-between">
                        {class_name}
                        <div className="badge badge-outline">POPULAR</div>
                    </h2>
                    <div className=' italic'>
                        <p>Total Students : {total_students}</p>
                        <p>Available Seat : {available_seat}</p>
                    </div>
                    <div className="card-actions justify-end">

                        <div className="badge badge-neutral p-3 font-bold">${price}</div>
                    </div>
                </div>
            </div>


        </div>

    );
};

export default PopularClasses;