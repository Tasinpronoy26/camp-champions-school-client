import React, { useEffect, useState } from 'react';
import useSports from '../../../Hook/Hook';
import PopularClasses from './PopularClasses/PopularClasses';
import ShareSection from '../../../Share/ShareSection/ShareSection';

const Popular = () => {

    const [classes] = useSports();
    // console.log(classes);
    const popularClasses = classes.filter(c => c.total_students > 5);
    // console.log(popularClasses);


    return (

        <>

            <div>
                <ShareSection heading="OUR POPULAR CLASSES" title="Sports teaches you character, it teaches you to play by the rules, it teaches you to know what it feels like to win and lose—it teaches you about life">

                </ShareSection>
            </div>

            <div className='grid md:grid-cols-3 gap-10'>

                {
                    popularClasses.map(classes => <PopularClasses classes={classes}></PopularClasses>)
                }

            </div>

        </>
    );
};

export default Popular;