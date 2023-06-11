import useSports from '../../Hook/Hook';
import ShareSection from '../../Share/ShareSection/ShareSection';

const Instructors = () => {
    const [classes] = useSports();
    const instrutor = classes.filter(i => i.status === 'approved') 
    console.log(classes);




    return (
        <div className='p-24 md:p-8'>

            <div>
                <ShareSection heading="OUR INSTRUCTORS" title="A good teacher can inspire hope, ignite the imagination, and instill a love of learning.">

                </ShareSection>
            </div>

            {
                instrutor.map(i =>

                    <div key={i._id} className="card md:card-side border rounded-none mb-5">
                        <figure><img src={i.instructor_image} className='mt-5 md:mt-0 md:w-48 h-48 ms-5' alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-4xl text-orange-300">{i.instructor_name}</h2>
                            <p className=' font-bold'>{i.class_name}</p>
                            <p>{i.quote}</p>
                            <p>{i.instructor_email}</p>
                            <div className="card-actions mx-auto mt-5 md:mx-0 justify-end">
                                <button className="btn btn-outline">View Classes</button>
                            </div>
                        </div>
                    </div>

                )
            }

        </div>
    );
};

export default Instructors;