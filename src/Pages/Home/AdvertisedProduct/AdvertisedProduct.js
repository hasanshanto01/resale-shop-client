import React from 'react';
import AdvertiseCard from './AdvertiseCard';

const AdvertisedProduct = ({ advertisedLaptops }) => {

    // const { } = advertisedLaptops;

    return (
        <div className='mt-20 mx-20'>
            <h2 className='text-3xl text-primary font-bold text-center'>Advertised Products</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    advertisedLaptops.map(advertisedLaptop => <AdvertiseCard
                        key={advertisedLaptop._id}
                        advertisedLaptop={advertisedLaptop}
                    ></AdvertiseCard>)
                }
            </div>

        </div>
    );
};

export default AdvertisedProduct;