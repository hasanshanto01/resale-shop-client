import React from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';

const AllBuyers = () => {

    const { data: buyersData = [], refetch } = useQuery({
        queryKey: ['buyersData'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/users?role=Buyer`);
                const data = await res.json();
                console.log(data);
                return data;
            }
            catch (err) {

            }
        }
    });

    const handleDelete = id => {
        // console.log(id);

        fetch(`http://localhost:5000/users/${id}`, {
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
            <h2 className='text-3xl text-primary font-bold text-center'>Buyers Details</h2>

            <div className="overflow-x-auto mt-8">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email Address</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row  --> */}
                        {
                            buyersData?.map((buyer, index) => <tr
                                key={buyer?._id}
                                className="hover">
                                <th>{index + 1}</th>
                                <td>{buyer?.name}</td>
                                <td>{buyer?.email}</td>
                                <td><button onClick={() => handleDelete(buyer?._id)} className="btn btn-sm btn-error">Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllBuyers;