import React from 'react';
import hpImg from '../../../assets/banner-img/hp.png';
import dellImg from '../../../assets/banner-img/dell.png';
import asusImg from '../../../assets/banner-img/asus.png';
import BannerCard from './BannerCard';

const Banner = () => {

    const bannerStyle = {
        backgroundColor: '#5CC0AA',
    }

    const bannerItems = [
        {
            img: hpImg,
            prev: 3,
            current: 1,
            next: 2
        },
        {
            img: dellImg,
            prev: 1,
            current: 2,
            next: 3
        },
        {
            img: asusImg,
            prev: 2,
            current: 3,
            next: 1
        }
    ];

    return (
        <div className="carousel w-full h-96 rounded-md text-white" style={bannerStyle}>
            {
                bannerItems.map((bannerItem, index) => <BannerCard
                    key={index}
                    bannerItem={bannerItem}
                ></BannerCard>)
            }
        </div>
    );
};

export default Banner;