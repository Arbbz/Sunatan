import React, { useRef, useState, useEffect } from "react";
import Countdown from "./components/Countdown";
import EventDetails from "./components/EventDetails";
import WeddingGift from "./components/WeddingGift";
import LiveCommentCard from "./components/LiveComment";
import RSVPForm from "./components/RSVPForm";
import CoupleBio from "./components/CoupleBio";
import CoverPage from "./components/CoverPage";

const PlayIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M8 5v14l11-7z" />
  </svg>
);

const PauseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
  </svg>
);

const ScrollIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-1-7.414V7h2v5.586l2.707 2.707-1.414 1.414L12 13.414l-2.293 2.293-1.414-1.414L11 10.586z" />
  </svg>
);

const Test = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [copyMessage, setCopyMessage] = useState("");
  const [isCoverPageOpen, setIsCoverPageOpen] = useState(true);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);

  const audioRef = useRef(null);
  const scrollIntervalRef = useRef(null);
  const scrollSpeedRef = useRef(1); // px per tick

  // Auto scroll logic
  const startAutoScroll = () => {
    if (scrollIntervalRef.current) return;
    scrollIntervalRef.current = setInterval(() => {
      window.scrollBy({ top: scrollSpeedRef.current, behavior: "auto" });

      // Stop at bottom of page
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 10;
      if (nearBottom) {
        stopAutoScroll();
      }
    }, 16); // ~60fps
  };

  const stopAutoScroll = () => {
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
      scrollIntervalRef.current = null;
    }
    setIsAutoScrolling(false);
  };

  const toggleAutoScroll = () => {
    if (isAutoScrolling) {
      stopAutoScroll();
    } else {
      setIsAutoScrolling(true);
      startAutoScroll();
    }
  };

  // Stop auto scroll when user manually scrolls
  useEffect(() => {
    const handleUserScroll = () => {
      if (isAutoScrolling) {
        stopAutoScroll();
      }
    };
    window.addEventListener("wheel", handleUserScroll);
    window.addEventListener("touchmove", handleUserScroll);
    return () => {
      window.removeEventListener("wheel", handleUserScroll);
      window.removeEventListener("touchmove", handleUserScroll);
    };
  }, [isAutoScrolling]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (scrollIntervalRef.current) clearInterval(scrollIntervalRef.current);
    };
  }, []);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopyMessage("Nomor rekening berhasil disalin!");
    setTimeout(() => setCopyMessage(""), 3000);
  };

  const openInvitation = () => {
    setIsCoverPageOpen(false);
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.warn("Audio gagal diputar:", err.message));
    }
    // Start auto scroll shortly after opening
    setTimeout(() => {
      setIsAutoScrolling(true);
      startAutoScroll();
    }, 1500);
  };

  return (
    <div className="container mx-auto px-0 max-w-lg">
      {isCoverPageOpen ? (
        <CoverPage openInvitation={openInvitation} />
      ) : (
        <>
          <div
            className="sticky top-0 h-screen flex flex-col items-center justify-center mb-32"
            style={{
              backgroundImage: "url('bg1.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="text-center px-3">
              <div className="relative inline-block mt-6 animate-scale-in">
                <img
                  src="Foto1.jpeg"
                  className="w-64 h-64 rounded-full object-cover mx-auto mb-4 shadow-lg border-4 border-gold-500"
                />
                <div className="relative z-10">
                  <h3 className="">Wedding Invitation</h3>
                  <h2 className="text-5xl md:text-5xl font-playfair font-bold text-maroon-600 leading-tight header-content">
                    Nadya & Febri
                  </h2>
                </div>
              </div>
              <Countdown />
            </div>
          </div>

          <div
            className="sticky top-0 flex flex-col items-center justify-center"
            style={{
              backgroundImage: "url('bg1.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <CoupleBio />
            <div className="min-h-screen flex flex-col items-center justify-center">
              <EventDetails />
            </div>
            <WeddingGift />
            <RSVPForm />
            <LiveCommentCard />
            <div
              className="w-full min-h-screen flex flex-col items-center justify-end pb-20"
              style={{
                backgroundImage: "url('bg1.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="text-center">
                <div className="relative inline-block animate-scale-in">
                  <img src="Foto1.jpeg" className="mx-auto mb-6 shadow-xl" />
                  <div className="relative z-10 space-y-4">
                    <h2
                      className="text-4xl text-maroon-600"
                      style={{ fontFamily: "'Allura', cursive" }}
                    >
                      See You On Our Big Day
                    </h2>
                    <p className="text-sm md:text-base text-gray-700 max-w-md mx-auto leading-relaxed">
                      Merupakan suatu kehormatan dan kebahagiaan bagi kami
                      apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan
                      doa restu untuk pernikahan kami.
                    </p>
                    <h3 className="text-2xl md:text-4xl font-semibold text-[#b59b72]">
                      Nadya & Febri
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Music toggle button */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-4 right-4 z-50 p-3 bg-maroon-600 text-white rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
        aria-label={isPlaying ? "Jeda Musik" : "Putar Musik"}
      >
        <span className="text-xl">
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </span>
      </button>

      {/* Auto scroll toggle button */}
      {!isCoverPageOpen && (
        <button
          onClick={toggleAutoScroll}
          className={`fixed bottom-4 left-4 z-50 p-3 text-white rounded-full shadow-lg transition-transform duration-300 hover:scale-110 ${
            isAutoScrolling ? "bg-green-600" : "bg-gray-500"
          }`}
          aria-label={
            isAutoScrolling ? "Stop Auto Scroll" : "Start Auto Scroll"
          }
        >
          <span className="text-xl">
            {isAutoScrolling ? <PauseIcon /> : <ScrollIcon />}
          </span>
        </button>
      )}

      <audio ref={audioRef} src="audio/perfect.mp3" loop />
    </div>
  );
};

export default Test;
