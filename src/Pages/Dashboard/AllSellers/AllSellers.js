import React from 'react';
import { useQuery, useQueryClient } from 'react-query';

const AllSellers = () => {

    // const queryClient = useQueryClient();

    const { data: sellersData = [], refetch } = useQuery({
        queryKey: ['sellersData'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/users?role=Seller`);
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
            <h2 className='text-3xl text-primary font-bold text-center'>Sellers Details</h2>

            <div className="overflow-x-auto mt-8">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email Address</th>
                            <th>Verification</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row  --> */}
                        {
                            sellersData?.map((seller, index) => <tr
                                key={seller?._id}
                                className="hover">
                                <th>{index + 1}</th>
                                <td>{seller?.name}</td>
                                <td>{seller?.email}</td>
                                <td>
                                    {
                                        seller?.verification === 'Verified' ?
                                            <button className="btn btn-sm btn-disabled">Verified</button>
                                            :
                                            <button className="btn btn-sm btn-primary">Verify</button>
                                    }
                                </td>
                                <td><button className="btn btn-sm btn-error">Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllSellers;