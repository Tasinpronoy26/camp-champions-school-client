import React from 'react';
import useSports from '../../Hook/Hook';
import { BiSelectMultiple } from "react-icons/bi";
import ShareSection from '../../Share/ShareSection/ShareSection';

const Classes = () => {

    const [classes] = useSports();


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
                                <button className="btn bg-white border-none text-orange-400"> Select <BiSelectMultiple></BiSelectMultiple> </button>
                            </div>
                        </div>
                    </div>
                )
            }

        </div>
    );
};

export default Classes;