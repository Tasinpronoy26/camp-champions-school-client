import React, { useState } from 'react';
import useSports from '../../../../Hook/Hook';
import { useContext } from 'react';
import { AuthContext } from '../../../../Components/AuthProvider/AuthProvider';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';


const MyClass = () => {

    const { user } = useContext(AuthContext)
    const [ classes, setClasses ] = useSports()
    const myClasses = classes.filter(c => c.instructor_email === user.email);
    const [ remaining, setRemainning ] = useState();

    // console.log(remaining);

    // console.log(myClasses);

    const handleMyClassDelete = (c) => {

                    console.log(c);

        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/sports/${c._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {

                        console.log(data);

                        if (data.deletedCount > 0) {
                             
                            

                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )

                            const totalRemaining = classes.filter(item => item._id !== c)
                            console.log(totalRemaining);
                            setRemainning(totalRemaining); 
                        }
                    })
            }
        })


    }

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
                                    <td>{

                                        item.status === 'approved' ? <> <p className='bg-yellow-600 text-white'>approved</p> </> :

                                            item.status === 'decline' ? <><p className=' bg-red-800 text-white'>decline</p></> : <><p className=' bg-rose-950 text-white'>pending</p></>

                                    }</td>

                                    <td>

                                        <button onClick={ () => handleMyClassDelete(item)} className="btn btn-circle btn-outline">

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