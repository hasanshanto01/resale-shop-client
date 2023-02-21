import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';


const BookingModal = ({ laptopData, setLaptopData }) => {

    const { user } = useContext(AuthContext);

    console.log('inside modal', laptopData);
    const { _id, imgURL, name, resalePrice, sellerEmail } = laptopData;
    // console.log(laptopData);


    const handleBooking = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const productName = form.product.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const meetingLocation = form.meeting.value;

        const booking = {
            name,
            email,
            productId: _id,
            productName,
            productImg: imgURL,
            price,
            phone,
            meetingLocation,
            sellerEmail
        }
        // console.log(booking);

        fetch('https://resale-shop-server-delta.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.acknowledged) {
                    setLaptopData(null);
                    toast.success('Your booking is confirmed');
                }
            })
    }

    return (
        <>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-xl font-bold">Please, fill the below form for booking.</h3>

                    <div className='w-10/12 mx-auto mt-5'>
                        <form onSubmit={handleBooking}>
                            <div>
                                <label className="label">
                                    <span className="label-text">Name:</span>
                                </label>
                                <input
                                    name='name'
                                    type="text"
                                    defaultValue={user?.displayName}
                                    className="input input-bordered w-full"
                                    disabled
                                />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Email Address:</span>
                                </label>
                                <input
                                    name='email'
                                    type="email"
                                    defaultValue={user?.email}
                                    className="input input-bordered w-full"
                                    disabled
                                />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Product Name:</span>
                                </label>
                                <input
                                    name='product'
                                    type="text"
                                    defaultValue={name}
                                    className="input input-bordered w-full"
                                    disabled
                                />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Price:</span>
                                </label>
                                <input
                                    name='price'
                                    type="text"
                                    defaultValue={resalePrice}
                                    className="input input-bordered w-full"
                                    disabled
                                />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Phone:</span>
                                </label>
                                <input
                                    name='phone'
                                    type="text"
                                    placeholder="Type here" className="input input-bordered w-full" />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Meeting Location:</span>
                                </label>
                                <input
                                    name='meeting'
                                    type="text"
                                    placeholder="Type here" className="input input-bordered w-full" />
                            </div>
                            <input type="submit" value="Booking" className='btn btn-primary w-full mt-4' />
                        </form>
                    </div>

                </div>
            </div>
        </>
    );
};

export default BookingModal;