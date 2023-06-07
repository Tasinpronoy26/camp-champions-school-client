import useSports from '../../Hook/Hook';

const Instructors = () => {
    const [classes] = useSports();
    console.log(classes);

    


    return (
        <div className='p-24'>

            {
                classes.map(instructor =>

                    <div className="card md:card-side border rounded-none mb-5">
                        <figure><img src={instructor.instructor_image} className='mt-5 md:mt-0 md:w-48 h-48 ms-5' alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-4xl text-orange-300">{instructor.instructor_name}</h2>
                            <p className=' font-bold'>{instructor.class_name}</p>
                            <p>{instructor.quote}</p>
                            <p>{instructor.instructor_email}</p>
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