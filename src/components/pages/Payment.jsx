// Payment.js
import React from 'react';

const Payment = ({onSubmit, isJobSent}) => {
    return (
        <>
            <div>
                <h2>Step 3: Payment</h2>
                {/* Details from previous steps go here */}
                {/* Stripe API goes here once it works. */}
                <button onClick={onSubmit}>Submit</button>
            </div>
        </>
    );
};

export default Payment;
