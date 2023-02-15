import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const LaptopCard = ({ laptop }) => {

    const { imgURL, name, resalePrice, originalPrice, usedTime, seller, location, postedDate } = laptop;

    return (
        <div className="card bg-base-100 border border-secondary shadow-xl">
            <figure><img src={`${imgURL}`} alt="" className='w-full h-60' /></figure>
            <div className="card-body p-4">
                <div className='flex border-double border-4 border-primary p-2'>
                    <h4>Seller: <strong>{seller}</strong></h4>
                    <CheckCircleIcon className='w-5 ml-3 text-blue-600'></CheckCircleIcon>
                </div>
                <h2 className="card-title text-2xl">{name}</h2>
                <p>Date of Post: <strong>{postedDate}</strong></p>
                <p>Location: <strong>{location}</strong></p>
                <p>Resale Price: <strong>{resalePrice}</strong>Tk</p>
                <p>Original Price: {originalPrice}Tk</p>
                <p>Duration of Use: {usedTime}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-outline btn-primary">Details</button>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default LaptopCard;