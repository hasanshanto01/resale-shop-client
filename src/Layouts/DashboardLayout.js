import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';
import useUserRole from '../hook/useUserRole';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {

    const { user } = useContext(AuthContext);
    const [userRole] = useUserRole(user?.email);
    console.log(userRole);

    return (
        <div>
            <Navbar></Navbar>

            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* <!-- Page content here --> */}

                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}

                        {
                            userRole === 'Buyer' && <>
                                <li><Link to='/dashboard/orders'>My Orders</Link></li>
                                <li><Link to='/dashboard/wishlist'>My Wishlist</Link></li>
                            </>
                        }

                        {
                            userRole === 'Seller' && <>
                                <li><Link to='/dashboard/products'>My Products</Link></li>
                                <li><Link to='/dashboard/addproduct'>Add A Product</Link></li>
                                <li><Link to='/dashboard/buyers'>My Buyers</Link></li>
                            </>
                        }

                        {
                            userRole === 'Admin' && <>
                                <li><Link to='/dashboard/allsellers'>All Sellers</Link></li>
                                <li><Link to='/dashboard/allbuyers'>All Buyers</Link></li>
                                <li><Link to='/dashboard/reporteditems'>Reported Items</Link></li>
                            </>
                        }


                    </ul>

                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;