import React from 'react';
import useClasses from '../../../Hook/useClasses/useClasses';
import { MdPayment, MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';

const SelectedClass = () => {

    const [selectC, refetch] = useClasses('');

    const handleDelete = (sc) => {



        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/classes/${sc._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {

                        if (data.deletedCount > 0) {

                            refetch();

                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })


    }


    return (
        <div>

            <p className=' text-3xl font-bold italic mb-10'>TOTAL SELECTED : {selectC.length}</p>

            <div className="w-full">
                <table className="table w-full">
                    <thead>
                        <tr>

                            <th>#</th>
                            <th>Picture</th>
                            <th>Class Name</th>
                            <th>Price</th>
                            <th>Email</th>
                            <th>Payment</th>
                            <th></th>



                        </tr>
                    </thead>
                    <tbody>


                        {
                            selectC.map((item, index) =>


                                <tr key={item._id}>

                                    <td>{index + 1}</td>
                                    <td><img src={item.class_image} className=' w-12' alt="" /></td>
                                    <td>{item.class_name}</td>
                                    <td>${item.price}</td>
                                    <td>{item.userEmail}</td>
                                    <td ><MdPayment></MdPayment></td>
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

export default SelectedClass;