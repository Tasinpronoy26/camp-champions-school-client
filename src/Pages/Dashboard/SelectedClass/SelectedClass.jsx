import React, { useContext } from 'react';
import useClasses from '../../../Hook/useClasses/useClasses';
import { MdPayment, MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Components/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const SelectedClass = () => {

    const { user, payPrice, setPayPrice } = useContext(AuthContext);


    const [selectC, refetch] = useClasses([]);

    const filterSelectedData = selectC.filter(f => f.userEmail === user.email)
    console.log(filterSelectedData);

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

                fetch(`https://camp-champions-school-server-tasinpronoy56-gmailcom.vercel.app/classes/${sc._id}`, {
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

    // 

    const handlePay = (item) => {

        setPayPrice(item.price)
                  
    }

    return (
        <div>

            <p className='text-3xl font-bold italic ms-2 mb-10'>TOTAL SELECTED : {filterSelectedData.length}</p>

            <div className="mx-3">
                <table className="table w-full">
                    <thead className='border text-white bg-black'>
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
                            filterSelectedData.map((item, index) =>


                                <tr key={item._id}>

                                    <td>{index + 1}</td>
                                    <td><img src={item.class_image} className=' w-12' alt="" /></td>
                                    <td>{item.class_name}</td>
                                    <td>${item.price}</td>
                                    <td>{item.userEmail}</td>
                                    <td ><Link to="/dashboard/payment"><button onClick={() => handlePay(item)} className='btn btn-circle btn-warning'><MdPayment></MdPayment></button></Link></td>
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