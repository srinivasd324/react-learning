import { useEffect, useState } from 'react';

export default function ProgressBar({timer}) {
    const [remainingTime, setRemainingTime] = useState(timer);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setRemainingTime((prevRemainingTime) => {
                if (prevRemainingTime <= 0) {
                    return 0;
                }
                return prevRemainingTime - 10;
            })
        }, 10);
        return () => {
            clearInterval(intervalId);
        }

    }, []);
    return (
        <progress value={remainingTime} max={timer} />
    )
}