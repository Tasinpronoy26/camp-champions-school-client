import React from 'react';
import {
    
    useStripe,
    useElements,
    CardElement,
} from '@stripe/react-stripe-js';
import Swal from 'sweetalert2';

const Checkbox = () => {

    const stripe = useStripe();
    const elements = useElements();

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