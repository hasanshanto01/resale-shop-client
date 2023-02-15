import React from 'react';
import { ComputerDesktopIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {

    const { brand } = category;

    return (
        <div className="card bg-base-100 shadow-xl
        cursor-pointer 
        rounded-lg transform 
        transition duration-500 hover:scale-110">
            <div className="avatar my-3">
                <div className="w-20 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <ComputerDesktopIcon className='p-5'></ComputerDesktopIcon>
                </div>
            </div>
            <div className="card-body items-center text-center p-4">
                <div className="card-actions">
                    <Link to={`/category/${brand}`}><button className="btn btn-outline btn-primary">{brand}</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;