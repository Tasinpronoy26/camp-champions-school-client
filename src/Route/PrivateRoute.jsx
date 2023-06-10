import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Components/AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const PrivateRoute = ({children}) => {

    const { loading, user } = useContext(AuthContext);

    if (!user) {

        Swal.fire({
            title: 'Without a login, you can not visit to this page.',
            icon: 'Error'

        })
    }

    if (loading) {

        return <progress className="progress w-56"></progress>;
    }

    if (user) {

        return children;
    }

    return (
        <div>

            <Navigate to="/login">

            </Navigate>

        </div>
    );
};

export default PrivateRoute;