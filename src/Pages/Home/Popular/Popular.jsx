import useSports from '../../../Hook/Hook';
import PopularClasses from './PopularClasses/PopularClasses';
import ShareSection from '../../../Share/ShareSection/ShareSection';
import PopularInstructors from './PopularInstrutors/PopularInstructors';



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

            <div className='grid mx-24 md:mx-0 md:grid-cols-3 gap-10'>

                {
                    popularClasses.map(classes => <PopularClasses classes={classes}></PopularClasses>)
                }

            </div>
            <div>
                <ShareSection heading="OUR POPULAR INSTRUCTORS" title="A good teacher can inspire hope, ignite the imagination, and instill a love of learning.">

                </ShareSection>
            </div>
            <div className='grid mx-24 md:mx-0 md:grid-cols-3 gap-10 mb-10'>

                {
                    popularClasses.map(classes => <PopularInstructors classes={classes}></PopularInstructors>)
                }

            </div>
        </>
    );
};

export default Popular;