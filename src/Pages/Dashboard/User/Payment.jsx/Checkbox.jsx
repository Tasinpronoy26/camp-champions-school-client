import React, { useEffect, useState } from 'react';
import {
    useStripe,
    useElements,
    CardElement,
} from '@stripe/react-stripe-js';
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { AuthContext } from '../../../../Components/AuthProvider/AuthProvider';

const Checkbox = ({ payment }) => {
    const [clientSecret, setClientSecret] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch('https://camp-champions-school-server-tasinpronoy56-gmailcom.vercel.app/create-payment-intent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ payment }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, []);

    const handleCard = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            Swal.fire({
                icon: 'info',
                text: 'INVALID',
            });
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            Swal.fire({
                icon: 'success',
                text: 'SUCCESSFULLY PAID!',
            });
        }

        if (clientSecret) {
            const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'NO EMAIL',
                        name: user?.displayName || 'NO NAME',
                        photo: user?.photoURL || 'NO PHOTO',
                    },
                },
            });

            if (confirmError) {
                console.log(confirmError);
            }

            console.log(payment);
        }
    };

    return (
        <div>
            <form onSubmit={handleCard}>
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
                <button type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
        </div>
    );
};

export default Checkbox;
