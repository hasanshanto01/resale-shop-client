import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const MyWishlist = () => {

    const { user } = useContext(AuthContext);

    const { data: wishlistedLaptops = [], refetch } = useQuery({
        queryKey: ['wishlistedLaptops'],
        queryFn: async () => {
            try {
                const res = await fetch(`https://resale-shop-server-delta.vercel.app/wishlists?email=${user?.email}`);
                const data = await res.json();
                // console.log(data);
                return data;
            }
            catch (err) {

            }
        }
    });

    return (
        <div className='mt-5'>
            <h2 className='text-3xl text-primary font-bold text-center'>My Wishlist</h2>

            <div className="overflow-x-auto mt-8">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Seller Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row  --> */}
                        {
                            wishlistedLaptops?.map((laptop, index) => <tr
                                key={laptop?._id}
                                className="hover">
                                <th>{index + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-24 rounded">
                                            <img src={laptop.productImg} alt='' />
                                        </div>
                                    </div>
                                </td>
                                <td>{laptop?.productName}</td>
                                <td>{laptop?.price}</td>
                                <td>{laptop?.sellerEmail}</td>
                                <td>
                                    <Link to={`/dashboard/payment/${laptop?.productId}`}>
                                        <button className='btn btn-sm btn-primary'>Purchase</button>
                                    </Link>
                                </td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyWishlist;