import React, { useState, useRef, useEffect } from "react";
import Footer from "./components/Footer";
import EventDetails from "./components/EventDetails";
import Aboutme from "./components/Aboutme";
import CoverPage from "./components/CoverPage";
import Opening from "./components/Opening";
import GiftSection from "./components/Gift";

import AOS from "aos";
import "aos/dist/aos.css";

import "./App.css";

const PlayIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="6 3 20 12 6 21 6 3"></polygon>
  </svg>
);

const PauseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="14" y="4" width="4" height="16" rx="1"></rect>
    <rect x="6" y="4" width="4" height="16" rx="1"></rect>
  </svg>
);

const App = () => {
  const [isCoverPageOpen, setIsCoverPageOpen] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);

  const audioRef = useRef(null);
  const scrollIntervalRef = useRef(null);

  const pauseEverything = () => {
    // Pause musik
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }

    // Stop auto scroll
    stopAutoScroll();
  };
  useEffect(() => {
    const handleVisibilityChange = () => {
      // User pindah tab browser, minimize browser,
      // buka WA, Instagram, dll
      if (document.hidden) {
        pauseEverything();
      }
    };

    const handleWindowBlur = () => {
      pauseEverything();
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    window.addEventListener("blur", handleWindowBlur);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);

      window.removeEventListener("blur", handleWindowBlur);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-in-out",
    });

    // Cleanup scroll jika komponen unmount
    return () => stopAutoScroll();
  }, []);

  // Fungsi menggerakkan scroll perlahan
  const startAutoScroll = () => {
    setIsAutoScrolling(true);

    scrollIntervalRef.current = setInterval(() => {
      const isBottom =
        window.innerHeight + window.pageYOffset >=
        document.body.offsetHeight - 5;

      if (isBottom) {
        stopAutoScroll();
        return;
      }

      window.scrollTo({
        top: window.pageYOffset + 1,
        behavior: "auto",
      });
    }, 16);
  };

  const stopAutoScroll = () => {
    setIsAutoScrolling(false);

    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
    }
  };

  // Deteksi jika user melakukan scroll manual, hentikan autoscroll agar tidak tabrakan
  const handleUserScroll = () => {
    if (isAutoScrolling) {
      stopAutoScroll();
    }
  };

  const openInvitation = () => {
    setIsCoverPageOpen(false);

    if (audioRef.current) {
      audioRef.current.currentTime = 70;
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.log("Audio gagal diputar:", err);
        });
    }

    // Berikan jeda sedikit setelah animasi buka agar transisinya rapi, lalu mulai autoscroll
    setTimeout(() => {
      AOS.refresh();
      startAutoScroll();
    }, 600);
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.currentTime = 72;

      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden bg-white"
      onTouchStart={handleUserScroll} // Matikan autoscroll jika layar disentuh di HP
      onWheel={handleUserScroll} // Matikan autoscroll jika mouse di-scroll di Laptop
    >
      {/* Floating Lantern */}
      <div className="lantern absolute left-5 top-10 z-0"></div>
      <div className="lantern absolute right-5 top-20 z-0"></div>

      {/* Cover */}
      {isCoverPageOpen ? (
        <CoverPage openInvitation={openInvitation} />
      ) : (
        <div className="container mx-auto max-w-lg px-4 py-8 relative z-10">
          <div className="premium-card animate-open overflow-hidden">
            <main className="p-8">
              <div className="lantern absolute right-5 top-20 z-0"></div>
              <div data-aos="zoom-in">
                <Opening />
              </div>

              <div id="about-section" data-aos="fade-up">
                <Aboutme />
              </div>

              <div data-aos="fade-up">
                <EventDetails />
              </div>

              <div className="ornament-divider" data-aos="zoom-in">
                ❋ ❋ ❋
              </div>
              <div className="lantern absolute left-5 top-10 z-0"></div>
              <section className="px-3 py-10 text-center" data-aos="fade-up">
                <p className="mx-auto max-w-md text-lg italic leading-8 text-gray-600">
                  Merupakan suatu kebahagiaan bagi kami apabila
                  Bapak/Ibu/Saudara/i berkenan hadir dan mendoakan putra kami
                  tercinta.
                </p>
                <GiftSection />
              </section>
            </main>

            <Footer />
          </div>
        </div>
      )}

      {/* Audio */}
      <audio ref={audioRef} src="./audio/zain.mp3" loop />

      {/* Floating Action Buttons */}
      {!isCoverPageOpen && (
        <div className="fixed bottom-5 left-5 right-5 z-50 flex justify-between items-center pointer-events-none">
          {/* Tombol Autoscroll (Di Sebelah Kiri) */}
          <button
            onClick={isAutoScrolling ? stopAutoScroll : startAutoScroll}
            className={`
              pointer-events-auto
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              text-white
              shadow-xl
              transition-all
              duration-300
              hover:scale-110
              text-xs
              font-bold
              ${isAutoScrolling ? "bg-amber-600 animate-pulse" : "bg-gray-500"}
            `}
          >
            {isAutoScrolling ? "STOP" : "AUTO"}
          </button>

          {/* Floating Music Button (Di Sebelah Kanan) */}
          <button
            onClick={toggleMusic}
            className="
              pointer-events-auto
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              bg-gradient-to-r
              from-red-900
              to-red-700
              text-white
              shadow-xl
              transition-all
              duration-300
              hover:scale-110
            "
          >
            <span className="text-xl flex items-center justify-center">
              {isPlaying ? <PauseIcon /> : <PlayIcon />}
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
