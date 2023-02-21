import React, { useContext } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const MyOrders = () => {

    const { user } = useContext(AuthContext);

    // const queryClient = useQueryClient();

    const { data: bookedLaptops = [], refetch } = useQuery({
        queryKey: ['bookedLaptops'],
        queryFn: async () => {
            try {
                const res = await fetch(`https://resale-shop-server-delta.vercel.app/bookings?email=${user?.email}`);
                const data = await res.json();
                console.log(data);
                return data;
            }
            catch (err) {

            }
        }
    });

    return (
        <div className='mt-5'>
            <h2 className='text-3xl text-primary font-bold text-center'>My Orders</h2>

            <div className="overflow-x-auto mt-8">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row  --> */}
                        {
                            bookedLaptops?.map((bookedLaptop, index) => <tr
                                key={bookedLaptop?._id}
                                className="hover">
                                <th>{index + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-24 rounded">
                                            <img src={bookedLaptop.productImg} alt='' />
                                        </div>
                                    </div>
                                </td>
                                <td>{bookedLaptop?.productName}</td>
                                <td>{bookedLaptop?.price}</td>
                                <td>
                                    {
                                        bookedLaptop?.paid === true ?
                                            <button className='btn btn-sm btn-disabled'>
                                                Paid
                                            </button>
                                            :
                                            <Link to={`/dashboard/payment/${bookedLaptop?._id}`}><button className="btn btn-sm btn-primary">Pay</button></Link>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyOrders;