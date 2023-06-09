import React from 'react';
import useClasses from '../../../Hook/useClasses/useClasses';

const DefaultDashboarc = () => {

    const [classes] = useClasses();
    const total = classes.reduce((sum, item) => sum + item.price, 0);
    const totalPrice = parseFloat(total.toFixed(2))
   
    return (
        <div className='md:flex md:gap-x-3 gap-y-3'>

            {/* <div className="card border shadow-xl w-96 h-64 rounded-none">
                <div className="card-body">
                   <p className=' text-5xl font-extrabold  text-center mt-8'>TOTAL PRICE <span className=' text-orange-300'>$ {totalPrice}</span></p>
                </div>
            </div>
            <div className="card border shadow-xl w-96 h-64 rounded-none">
                <div className="card-body">
                   <p className=' text-5xl font-extrabold  text-center mt-8'>TOTAL SELECTED<br /><span className=' text-orange-300 mt-5'>{classes.length}</span></p>
                </div>
            </div> */}

        </div>
    );
};

export default DefaultDashboarc;