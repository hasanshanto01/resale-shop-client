import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import LaptopCard from './LaptopCard';

const AvailableLaptops = () => {

    const laptops = useLoaderData();
    // console.log(laptops);

    return (
        <div className='mx-20 mt-14'>
            <h2 className='text-3xl text-primary text-center font-bold'>Available Laptops</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16'>
                {
                    laptops.map(laptop => <LaptopCard
                        key={laptop.id}
                        laptop={laptop}
                    ></LaptopCard>)
                }
            </div>

            <div className='mt-10 w-40 mx-auto'>
                <Link to='/'>
                    <button className='btn btn-outline btn-primary'>Back to Home</button>
                </Link>
            </div>

        </div>
    );
};

export default AvailableLaptops;