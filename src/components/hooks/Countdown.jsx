import React from 'react';

export default function useCountdown(seconds, onEnd) {
    let [remaining, setRemaining] = React.useState(seconds);

    React.useEffect(() => {
        function tick() {
            setRemaining(remaining - 1);
        }

        const countdown = setInterval(tick, 3000);

        if (remaining < 0) {
            clearInterval(countdown);
            onEnd;
        }

        return () => clearInterval(countdown);
    }, [remaining]);

    return remaining;
}
