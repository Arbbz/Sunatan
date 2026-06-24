import React from "react";

const CoverPage = ({ openInvitation }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        backgroundImage: "url('/bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 px-6 text-center text-white">
        <p className="mb-4 text-amber-500 text-3xl font-arabic tracking-normal leading-relaxed">
          بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
        </p>

        <img
          src="/uwais.jpg"
          alt="Uwais"
          className="
            mx-auto
            mb-6
            h-40
            w-40
            rounded-full
            border-4
            border-yellow-400
            object-cover
            shadow-2xl
          "
        />

        <p className="uppercase tracking-[4px] text-yellow-300">
          Undangan Sunatan
        </p>

        <h1 className="mt-4 text-5xl font-bold">Uwais</h1>

        <h2 className="mt-2 text-xl">Atthafariz Anugerah</h2>

        <div className="my-6 flex justify-center">
          <div className="h-[2px] w-32 bg-yellow-400"></div>
        </div>

        <p className="text-lg">Minggu, 5 Juli 2026</p>

        <button
          onClick={openInvitation}
          className="
            mt-10
            rounded-full
            bg-gradient-to-r
            from-yellow-500
            to-yellow-300
            px-8
            py-4
            font-semibold
            text-black
            shadow-xl
            transition
            hover:scale-105
          "
        >
          Buka Undangan
        </button>
      </div>
    </div>
  );
};

export default CoverPage;
