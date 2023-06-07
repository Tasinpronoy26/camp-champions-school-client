import React from 'react';

const ShareSection = ({heading, title, icon}) => {
    return (
        <div className='text-center mx-24 md:mx-0 my-24 font-thin text-5xl'>

            <h1>{heading}</h1>
            <div>
                <p className=' text-sm mt-5'>{title}</p>
                <p>{icon}</p>
            </div>
            
        </div>
    );
};

export default ShareSection;