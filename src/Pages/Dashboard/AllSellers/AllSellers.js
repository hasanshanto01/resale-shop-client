import React from 'react';
import { toast } from 'react-hot-toast';
import { useQuery, useQueryClient } from 'react-query';

const AllSellers = () => {

    // const queryClient = useQueryClient();

    const { data: sellersData = [], refetch } = useQuery({
        queryKey: ['sellersData'],
        queryFn: async () => {
            try {
                const res = await fetch(`https://resale-shop-server-delta.vercel.app/users?role=Seller`);
                const data = await res.json();
                console.log(data);
                return data;
            }
            catch (err) {

            }
        }
    });

    const handleVerify = seller => {
        // console.log(seller);
        const id = seller?._id;
        const email = seller?.email;

        fetch(`https://resale-shop-server-delta.vercel.app/users/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email })
        })
            .then(res => res.json())
            .then(data => {
                console.log('advertised', data);

                if (data.matchedCount > 0) {
                    refetch();
                    toast.success('Successfully verified');
                }

            })

    };

    const handleDelete = id => {
        // console.log(id);

        fetch(`https://resale-shop-server-delta.vercel.app/users/${id}`, {
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
                    toast.success('Successfully deleted');
                }
            })

    }

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
                                        seller?.verified === true ?
                                            <button className="btn btn-sm btn-disabled text-blue-500">Verified</button>
                                            :
                                            <button onClick={() => handleVerify(seller)} className="btn btn-sm btn-primary">Verify</button>
                                    }
                                </td>
                                <td><button onClick={() => handleDelete(seller?._id)} className="btn btn-sm btn-error">Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllSellers;