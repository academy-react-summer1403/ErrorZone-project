import { useRef, useState } from "react";
import { clearInterval } from "timers";


const formatTime = (time) => {
    let minutes = math.floor(time / 60)
    let seconds = math.floor(time - minutes * 60)

    if(minutes <= 10) minutes = '0' + minutes;
    if(seconds <= 10) seconds = '0' + seconds;
    return minutes + ':' + seconds    
}

export default function CountDown ({seconds}) {
    const [countdown , setCountdown] = useState(seconds)
    const timerId = useRef()

    useEffect(() => {
       timerId.current = setInterval(() => {
           setCountdown(prev => prev -1)
       } , 1000)
    }, [])
    
    useEffect(() => {
      if(countdown <= 0){
        clearInterval(timerId.current)
        console.log('end')
      }

    }, [countdown])

    return <h2 className="bg-blue text-white w-32 h-32">  countdown : {formatTime(countdown)}     </h2>
    
}