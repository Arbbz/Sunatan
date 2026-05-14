import React from "react";

const CoupleBio = () => {
  return (
    <section className="bg-[#f7f5f2] p-6 shadow-inner w-full overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-8">
        <h3
          className="text-5xl text-[#b59b72] mb-4"
          style={{ fontFamily: "'Allura', cursive" }}
        >
          Bride & Groom
        </h3>

        <p className="text-sm text-gray-600 leading-relaxed max-w-sm mx-auto">
          Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan
          pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu merasa
          tenteram kepadanya.
        </p>
        <p className="text-sm font-bold text-gray-600 leading-relaxed max-w-sm mx-auto">
          - Ar-Rum · Ayat 21 -
        </p>
      </div>

      {/* ================= BRIDE ================= */}
      <div className="max-w-5xl mx-auto flex flex-row items-center justify-center gap-5 mb-10">
        {/* Text */}
        <div className="w-[40%] text-right">
          <h3
            className="text-3xl font-bold md:text-5xl text-[#b59b72] mb-2 whitespace-nowrap"
            style={{ fontFamily: "'Allura', cursive" }}
          >
            The Bride
          </h3>
          <h3
            className="text-2xl md:text-5xl text-[#b59b72] mb-2"
            style={{ fontFamily: "'Allura', cursive" }}
          >
            Nadya
          </h3>

          <h4 className="text-sm md:text-xl font-semibold text-[#2d2d2d]">
            Nadya Tri Anggraeni
          </h4>

          <div className="w-16 md:w-24 h-[2px] bg-[#b59b72] mx-auto my-3" />

          <p className="text-gray-700 leading-6 text-xs md:text-base">
            Putri Dari
            <br />
            Alm. Bapak Cecep Anggawinata
            <br />& Ibu Rosiah
          </p>

          <div className="w-16 md:w-24 h-[2px] bg-[#b59b72] mx-auto my-3" />

          <div className="mt-4 mb-10">
            <a
              href="https://www.instagram.com/anggawinata0601/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-6 py-2 rounded-md bg-yellow-600 text-white font-medium shadow-md transition-all duration-300 hover:bg-yellow-700 hover:scale-105"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="relative w-[60%]">
          {/* Text Above */}

          {/* Rounded Top */}
          <div className="rounded-t-full overflow-hidden shadow-2xl">
            <img
              src="nadya.jpeg"
              alt="Nadya"
              className="w-full h-[280px] md:h-[500px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* ================= GROOM ================= */}
      <div className="max-w-5xl mx-auto flex flex-row items-center justify-center gap-5">
        {/* Image */}
        <div className="relative w-[60%]">
          {/* Rounded Top */}
          <div className="rounded-t-full overflow-hidden shadow-2xl">
            <img
              src="febri.jpeg"
              alt="Febri"
              className="w-full h-[280px] md:h-[500px] object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div className="w-[40%] text-center">
          <h3
            className="text-3xl font-bold md:text-5xl text-[#b59b72] mb-2 whitespace-nowrap"
            style={{ fontFamily: "'Allura', cursive" }}
          >
            The Bride
          </h3>
          <h3
            className="text-3xl md:text-5xl text-[#b59b72] mb-2"
            style={{ fontFamily: "'Allura', cursive" }}
          >
            Febri
          </h3>

          <h4 className="text-sm md:text-xl font-semibold text-[#2d2d2d]">
            Febrianto Iswahyudi Sukarno
          </h4>

          <div className="w-16 md:w-24 h-[2px] bg-[#b59b72] mx-auto my-3" />

          <p className="text-gray-700 leading-6 text-xs md:text-base">
            Putra Dari
            <br />
            Bapak Sukimin
            <br />& Ibu Samiyah
          </p>

          <div className="w-16 md:w-24 h-[2px] bg-[#b59b72] mx-auto my-3" />

          <div className="mt-4 mb-10">
            <a
              href="https://www.instagram.com/anggawinata0601/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-6 py-2 rounded-md bg-yellow-600 text-white font-medium shadow-md transition-all duration-300 hover:bg-yellow-700 hover:scale-105"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoupleBio;
