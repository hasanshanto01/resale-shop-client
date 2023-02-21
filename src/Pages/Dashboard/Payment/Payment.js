import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);


const Payment = () => {

    const bookedLaptop = useLoaderData();
    // console.log(bookedLaptop);

    const { productName, price } = bookedLaptop;

    return (
        <div className='mt-5'>
            <h2 className='text-3xl text-primary font-bold text-center'>Payment</h2>
            <p className='mt-5'>Please, pay $<strong>{price}</strong> for product: <strong>{productName}</strong></p>

            <div className='w-96 my-8'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        bookedLaptop={bookedLaptop}
                    />
                </Elements>
            </div>

        </div>
    );
};

export default Payment;