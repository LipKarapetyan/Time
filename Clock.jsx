import { useState,useEffect } from "react";

function Clock() {
    let time = new Date().toLocaleTimeString()
    const [timer,setTimer]=useState(time)

    function updateTimer() {
        
        time = new Date().toLocaleTimeString()
        setTimer(time)
    }

    useEffect(()=>{
     let interval = setInterval(()=> updateTimer(),1000)
     return ()=>{
        clearInterval(interval)
     }
    },[])

    return (
        <div>
            <h1>Time</h1>
            <h3>{timer}</h3>
        </div>
    )
}

export default Clock
