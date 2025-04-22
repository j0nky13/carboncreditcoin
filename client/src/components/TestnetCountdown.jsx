import React, { useState, useEffect } from 'react';

const TestnetCountdown = () => {
  const launchDate = new Date("2025-05-01T20:00:00");
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = launchDate - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-gray-900 border border-[#3C0096] rounded-xl text-white py-4 px-6 my-8 text-center shadow-md">
      <h3 className="text-eco-green text-lg font-semibold tracking-wide uppercase mb-1">
         Testnet Goes Live In
      </h3>
      <p className="text-3xl font-bold text-white">
        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
      </p>
    </div>
  );
};

export default TestnetCountdown;