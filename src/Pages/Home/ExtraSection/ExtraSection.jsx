import React from 'react';
import ShareSection from '../../../Share/ShareSection/ShareSection';
import useSports from '../../../Hook/Hook';
import Marquee from "react-fast-marquee";

const ExtraSection = () => {

    const [classes] = useSports();


    // TODO:
    return (
        <div>

            <div>
                <ShareSection heading="INSTRUCTORS SAY" title="A good teacher can inspire hope, ignite the imagination, and instill a love of learning.">

                </ShareSection>
            </div>
            <Marquee className='gap-12'>
                <div className='flex gap-12 mb-10'>

                    {
                        classes.map(q =>


                            <div key={q._id} className="card w-96 bg-base-100 rounded-none border shadow-xl">
                                <div className="card-body">
                                    <div className="card-actions">

                                        <div className='flex'>
                                            <div className="avatar online">
                                                <div className="w-24 rounded-full">
                                                    <img src={q.instructor_image} />
                                                </div>
                                            </div>
                                            <div className='ms-3 space-y-3'>
                                                <p className='text-orange-500 text-2xl italic'>{q.instructor_name}</p>
                                                <p className=' italic'>{q.quote}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )}

                </div>
            </Marquee>

        </div>
    );
};

export default ExtraSection;