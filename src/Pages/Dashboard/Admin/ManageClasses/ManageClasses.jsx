import React from 'react';
import useSports from '../../../../Hook/Hook';
import useRole from '../../../../Hook/useRole/useRole';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import { VscFeedback } from "react-icons/vsc";
import { FcFeedback } from 'react-icons/fc';
import AdminFeedBack from '../AdminFeedBack/AdminFeedBack';


const ManageClasses = () => {

    const [classes] = useSports();
    console.log(classes);
    const [isAdmin, refetch] = useRole();
    const navigate = useNavigate();
    console.log(classes);

    const handleApprove = c => {

        console.log(c);
        fetch(`https://camp-champions-school-server-tasinpronoy56-gmailcom.vercel.app/classes/${c._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status: 'approved' })
        })
            .then(res => res.json())
            .then(data => {

                console.log(data);
                refetch();
                Swal.fire({

                    icon: 'success',
                    title: 'APPROVED',
                    showConfirmButton: false,
                    timer: 1500
                })



            })
    }

    const handleDecline = d => {

        console.log(d);
        fetch(`https://camp-champions-school-server-tasinpronoy56-gmailcom.vercel.app/classes/${d._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status: 'decline' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {

                    refetch();
                    // console.log(refetch);

                    Swal.fire({

                        icon: 'error',
                        title: 'DECLINE',
                        showConfirmButton: false,
                        timer: 1500
                    })

                }
            })
    }

    return (
        <div className='me-20'>
            <p className=' text-3xl font-bold italic mb-10'>TOTAL USERS: {classes.length}</p>

            <div className="w-full">
                <table className="table md:w-full">
                    <thead className='text-center border bg-black text-white'>
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
                            <th></th>

                        </tr>
                    </thead>
                    <tbody className='text-center'>


                        {
                            classes.map((item, index) => 


                                <tr key={item._id}>

                                    <td>{index + 1}</td>
                                    <td><img src={item.class_image} className='w-12' alt="" /></td>
                                    <td>{item.class_name}</td>
                                    <td>{item.instructor_name}</td>
                                    <td>{item.instructor_email}</td>
                                    <td>${item.price}</td>
                                    <td>{item.available_seat}</td>
                                    <td>{item.status}</td>
                                    <td>{isAdmin.role === 'admin' ? <>

                                        <div className="dropdown dropdown-top dropdown-end">
                                            <label tabIndex={0} className="btn btn-xs bg-slate-600 text-white m-1">Status</label>
                                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                                <button onClick={() => handleApprove(item)} className='btn btn-success mb-2'><li><a>Approve</a></li></button>
                                                <button onClick={() => handleDecline(item)} className='btn  btn-error'><li><a>Decline</a></li></button>
                                            </ul>
                                        </div> </>

                                        :

                                        <> {item.status} </>}
                                    </td>
                                    <td>
                                        {item.status === 'decline' ? <Link  to="/dashboard/feedback/admin"><button className='btn btn-outline btn-circle btn-neutral'><FcFeedback></FcFeedback></button></Link> : <></>}
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

export default ManageClasses;