import React, { useState, useRef, useEffect } from "react";
import Footer from "./components/Footer";
import EventDetails from "./components/EventDetails";
import Aboutme from "./components/Aboutme";
import CoverPage from "./components/CoverPage";
import Opening from "./components/Opening";

import AOS from "aos";
import "aos/dist/aos.css";

import "./App.css";

// Ikon Play dengan nama unik agar tidak bentrok
const FloatingPlayIcon = () => (
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

// Ikon Pause dengan nama unik agar tidak bentrok
const FloatingPauseIcon = () => (
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

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-in-out",
    });

    // Cleanup animasi scroll saat komponen ditutup/unmount
    return () => stopAutoScroll();
  }, []);

  // Fungsi untuk menjalankan scroll otomatis ke bawah secara perlahan
  const startAutoScroll = () => {
    setIsAutoScrolling(true);

    const scrollStep = () => {
      // Deteksi apakah scroll sudah mentok sampai ke dasar halaman web
      const isBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;

      if (!isBottom) {
        // Angka 0.6 mengontrol kecepatan jalannya scroll (makin kecil makin lambat)
        window.scrollBy(0, 0.6);
        scrollIntervalRef.current = requestAnimationFrame(scrollStep);
      } else {
        stopAutoScroll();
      }
    };

    scrollIntervalRef.current = requestAnimationFrame(scrollStep);
  };

  // Fungsi menghentikan scroll otomatis
  const stopAutoScroll = () => {
    setIsAutoScrolling(false);
    if (scrollIntervalRef.current) {
      cancelAnimationFrame(scrollIntervalRef.current);
    }
  };

  // Hentikan autoscroll jika mendeteksi interaksi/scroll manual dari pengguna
  const handleUserScroll = () => {
    if (isAutoScrolling) {
      stopAutoScroll();
    }
  };

  // Fungsi yang dipicu saat tombol buka undangan di CoverPage diklik
  const openInvitation = () => {
    setIsCoverPageOpen(false);

    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.log("Audio gagal diputar otomatis oleh browser:", err);
        });
    }

    // Beri jeda transisi buka halaman selama 600ms, baru jalankan autoscroll perlahan
    setTimeout(() => {
      AOS.refresh();
      startAutoScroll();
    }, 600);
  };

  // Fungsi kendali hidup/mati musik latar belakang
  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden bg-[#f8f4eb]"
      onTouchStart={handleUserScroll} // Deteksi usapan layar di HP
      onWheel={handleUserScroll} // Deteksi scroll wheel mouse di Laptop/PC
    >
      {/* Background Pattern */}
      <div className="islamic-pattern absolute inset-0 opacity-10"></div>

      {/* Floating Lantern */}
      <div className="lantern absolute left-5 top-10 z-0"></div>
      <div className="lantern absolute right-5 top-20 z-0"></div>

      {/* Konten Halaman: Cover / Isi Utama */}
      {isCoverPageOpen ? (
        <CoverPage openInvitation={openInvitation} />
      ) : (
        <div className="container mx-auto max-w-lg px-4 py-8 relative z-10">
          <div className="premium-card animate-open overflow-hidden">
            <main className="p-8">
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

              <section className="px-6 py-10 text-center" data-aos="fade-up">
                <p className="mx-auto max-w-md text-lg italic leading-8 text-gray-600">
                  Merupakan suatu kebahagiaan bagi kami apabila
                  Bapak/Ibu/Saudara/i berkenan hadir dan mendoakan putra kami
                  tercinta.
                </p>
              </section>
            </main>

            <Footer />
          </div>
        </div>
      )}

      {/* Audio Element */}
      <audio ref={audioRef} src="/audio/laskar.mp3" loop />

      {/* Floating Action Buttons */}
      {!isCoverPageOpen && (
        <div className="fixed bottom-5 left-5 right-5 z-50 flex justify-between items-center pointer-events-none">
          {/* Tombol Kontrol Autoscroll (Sisi Kiri Kaki Layar) */}
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

          {/* Tombol Kontrol Musik (Sisi Kanan Kaki Layar) */}
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
              {isPlaying ? <FloatingPauseIcon /> : <FloatingPlayIcon />}
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
