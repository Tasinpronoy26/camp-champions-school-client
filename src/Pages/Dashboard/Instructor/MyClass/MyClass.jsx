import React from 'react';
import useSports from '../../../../Hook/Hook';
import { useContext } from 'react';
import { AuthContext } from '../../../../Components/AuthProvider/AuthProvider';
import { MdDelete } from 'react-icons/md';

const MyClass = () => {

    const { user } = useContext(AuthContext)
    const [classes] = useSports()
    const myClasses = classes.filter(c => c.instructor_email === user.email);

    console.log(myClasses);

    return (
        <div>

            <p className='text-3xl font-bold italic mb-10'>TOTAL ADD : {myClasses.length}</p>

            <div className="md:me-8">
                <table className="table text-center ">
                    <thead className='border bg-black text-white'>
                        <tr>

                            <th>#</th>
                            <th>Class Picture</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Instructor Email</th>
                            <th>Price</th>
                            <th>Available Seat</th>
                            <th>Status</th>
                            <th></th>



                        </tr>
                    </thead>
                    <tbody className='text-center'>


                        {
                            myClasses.map((item, index) =>


                                <tr key={item._id}>

                                    <td>{index + 1}</td>
                                    <td><img src={item.class_image} className='w-12' alt="" /></td>
                                    <td>{item.class_name}</td>
                                    <td>{item.instructor_name}</td>
                                    <td>{item.instructor_email}</td>
                                    <td>${item.price}</td>
                                    <td>{item.available_seat}</td>
                                    <td>{item.status}</td>

                                    <td>

                                        <button onClick={() => handleDelete(item)} className="btn btn-circle btn-outline">

                                            <MdDelete></MdDelete>

                                        </button>
                                    </td>





                                </tr>


                            )
                        }





                    </tbody>
                </table>
            </div>



        </div>
    );
};

export default MyClass;