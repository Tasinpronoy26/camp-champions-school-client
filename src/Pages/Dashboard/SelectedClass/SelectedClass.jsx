import React from 'react';
import useClasses from '../../../Hook/useClasses/useClasses';
import { MdPayment, MdPayments } from 'react-icons/md';

const SelectedClass = () => {

    const [selectC] = useClasses();


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

                                        <button className="btn btn-circle btn-outline">

                                            X
                                            
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