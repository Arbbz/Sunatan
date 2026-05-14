import { useEffect, useState } from "react";

const Countdown = () => {
  // tanggal target countdown
  const targetDate = new Date("2026-06-06T00:00:00").getTime();

  // Pindahkan fungsi ini ke atas agar bisa dibaca saat inisialisasi state
  function getTimeRemaining() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      return { days: "00", hours: "00", minutes: "00", seconds: "00" };
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

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Cek apakah waktu sudah habis untuk animasi pulse
  const isFinished =
    timeLeft.days === "00" &&
    timeLeft.hours === "00" &&
    timeLeft.minutes === "00" &&
    timeLeft.seconds === "00";

  // Reusable component untuk kotak waktu
  const TimeUnit = ({ value, label, roundedClass = "rounded-2xl" }) => (
    <div
      className={`text-center bg-white/10 backdrop-blur-md 
      /* Ukuran Mobile */ px-3 py-5
      /* Ukuran Desktop */ sm:px-5 sm:py-5 sm:w-24 
      ${roundedClass} shadow-lg border border-yellow-300 transition-all
      ${isFinished ? "animate-pulse" : ""}`}
    >
      <h1 className="text-xl sm:text-2xl font-bold">{value}</h1>
      <p className="mt-1 sm:mt-2 text-[10px] sm:text-xs uppercase tracking-tighter sm:tracking-widest opacity-80">
        {label}
      </p>
    </div>
  );

  return (
    <div className="flex gap-2 sm:gap-4 justify-center items-center text-yellow-700 mt-8">
      <TimeUnit value={timeLeft.days} label="Days" roundedClass="rounded-xl" />
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <TimeUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

export default Countdown;
