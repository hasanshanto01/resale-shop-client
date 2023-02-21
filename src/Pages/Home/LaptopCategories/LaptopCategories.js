import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const LaptopCategories = () => {
    const [laptopCategories, setLaptopCategories] = useState([]);

    useEffect(() => {

        fetch('https://resale-shop-server-delta.vercel.app/category')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setLaptopCategories(data);
            })

    }, []);

    return (
        <div className='mt-20 mx-20'>
            <h2 className='text-3xl text-primary text-center font-bold'>Available Laptop Brands</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16'>
                {
                    laptopCategories?.map(category => <CategoryCard
                        key={category._id}
                        category={category}
                    ></CategoryCard>)
                }
            </div>

        </div>
    );
};

export default LaptopCategories;