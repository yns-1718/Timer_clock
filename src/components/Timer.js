import React, {useState, useEffect} from 'react';


function countdown(){
    const [seconds,setSeconds]=useState(0);
    const [minutes,setminutes]=useState(0);

    var setTimer;
    useEffect(()=>{
        setTimer = setInterval(() => {
            setSeconds(seconds+1);
            if(seconds==59){
               setminutes(minutes+1);
               setSeconds(0); 
            }
        },1000)
        return()=> clearInterval(setTimer);
    });

   /* const [timeLeft, setTimeLeft] = useState(60);
    const [timerRunning, setTimerRunning] = useState(false);
    const [intervalID, setIntervalID] = useState(null);

    const handleStartTimer = () => {
        setTimerRunning(true);
      };
    
      const handlePauseTimer = () => {
        setTimerRunning(false);
        clearInterval(intervalID);
      };
    
      const handleResetTimer = () => {
        setTimerRunning(false);
        setTimeLeft(60);
      };
    
      const handleResumeTimer = () => {
        setTimerRunning(true);
      };
    useEffect(() => {
        if (timerRunning && timeLeft > 0) {
          const id = setInterval(() => {
            setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
          }, 1000);
          setIntervalID(id);
        }
        if (timeLeft === 0) {
          setTimerRunning(false);
        }
        return () => clearInterval(intervalID);
      }, [timerRunning, timeLeft, intervalID]);
*/

const restart=()=>{
    setSeconds(0);
    setminutes(0);
}

const stop=()=>{
    clearInterval(setTimer);
}

    return (
        <div className='container py-5'>
             <div className="rounded bg-gradient-4 text-white shadow p-5 text-center mb-5">
                    <p className="mb-0 font-weight-bold text-uppercase">Let's use some call to actions</p>
                    <div id="clock-c" className="Timer py-4"></div>

                    <h1>{minutes<10? "0"+minutes : minutes}:{seconds<10? "0" + seconds : seconds}</h1>
                    <ul className="list-inline">
                        <li className="list-inline-item pt-2">
                          <button onClick={restart} id="btn-reset" type="button" className="btn btn-demo"><i className="glyphicon glyphicon-repeat"></i>Start</button>
                        </li>
                      
                        <li className="list-inline-item pt-2">
                          <button onClick={stop} id="btn-pause" type="button" className="btn btn-demo"><i className="glyphicon glyphicon-repeat"></i>Pause</button>
                        </li>
                       
                    </ul>

                </div>

            </div>
    
        
    )
}

export default countdown;