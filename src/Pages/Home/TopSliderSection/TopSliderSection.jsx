import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const TopSliderSection = () => {
    return (
        <div className='mb-12'>
            <div className='relative'>
                <AwesomeSlider
                    media={[
                        {
                            source: 'https://images.pexels.com/photos/34514/spot-runs-start-la.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                        },
                        {
                            source: 'https://images.pexels.com/photos/7120350/pexels-photo-7120350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                        },
                        {
                            source: 'https://images.pexels.com/photos/3886237/pexels-photo-3886237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                        },
                    ]}

                />
            </div>

            {/* TODO: TEXT  */}

            


        </div>
    );
};

export default TopSliderSection;