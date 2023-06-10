import React from 'react';
import Checkbox from './Checkbox';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import useClasses from '../../../../Hook/useClasses/useClasses';

const stripePromise = loadStripe('pk_test_51NGr84ADFosxOhRqgXWXhTBG4CgVl8DPCHVfMvcXrvvgfJtz4FYoc2ymSuQGeyGCCRVaXTUtnSvm5c26rpYXuXTg007O0NU8Zb');
const Payment = () => {


    const [selectC] = useClasses();
    const total = selectC.reduce((sum, item) => sum + item.price, 0);
    const totalPrice = parseFloat(total.toFixed(2))
    // console.log(totalPrice);

    return (
        <div>

            <Elements stripe={stripePromise}>
                <Checkbox payment={totalPrice} />
            </Elements>

        </div>
    );
};

export default Payment;