import { useEffect, useState } from "react";

const Countdown = () => {
  // tanggal target countdown
  const targetDate = new Date("2026-06-06T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function getTimeRemaining() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // kalau waktu habis
    if (distance <= 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return {
      days: String(days).padStart(2, "0"),
      hours: String(hours).padStart(2, "0"),
      minutes: String(minutes).padStart(2, "0"),
      seconds: String(seconds).padStart(2, "0"),
    };
  }

  return (
    <div className="flex gap-4 justify-center items-center text-yellow-700 mt-8">
      {/* Days */}
      <div
        className={`text-center bg-white/10 backdrop-blur-md px-8 py-5 rounded-xl shadow-lg border border-yellow-300 ${
          timeLeft.days <= 0 &&
          timeLeft.hours <= 0 &&
          timeLeft.minutes <= 0 &&
          timeLeft.seconds <= 0
            ? "animate-pulse"
            : ""
        }`}
      >
        <h1 className="text-2xl font-bold">{timeLeft.days}</h1>
        <p className="mt-2 text-xs uppercase tracking-widest">Days</p>
      </div>

      {/* Hours */}
      <div
        className={`text-center bg-white/10 backdrop-blur-md px-6 py-5 rounded-2xl shadow-lg border border-yellow-300 ${
          timeLeft.days <= 0 &&
          timeLeft.hours <= 0 &&
          timeLeft.minutes <= 0 &&
          timeLeft.seconds <= 0
            ? "animate-pulse"
            : ""
        }`}
      >
        <h1 className="text-2xl font-bold">{timeLeft.hours}</h1>
        <p className="mt-2 text-xs uppercase tracking-widest">Hours</p>
      </div>

      {/* Minutes */}
      <div
        className={`text-center bg-white/10 backdrop-blur-md px-6 py-5 rounded-2xl shadow-lg border border-yellow-300 ${
          timeLeft.days <= 0 &&
          timeLeft.hours <= 0 &&
          timeLeft.minutes <= 0 &&
          timeLeft.seconds <= 0
            ? "animate-pulse"
            : ""
        }`}
      >
        <h1 className="text-2xl font-bold">{timeLeft.minutes}</h1>
        <p className="mt-2 text-xs uppercase tracking-widest">Minutes</p>
      </div>

      {/* Seconds */}
      <div
        className={`text-center bg-white/10 backdrop-blur-md px-6 py-5 rounded-2xl shadow-lg border border-yellow-300 ${
          timeLeft.days <= 0 &&
          timeLeft.hours <= 0 &&
          timeLeft.minutes <= 0 &&
          timeLeft.seconds <= 0
            ? "animate-pulse"
            : ""
        }`}
      >
        <h1 className="text-2xl font-bold">{timeLeft.seconds}</h1>
        <p className="mt-2 text-xs uppercase tracking-widest">Seconds</p>
      </div>
    </div>
  );
};

export default Countdown;
