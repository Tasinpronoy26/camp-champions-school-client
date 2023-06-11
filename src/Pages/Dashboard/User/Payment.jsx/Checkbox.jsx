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

    console.log(payment);
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {

        console.log(payment);
          
        
        fetch('http://localhost:5000/create-payment-intent', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ items: [{ payment }] }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, []);

    console.log(clientSecret);

    const stripe = useStripe();
    const elements = useElements();
    const {user} = useContext(AuthContext);

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
                text: "INVALID",
            })
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            Swal.fire({
                icon: 'success',
                text: "SUCCESSFULLY PAID!",
            })
        }

        const { paymentIntent,   error:confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'NO EMAIL',
                        name: user?. displayName || 'NO NAME',
                        photo: user?.photoURL || 'NO PHOTOT'
                    },
                },
            },
        );

        if(confirmError){
            console.log(confirmError);
        }

        console.log(payment);
    }

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