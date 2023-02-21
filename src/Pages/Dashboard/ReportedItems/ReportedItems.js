import React from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';

const ReportedItems = () => {

    const { data: reportedItems = [], refetch } = useQuery({
        queryKey: ['reportedItems'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/reporteditems`);
                const data = await res.json();
                console.log(data);
                return data;
            }
            catch (err) {

            }
        }
    });

    const handleDeleteItem = (reportId, productId) => {
        console.log(reportId, productId);

        fetch(`http://localhost:5000/reporteditems/${reportId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.deletedCount > 0) {

                    fetch(`http://localhost:5000/laptops/${productId}`, {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    })
                        .then(res => res.json())
                        .then(deleteProductData => {
                            if (data.deletedCount > 0) {
                                refetch();
                                toast.success('Successfully deleted');
                            }
                        })

                }
            })
    }

    return (
        <div className='mt-5'>
            <h2 className='text-3xl text-primary font-bold text-center'>Reported Items</h2>

            <div className="overflow-x-auto mt-8">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Seller Name</th>
                            <th>Seller Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row  --> */}
                        {
                            reportedItems?.map((item, index) => <tr
                                key={item?._id}
                                className="hover">
                                <th>{index + 1}</th>
                                <td>{item?.productName}</td>
                                <td>{item?.sellerName}</td>
                                <td>{item?.sellerEmail}</td>
                                <td>
                                    <button onClick={() => handleDeleteItem(item?._id, item?.productId)} className='btn btn-sm btn-error'>Delete Item</button>
                                </td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ReportedItems;