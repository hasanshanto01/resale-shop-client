import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const Navbar = () => {

    const laptopCategory = <>
        <li tabIndex={0}>
            <Link>
                Laptops
                <>
                    <ChevronRightIcon className="h3 w-3 stroke-black lg:hidden"></ChevronRightIcon>
                    <ChevronDownIcon className="h3 w-3 stroke-black hidden lg:block"></ChevronDownIcon>
                </>
            </Link>
            <ul className="p-2">
                <li><Link to='/category/HP'>Hp</Link></li>
                <li><Link to='/category/DELL'>Dell</Link></li>
                <li><Link to='/category/ASUS'>Asus</Link></li>
            </ul>
        </li>
    </>

    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        {laptopCategory}
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/login'>Login</Link></li>
    </>;

    return (
        <div className="navbar bg-base-100 justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={1} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={2} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-2xl text-primary">Resale-Shop</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;