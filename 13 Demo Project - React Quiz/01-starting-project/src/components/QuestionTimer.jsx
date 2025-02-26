import { useState, useEffect } from "react";
export default function QuestionTimer({ timeout, onTimeOut, mode }) {
    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        console.log("SETTING TIMEOUT");
        const timoutId = setTimeout(() => {
            onTimeOut();
        }, timeout);
        return () => {
            clearTimeout(timoutId);
        }
        
    }, [timeout, onTimeOut]);


    useEffect(() => {
        console.log("SETTING INTERVAL");
        const intervalId = setInterval(() => {
            setRemainingTime(prevRemTime => prevRemTime-100);
        }, 100);
        return () => {
            clearInterval(intervalId);
        }
    }, []);


    return (
        <progress id="question-time" max={timeout} value={remainingTime} className={mode} />
    );
}