import React from 'react';
import Checkbox from './Checkbox';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import useClasses from '../../../../Hook/useClasses/useClasses';
import { useContext } from 'react';
import { AuthContext } from '../../../../Components/AuthProvider/AuthProvider';

const stripePromise = loadStripe(import.meta.env.VITE_Payment);
const Payment = () => {

    
    


    const [selectC] = useClasses();
    const {payPrice, setPayPrice} = useContext(AuthContext);

    
   
    
    // console.log(totalPrice);

    return (
        <div>

            <Elements stripe={stripePromise}>
                <Checkbox payment={payPrice} />
            </Elements>

        </div>
    );
};

export default Payment;