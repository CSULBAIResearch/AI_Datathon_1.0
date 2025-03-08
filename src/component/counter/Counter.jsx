import React, { useState, useEffect, useCallback } from "react";
import "./Counter.css";

const Counter = () => {
  // Event timings
  const EventStart = new Date("2025-03-08T09:30:00").getTime();
  const EventEnd = new Date("2025-03-08T20:00:00").getTime();

  // Function to generate time breakdown
  function timeGenerate(diff) {
    let d = Math.floor(diff / (1000 * 60 * 60 * 24));
    let h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    let m = Math.floor((diff / (1000 * 60)) % 60);
    let s = Math.floor((diff / 1000) % 60);
    return {
      days: d < 10? '0'+d:d,
      hours: h < 10? '0'+h:h,
      minutes: m<10? '0'+m:m,
      seconds: s<10?"0"+s:s,
    };
  }

  // Wrap function in `useCallback` to prevent infinite re-renders
  const calculateTimeLeft = useCallback(() => {
    const now = new Date().getTime();
    console.log("now time: ", now)
    console.log("Event Start: ", EventStart)

    if (now < EventStart) {
      // Counting down to the event start
      //The ... (spread operator) in JavaScript is used to expand objects or arrays. In your 
      // code, it's used to spread the properties of an object into another object.
      return { target: "Datathon Starts In", ...timeGenerate(EventStart - now) };
    } else if (now < EventEnd) {
      // Counting down to the event end
      return { target: "Event Ends In", ...timeGenerate(EventEnd - now) };
    } else {
      // Event is over
      return { target: "Event Ended", ...timeGenerate(0) };
    }
  }, [EventStart, EventEnd]); // Dependencies added

  // State to store countdown values
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [calculateTimeLeft]);

  return (
    <div className="counter-container flex__center">
      <h2 className = "heroHeading1">{timeLeft.target}</h2>
      <div className="countdown">
        
        <span>{timeLeft.days} : </span>
        <span>{timeLeft.hours} : </span>
        <span>{timeLeft.minutes} : </span>
        <span>{timeLeft.seconds} </span>
      </div>
    </div>
  );
};

export default Counter;
