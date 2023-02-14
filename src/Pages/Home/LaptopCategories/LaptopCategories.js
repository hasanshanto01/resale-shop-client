import React, { useEffect, useState } from 'react';
import LaptopCard from './LaptopCard';

const LaptopCategories = () => {
    const [laptops, setLaptops] = useState([]);

    useEffect(() => {

        fetch('categories.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setLaptops(data);
            })

    }, []);

    return (
        <div className='mt-20 mx-20'>
            <h2 className='text-3xl text-primary text-center font-bold'>Available Laptop Brands</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16'>
                {
                    laptops?.map(laptop => <LaptopCard
                        key={laptop.id}
                        laptop={laptop}
                    ></LaptopCard>)
                }
            </div>

        </div>
    );
};

export default LaptopCategories;