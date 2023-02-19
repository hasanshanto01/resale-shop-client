import React, { useContext, useState } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import errorImg from '../../../assets/error-img.jpg';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const ErrorPage = () => {

    const { logOut } = useContext(AuthContext);

    const error = useRouteError();
    // console.log(error);

    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login');
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <div className='w-1/2 mx-auto mt-10'>
                <img src={errorImg} alt="" className='w-full rounded-lg' />
            </div>
            <div className='mt-5'>
                {/* <p className='text-2xl text-red-600
                 text-center'>{error.statusText || error.message}</p> */}
                <p className='text-2xl text-center'>Please, <button className='btn btn-sm btn-primary' onClick={handleLogOut}>Log Out</button> and log back in.</p>
            </div>
        </div>
    );
};

export default ErrorPage;