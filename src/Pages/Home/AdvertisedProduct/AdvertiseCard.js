import React from 'react';

const AdvertiseCard = ({ advertisedLaptop }) => {

    const { imgURL, name, resalePrice, usedTime } = advertisedLaptop;

    return (
        <div className="card bg-primary text-white shadow-xl">
            <figure className="px-10 pt-10">
                <img src={imgURL} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>Price: $<strong>{resalePrice}</strong></p>
                <p>Years of use: <strong>{usedTime}</strong></p>
            </div>
        </div>
    );
};

export default AdvertiseCard;