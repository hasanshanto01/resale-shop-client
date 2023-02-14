import React from 'react';
import { GlobeAltIcon, LockClosedIcon, ClockIcon } from '@heroicons/react/24/solid';
import Card from './Card';

const WhyUs = () => {

    const cardItems = [
        {
            title: 'Easier',
            description: 'Here buying and selling used laptops more easier.',
            icon: <GlobeAltIcon></GlobeAltIcon>
        },
        {
            title: 'Secure',
            description: 'Buying and selling here is very secure.',
            icon: <LockClosedIcon></LockClosedIcon>
        },
        {
            title: 'Time Efficient',
            description: 'Buying and selling here will save you a lot of time.',
            icon: <ClockIcon></ClockIcon>
        }
    ]

    return (
        <div className='mt-20 mx-20'>
            <h2 className='text-3xl text-primary text-center font-bold'>Why choose our Resale-Shop?</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16'>

                {
                    cardItems.map((item, index) => <Card
                        key={index}
                        item={item}
                    ></Card>)
                }

            </div>

        </div>
    );
};

export default WhyUs;