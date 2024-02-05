import React from 'react';
import { useNavigate } from 'react-router-dom';

import useCountdown from '../../hooks/Countdown';

export default function Success() {
    const navigate = useNavigate();
    const countdown = useCountdown(3, navigate('/'));

    return (
        <div>
            <div className="text-4xl text-center p-40">
                Task was successfull!
                <div>Redirecting you home</div>
            </div>
        </div>
    );
}
