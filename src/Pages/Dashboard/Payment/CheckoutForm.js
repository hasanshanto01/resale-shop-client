import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ bookedLaptop }) => {

    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    const stripe = useStripe();
    const elements = useElements();

    const { _id, name, email, price, productId } = bookedLaptop;

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch('https://resale-shop-server-delta.vercel.app/create-payment-intent', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);
    // console.log(clientSecret);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        const { paymentMethod, error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            // console.log(error);
            setCardError(error.message);
        }
        else {
            setCardError('');
        }

        setSuccess('');
        setProcessing(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name,
                        email
                    },
                },
            },
        );
        // console.log(paymentIntent);

        console.log(paymentIntent, confirmError);
        if (paymentIntent.status === 'succeeded') {

            const payment = {
                price,
                transactionId: paymentIntent.id,
                email,
                bookingId: _id,
                productId
            };

            fetch('https://resale-shop-server-delta.vercel.app/payments', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(paymentData => {
                    if (paymentData.insertedId) {
                        // console.log(paymentData);

                        setSuccess('Congrates! Your payment completed');
                        setTransactionId(paymentIntent.id);
                    }
                })

        }

        setProcessing(false);


    };

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button
                    className='btn btn-sm btn-primary mt-3'
                    type="submit"
                    disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>

            <p className='text-red-500'>{cardError}</p>
            {
                success && <div>
                    <p className='text-green-500'>{success}</p>
                    <p>Your transactionId: <span className='font-bold'>{transactionId}</span></p>
                </div>
            }

        </div>
    );
};

export default CheckoutForm;