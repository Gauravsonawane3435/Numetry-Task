import React, { useEffect, useState } from "react";
import "../styles/CountdownTimer.css"; // Corrected import

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60 * 1000);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1000 : 24 * 60 * 60 * 1000));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (milliseconds) => {
    const seconds = Math.floor((milliseconds / 1000) % 60);
    const minutes = Math.floor((milliseconds / 1000 / 60) % 60);
    const hours = Math.floor((milliseconds / 1000 / 60 / 60) % 24);
    return `${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div className="countdown">
      <h2>Sale Ends In:</h2>
      <p className="timer">{formatTime(timeLeft)}</p>
    </div>
  );
};

export default CountdownTimer;
