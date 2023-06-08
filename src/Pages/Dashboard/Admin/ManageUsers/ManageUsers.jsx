import { useQuery } from '@tanstack/react-query';
import { FaUserShield } from "react-icons/fa";
import React from 'react';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';
import useUsers from '../../../../Hook/useUsers/useUsers';
import useRole from '../../../../Hook/useRole/useRole';

const ManageUsers = () => {

    const [users, refetch] = useUsers();


    const handleRoleAdmin = user => {

        Swal.fire({
            title: `Are you sure you want to make an admin to ${user.name}?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/admin/${user._id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ role: 'admin' })
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount > 0) {
                            refetch();
                            Swal.fire(
                                `${user.name} is an admin now!!`,
                                'success'
                            )

                        }
                    })
            }
        })



    }

    const handleRoleInstructor = user => {

        Swal.fire({
            title: `Are you sure you want to make an instructor to ${user.name}?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/admin/${user._id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ role: 'admin' })
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount > 0) {
                            refetch();
                            Swal.fire(
                                `${user.name} is an instructor now!!`,
                                'success'
                            )

                        }
                    })
            }
        })



    }


    const handleDelete = item => {


    }

    const [isAdmin] = useRole();

    return (
        <div>
            <p className=' text-3xl font-bold italic mb-10'>TOTAL USERS: {users.length}</p>

            <div className="w-full">
                <table className="table w-full">
                    <thead>
                        <tr>

                            <th>#</th>
                            <th>Picture</th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Role</th>



                        </tr>
                    </thead>
                    <tbody>


                        {
                            users.map((item, index) =>


                                <tr key={item._id}>

                                    <td>{index + 1}</td>
                                    <td><img src={item.photo} className=' btn-circle w-12' alt="" /></td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.role}</td>
                                    <td>
                                        {
                                            isAdmin.role ?
                                                <>

                                                    <div className="dropdown dropdown-top dropdown-end">
                                                        <button tabIndex={0} className='btn btn-circle'><FaUserShield ></FaUserShield></button>
                                                        <ul tabIndex={0} className="dropdown-content menu p-5 gap-y-4 shadow bg-base-100 rounded-box w-52">
                                                            <button className="btn btn-xs btn-neutral" onClick={() => handleRoleAdmin(item)}>Admin</button>
                                                            <button className="btn btn-xs" onClick={() => handleRoleInstructor(item)}>Instructor</button>
                                                        </ul>
                                                    </div>

                                                </>
                                                :
                                                <>
                                                    <FaUserShield ></FaUserShield>

                                                </>
                                        }
                                    </td>
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

export default ManageUsers;