import { useState,useEffect } from "react";

function Clock() {
    const [time, setTime] = useState(new Date());
  
    function updateTimer() {
      setTime(new Date());
    }
  
    useEffect(() => {
      let interval = setInterval(() => updateTimer(), 1000);
      return () => {
        clearInterval(interval);
      };
    }, []);
  
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
  
    const hoursString = hours < 10 ? "0" + hours : hours.toString();
    const minutesString = minutes < 10 ? "0" + minutes : minutes.toString();
    const secondsString = seconds < 10 ? "0" + seconds : seconds.toString();
  
    return (
      <div>
        <h1>Time</h1>
        <h3>{`${hoursString}:${minutesString}:${secondsString}`}</h3>
      </div>
    );
  }

  export default Clock
