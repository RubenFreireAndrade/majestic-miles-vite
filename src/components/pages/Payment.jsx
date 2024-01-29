// Payment.js
import React from 'react';

const Payment = ({onSubmit}) => {
    return (
        <div>
            <h2>Step 3: Payment</h2>
            {/* Payment details input fields go here */}
            <button onClick={onSubmit}>Submit</button>
        </div>
    );
};

export default Payment;
