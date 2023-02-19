import React, { useContext } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const MyOrders = () => {

    const { user } = useContext(AuthContext);

    // const queryClient = useQueryClient();

    const { data: orderdLaptops = [], refetch } = useQuery({
        queryKey: ['orderdLaptops'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`);
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
                            orderdLaptops?.map((laptop, index) => <tr
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
                                <td>
                                    {
                                        laptop?.payment === 'Paid' ?
                                            <button className="btn btn-sm btn-disabled">Paid</button>
                                            :
                                            <Link to={`/dashboard/orders/${laptop?._id}`}><button className="btn btn-sm btn-primary">Pay</button></Link>
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