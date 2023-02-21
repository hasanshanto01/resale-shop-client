import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useQuery, useQueryClient } from 'react-query';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const MyProducts = () => {

    const { user } = useContext(AuthContext);

    // const queryClient = useQueryClient();

    const { data: laptops = [], refetch } = useQuery({
        queryKey: ['laptops'],
        queryFn: async () => {
            try {
                const res = await fetch(`https://resale-shop-server-delta.vercel.app/laptops?email=${user?.email}`);
                const data = await res.json();
                // console.log(data);
                return data;
            }
            catch (err) {

            }
        }
    });

    const handleAdvertise = productId => {
        // console.log(productId);
        fetch(`https://resale-shop-server-delta.vercel.app/laptops/${productId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(res => res.json())
            .then(data => {
                // console.log('advertised', data);

                if (data.matchedCount > 0) {
                    refetch();
                    toast.success('Your product successfully advertised');
                }

            })
    };

    const handleDelete = id => {
        // console.log(id);

        fetch(`https://resale-shop-server-delta.vercel.app/laptops/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success('Product successfully deleted');
                }
            })

    }

    return (
        <div className='mt-5'>
            <h2 className='text-3xl text-primary font-bold text-center'>My Products</h2>

            <div className="overflow-x-auto mt-8">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Sales Status</th>
                            <th>Advertise Product</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row  --> */}
                        {
                            laptops?.map((laptop, index) => <tr
                                key={laptop?._id}
                                className="hover">
                                <th>{index + 1}</th>
                                <td>{laptop?.name}</td>
                                <td>{laptop?.resalePrice}</td>
                                {
                                    laptop?.status === 'Available' &&
                                    // <td>{laptop?.status}</td>
                                    <td className='text-green-500'>Available</td>
                                }
                                {
                                    laptop?.status === 'Sold' &&
                                    // <td>{laptop?.status}</td>
                                    <td className='text-red-500'>Sold</td>
                                }

                                {
                                    laptop?.status === 'Sold' || laptop?.advertisement === true ? <td><button className="btn btn-sm btn-disabled">Advertise</button></td> :
                                        <td><button onClick={() => handleAdvertise(laptop?._id)} className="btn btn-sm btn-primary">Advertise</button></td>
                                }

                                <td><button onClick={() => handleDelete(laptop?._id)} className="btn btn-sm btn-error">Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyProducts;