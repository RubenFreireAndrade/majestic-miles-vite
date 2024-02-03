// Payment.js
import React from 'react';
import { redirect } from 'react-router-dom';

const Payment = ({onSubmit}) => {
    return (
        <div>
            <h2>Step 3: Payment</h2>
            {/* Payment details input fields go here */}
            {/* <form action='/api/stripe'>
            </form> */}
            <button onClick={redirect(onSubmit)}>Submit</button>
        </div>
    );
};

export default Payment;
