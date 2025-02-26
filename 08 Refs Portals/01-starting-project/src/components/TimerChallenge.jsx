import { useState, useRef } from "react";
import ResultModel from "./ResultModel.jsx";
export default function TimerChallenge({ title, targetTime }) {
    const [remainingTime, setRemainingTime] = useState(targetTime *1000);
    const isTimerActive = remainingTime > 0 && remainingTime < targetTime * 1000; 
    const timer = useRef();
    const dailogOpen = useRef();

    if(remainingTime <= 0){
        handleStopTimer();
    }
    function handleStartTimer() {
        timer.current = setInterval(() => {
            setRemainingTime((prevTimeRemaining) => prevTimeRemaining - 10);
        }, 10);
    }

    function handleReset(){
        setRemainingTime(targetTime * 1000);
    }

    function handleStopTimer() {
        clearInterval(timer.current);
        dailogOpen.current.open();
        // setTimerStarted(false);
    }

    return (
        <>
            <ResultModel ref={dailogOpen} remainingTime={remainingTime} result="Lost" targetTime={targetTime} onReset={handleReset} />
            <section className="challenge">
                <h2>{title}</h2>
                {remainingTime <=0 && <p>You Lost</p>}
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? "s" : ""}
                </p>
                <p>
                    <button onClick={isTimerActive ? handleStopTimer : handleStartTimer}>
                        {isTimerActive ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={isTimerActive ? 'active' : undefined} >
                    {isTimerActive ? 'Timer is running..' : 'Timer Inactive'}
                </p>
            </section>
        </>


    )

}