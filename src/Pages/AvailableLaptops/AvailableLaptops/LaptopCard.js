import React, { useContext } from 'react';
import { CheckCircleIcon, HeartIcon, FlagIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const LaptopCard = ({ laptop, setLaptopData }) => {

    const { user } = useContext(AuthContext);

    const { _id, imgURL, name, resalePrice, originalPrice, usedTime, seller, location, postedDate, verified } = laptop;

    const handleWishlist = laptop => {
        const laptopDetail = {
            productId: laptop._id,
            productName: laptop.name,
            productImg: laptop.imgURL,
            price: laptop.resalePrice,
            email: user?.email,
            sellerName: laptop.seller,
            sellerEmail: laptop.sellerEmail

        };
        // console.log('inside wishlist', laptopDetail);

        fetch('https://resale-shop-server-delta.vercel.app/wishlists', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(laptopDetail)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('This product successfully added to your wishlist.');
                }
            })

    };

    const handleReportedItem = reportedLaptop => {
        const reportedLaptopDetail = {
            productId: reportedLaptop._id,
            productName: reportedLaptop.name,
            reportedUserEmail: user?.email,
            sellerName: reportedLaptop.seller,
            sellerEmail: reportedLaptop.sellerEmail
        };
        // console.log(reportedLaptopDetail);

        fetch('https://resale-shop-server-delta.vercel.app/reporteditems', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reportedLaptopDetail)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Successfully reported about this product.');
                }
            })

    };

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
                            <button onClick={() => handleWishlist(laptop)} className='btn btn-sm btn-primary'>
                                <HeartIcon className='w-4 h-4 text-white'></HeartIcon>
                            </button>
                            <button onClick={() => handleReportedItem(laptop)} className='btn btn-sm btn-error ml-2'>
                                <FlagIcon className='w-4 h-4 text-white'></FlagIcon>
                            </button>
                        </div>
                        <p>Location: <strong>{location}</strong></p>
                    </div>
                </div>
                <h2 className="card-title text-2xl">{name}</h2>
                <p>Resale Price: $<strong>{resalePrice}</strong></p>
                <p>Original Price: ${originalPrice}</p>
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