// Payment.js
import React from 'react';

const Payment = ({onSubmit}) => {
    return (
        <div>
            <h2>Step 3: Payment</h2>
            {/* Payment details input fields go here */}
            <form action='/api/stripe' method='POST'>
                <button type='submit' /*onClick={onSubmit}*/>Submit</button>
            </form>
        </div>
    );
};

export default Payment;
