import React from 'react';

const Card = ({ item }) => {

    const { icon, title, description } = item;

    return (
        <div className="card bg-primary shadow-xl text-white cursor-pointer 
        rounded-lg transform 
        transition duration-500 hover:scale-110">
            <figure className='mt-5'>
                <div className="w-20">
                    {icon}
                </div>
            </figure>
            <div className="card-body items-center text-center p-5">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Card;