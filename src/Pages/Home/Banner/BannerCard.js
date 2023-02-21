import React from 'react';

const BannerCard = ({ bannerItem }) => {

    const { img, prev, current, next } = bannerItem;

    return (
        <div id={current} className="carousel-item relative w-full">
            <div className='w-full flex mx-16 p-5'>
                <div className='w-4/6 md:w-3/5 flex justify-center items-center'>
                    <p className='p-4 text-md text-lg md:text-2xl md:text-justify'>You can buy desired used laptop or sell used laptop via our online <strong>Resale-Shop</strong>.</p>
                </div>
                <div className="w-2/6 md:w-2/5">
                    <img src={img} alt='hp laptop' className="w-full h-full" />
                </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#${prev}`} className="btn btn-circle">❮</a>
                <a href={`#${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerCard;