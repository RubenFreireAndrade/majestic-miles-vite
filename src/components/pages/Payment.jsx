// Payment.js
import React from 'react';

const Payment = ({onSubmit}) => {
    return (
        <div>
            <h2>Step 3: Payment</h2>
            {/* Payment details input fields go here https://plain-queen-7268.info-majesticmiles.workers.dev/api/checkout*/}
            <form action='/api/stripe' method='POST'>
                <button type='submit' /*onClick={onSubmit}*/>Submit</button>
            </form>
        </div>
    );
};

export default Payment;
