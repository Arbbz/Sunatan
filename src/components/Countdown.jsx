import React, { useEffect, useState } from "react";

const Countdown = () => {
  const targetDate = new Date("2026-07-05T10:00:00");

  const calculateTimeLeft = () => {
    const difference = targetDate - new Date();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const Box = ({ value, label }) => (
    <div className="flex flex-col items-center rounded-2xl bg-white/80 px-4 py-3 shadow-lg">
      <span className="text-3xl font-bold text-red-900">{value}</span>
      <span className="text-xs uppercase tracking-wider text-gray-500">
        {label}
      </span>
    </div>
  );

  return (
    <div data-aos="fade-up" className="mt-8">
      <h3 className="mb-4 text-center text-lg font-semibold text-red-900">
        Menuju Hari Khitan
      </h3>

      <div className="grid grid-cols-4 gap-3">
        <Box value={timeLeft.days} label="Hari" />
        <Box value={timeLeft.hours} label="Jam" />
        <Box value={timeLeft.minutes} label="Menit" />
        <Box value={timeLeft.seconds} label="Detik" />
      </div>
    </div>
  );
};

export default Countdown;
