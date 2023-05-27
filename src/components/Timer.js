import { useState, useEffect } from "react";

function Timer() {
  const [message, setMessage] = useState("Timer Countdown is starting... ");
  const [count, setCount] = useState(10);
  var timerID;

  useEffect(() => {
    timerID = setInterval(() => {
      setCount(count - 1);
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  });

  useEffect(() => {
    if (count < 1) {
      clearInterval(timerID);
      setMessage("Time is up....");
    }
  });

  return (
    <>
      <h1>
        Task-B Here: {message} {count && count > 0 ? count : ""}
      </h1>
    </>
  );
}

export default Timer;
