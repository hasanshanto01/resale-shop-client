import React from 'react';
import { useRouteError } from 'react-router-dom';
import errorImg from '../../../assets/error-img.jpg';

const ErrorPage = () => {

    const error = useRouteError();
    console.log(error);

    return (
        <div>
            <div className='w-1/2 mx-auto mt-10'>
                <img src={errorImg} alt="" className='w-full rounded-lg' />
            </div>
            <div className='mt-5'>
                <p className='text-2xl text-red-600
                 text-center'>{error.statusText || error.message}</p>
            </div>
        </div>
    );
};

export default ErrorPage;