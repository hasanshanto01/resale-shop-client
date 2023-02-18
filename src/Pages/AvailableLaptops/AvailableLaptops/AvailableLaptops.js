import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import LaptopCard from './LaptopCard';

const AvailableLaptops = () => {

    const [laptopData, setLaptopData] = useState(null);

    const laptops = useLoaderData();
    console.log(laptops);

    return (
        <div className='mx-20 mt-14'>
            <h2 className='text-3xl text-primary text-center font-bold'>Available Laptops</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16'>
                {
                    laptops?.map(laptop => <LaptopCard
                        key={laptop._id}
                        laptop={laptop}
                        setLaptopData={setLaptopData}
                    ></LaptopCard>)
                }
            </div>

            <div className='mt-10 w-40 mx-auto'>
                <Link to='/'>
                    <button className='btn btn-outline btn-primary'>Back to Home</button>
                </Link>
            </div>

            {laptopData &&
                <BookingModal
                    laptopData={laptopData}
                    setLaptopData={setLaptopData}
                ></BookingModal>
            }

        </div>
    );
};

export default AvailableLaptops;