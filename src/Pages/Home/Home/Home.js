import React, { useEffect, useState } from 'react';
import AdvertisedProduct from '../AdvertisedProduct/AdvertisedProduct';
import Banner from '../Banner/Banner';
import LaptopCategories from '../LaptopCategories/LaptopCategories';
import WhyUs from '../WhyUs/WhyUs';

const Home = () => {

    const [advertisedLaptops, setAdvertisedLaptops] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/laptops/advertised')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setAdvertisedLaptops(data);
            })
    }, [])

    return (
        <div>
            <Banner></Banner>
            <LaptopCategories></LaptopCategories>
            <WhyUs></WhyUs>
            {advertisedLaptops.length > 0 &&
                <AdvertisedProduct
                    advertisedLaptops={advertisedLaptops}
                ></AdvertisedProduct>
            }
        </div>
    );
};

export default Home;