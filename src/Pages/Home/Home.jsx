import React from 'react';
import TopSliderSection from './TopSliderSection/TopSliderSection';
import Popular from './Popular/Popular';
import ExtraSection from './ExtraSection/ExtraSection';


const Home = () => {
    return (
        <div>

            <TopSliderSection></TopSliderSection>
            <Popular></Popular>
            <ExtraSection></ExtraSection>
            
        </div>
    );
};

export default Home;