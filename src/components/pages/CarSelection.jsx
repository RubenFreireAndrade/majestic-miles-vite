// CarSelection.js
import React from 'react';

const CarSelection = ({onNext}) => {
    return (
        <div>
            <h2>Step 1: Car Selection</h2>
            {/* Your car selection UI goes here */}
            <button onClick={onNext}>Next</button>
        </div>
    );
};

export default CarSelection;
