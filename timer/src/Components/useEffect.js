import React, {useState, useEffect} from 'react'

function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(()=>{
        //this function runs after the component has rendered
        const interval = setInterval(()=>{
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);
        // this will clear the timer when the component is unmounted.
        return ()=> clearInterval(interval);
    }, []);

    return(
        <div>
            <p>Seconds: {seconds}</p>
            </div>
    )
}

export default Timer;