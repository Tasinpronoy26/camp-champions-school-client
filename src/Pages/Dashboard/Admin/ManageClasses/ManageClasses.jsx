import React from 'react';
import useSports from '../../../../Hook/Hook';
import useRole from '../../../../Hook/useRole/useRole';


const ManageClasses = () => {

    const [classes] = useSports();
    const [isAdmin] = useRole();
    console.log(classes);

    const handleApprove = c => {
           
         console.log(c);
         fetch(`http://localhost:5000/classes/${c._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({status : 'approved'})
         })
         .then(res => res.json())
         .then(data => {
            console.log(data);
         })
    }
    
    const handleDecline = d => {
           
         console.log(d);
         fetch(`http://localhost:5000/classes/${d._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({status : 'decline'})
         })
         .then(res => res.json())
         .then(data => {
            console.log(data);
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
                            <th>Details</th>
                            <th>Available Seat</th>
                            <th>Status</th>
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
                                    <td>{isAdmin.role === 'admin' ? <>
                                    
                                    <div className="dropdown dropdown-top dropdown-end">
                                        <label tabIndex={0} className="btn m-1">Status</label>
                                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                            <button onClick={() => handleApprove(item)} className='btn btn-success mb-2'><li><a>Approve</a></li></button>
                                            <button onClick={() => handleDecline(item)} className='btn  btn-error'><li><a>Decline</a></li></button>      
                                     </ul>
                                    </div> </> 
                                    
                                    :
                                    
                                    <> {item.status} </>}</td>

                                    <td>
{/* 
                                        <button onClick={() => handleDelete(item)} className="btn btn-circle btn-outline">

                                            <MdDelete></MdDelete>

                                        </button> */}
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