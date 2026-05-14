import React from "react";
const CalendarIcon = () => (
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
    className="lucide lucide-calendar"
  >
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
    <line x1="16" x2="16" y1="2" y2="6"></line>
    <line x1="8" x2="8" y1="2" y2="6"></line>
    <line x1="3" x2="21" y1="10" y2="10"></line>
  </svg>
);

const MapPinIcon = () => (
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
    className="lucide lucide-map-pin"
  >
    <path d="M12 17.5l-5-5a7 7 0 1 1 10 0l-5 5z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const EventDetails = () => {
  return (
    <section
      className=" p-6 px-20 shadow-inner animate-fade-in-up event-details-section "
      style={{
        backgroundImage: "url('bg2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h3 className="text-4xl font-playfair font-bold text-center text-maroon-500 mb-6 mt-10">
        Detail Acara
      </h3>
      <div className="space-y-6 mb-10">
        <div className="flex flex-col items-center text-center rounded-t-full border-t border-x border-maroon-500/20 p-6 shadow-lg bg-white">
          <span
            className="text-gold-500 text-3xl drop-shadow-sm mt-10"
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontWeight: 400,
            }}
          >
            Akad Nikah
          </span>
          <h4
            className="font-semibold text-xl text-maroon-500 mb-1 mt-2"
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontWeight: 400,
            }}
          >
            Sabtu, 06 Juni 2026
          </h4>
          <p
            className="text-sm font-medium text-maroon-500"
            style={{
              fontFamily: "'Allura', cursive",
              fontWeight: 400,
            }}
          >
            Pukul 08.00 - 10.00 WIB
          </p>
          <div className="mt-4 text-center">
            <a
              href="https://www.google.com/maps/place/6%C2%B009'27.8%22S+106%C2%B048'47.3%22E/@-6.1577288,106.8105727,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm px-6 py-2 rounded-full bg-yellow-600 text-white font-medium shadow-md transition-all duration-300 hover:bg-yellow-700 hover:scale-105"
            >
              Maps Lokasi Acara
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center text-center rounded-b-full border-t border-x border-maroon-500/20 p-6 shadow-lg bg-white ">
          <span
            className="text-gold-500 text-3xl drop-shadow-sm"
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontWeight: 400,
            }}
          >
            Resepsi
          </span>
          <h4
            className="font-semibold text-xl text-maroon-500 mb-1 mt-2"
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontWeight: 400,
            }}
          >
            Sabtu, 06 Juni 2026
          </h4>
          <p
            className="text-sm font-medium text-maroon-500"
            style={{
              fontFamily: "'Allura', cursive",
              fontWeight: 400,
            }}
          >
            Pukul 10.00 - 17.00 WIB
          </p>
          <div className="mt-4 text-center  mb-10">
            <a
              href="https://www.google.com/maps/place/6%C2%B009'27.8%22S+106%C2%B048'47.3%22E/@-6.1577288,106.8105727,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm px-6 py-2 rounded-full bg-yellow-600 text-white font-medium shadow-md transition-all duration-300 hover:bg-yellow-700 hover:scale-105"
            >
              Maps Lokasi Acara
            </a>
          </div>
        </div>
        <div
          className="flex flex-col items-center text-center gap-2"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          <h1 className="text-2xl font-bold text-yellow-700">
            Alamat Akad & Resepsi
          </h1>

          <p className="text-gray-700 font-medium max-w-md">
            Jl. Thalib II No.43 RT 15/RW 5, Krukut, Kec. Taman Sari, Jakarta
            Barat
          </p>
        </div>
        {/* Peta Google (Link hanya satu) */}
        <div className="mt-8 shadow-2xl ">
          <iframe
            src="https://www.google.com/maps?q=-6.1577288,106.8131476&hl=id&z=17&output=embed"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
