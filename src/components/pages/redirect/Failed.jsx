import React from 'react';
import { useNavigate } from 'react-router-dom';

import useCountdown from '../../hooks/Countdown';

export default function Failed() {
    const navigate = useNavigate();
    const countdown = useCountdown(3, navigate('/'));

    return (
        <div>
            <div className="text-4xl text-center p-40">
                Task Failed!
                <div>Redirecting you home</div>
            </div>
        </div>
    );
}
