import React from 'react';
import { CheckCircleIcon, HeartIcon, FlagIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const LaptopCard = ({ laptop, setLaptopData }) => {

    const { _id, imgURL, name, resalePrice, originalPrice, usedTime, seller, location, postedDate, verified } = laptop;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={`${imgURL}`} alt="" className='w-full h-60' /></figure>
            <div className="card-body p-4">
                <div className='flex justify-between border-double border-4 border-primary p-1'>
                    <div>
                        <p>Date of Post: <strong>{postedDate}</strong></p>
                        <div className='flex'>
                            <h4>Seller: <strong>{seller}</strong></h4>
                            {
                                verified === true &&
                                <CheckCircleIcon className='w-5 ml-3 text-blue-600'></CheckCircleIcon>
                            }
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-end'>
                            <HeartIcon className='w-7 h-7 mr-3'></HeartIcon>
                            <FlagIcon className='w-7 h-7'></FlagIcon>
                        </div>
                        <p>Location: <strong>{location}</strong></p>
                    </div>
                </div>
                <h2 className="card-title text-2xl">{name}</h2>
                <p>Resale Price: <strong>{resalePrice}</strong>Tk</p>
                <p>Original Price: {originalPrice}Tk</p>
                <p>Duration of Use: {usedTime}</p>
                <div className="card-actions justify-center mt-4">
                    <Link to={`/laptop/${_id}`}><button className="btn btn-outline btn-primary">Details</button></Link>

                    {/* The button to open modal */}
                    <label
                        onClick={() => setLaptopData(laptop)}
                        htmlFor="booking-modal"
                        className="btn btn-primary">Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default LaptopCard;