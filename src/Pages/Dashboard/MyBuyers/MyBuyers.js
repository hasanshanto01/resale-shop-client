import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';


const MyBuyers = () => {

    const { user } = useContext(AuthContext);
    const [buyerDetails, setBuyerDetails] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/buyers?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBuyerDetails(data);
            })
    }, [])

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
                            <th>Phone</th>
                            <th>Meeting Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row  --> */}
                        {
                            buyerDetails?.map((buyer, index) => <tr
                                key={buyer?._id}
                                className="hover">
                                <th>{index + 1}</th>
                                <td>{buyer?.name}</td>
                                <td>{buyer?.email}</td>
                                <td>{buyer?.phone}</td>
                                <td>{buyer?.meetingLocation}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyBuyers;