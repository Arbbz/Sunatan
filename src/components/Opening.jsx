import React from "react";

const Opening = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-md px-5 py-10 text-center">
        <p className="mb-4 text-amber-500 text-3xl font-arabic tracking-normal leading-relaxed">
          بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
        </p>

        <div data-aos="zoom-in" className="relative mx-auto">
          <div className="absolute inset-0 rounded-full bg-yellow-200 blur-3xl opacity-50"></div>

          <img
            src="/family.jpg"
            alt="Family"
            className="family-frame relative z-10 mx-auto"
          />
        </div>

        <div className="mt-8 rounded-3xl border border-yellow-500 bg-gradient-to-r from-red-900 to-red-700 p-6 text-white shadow-2xl">
          <p className="text-lg tracking-widest uppercase">Undangan</p>

          <h1 className="elegant-title text-5xl font-bold">Khitan</h1>
        </div>

        <p className="mt-8 leading-8 text-gray-600">
          Dengan memohon rahmat dan ridho Allah SWT, kami mengundang
          Bapak/Ibu/Saudara/i untuk menghadiri acara khitan putra kami tercinta.
        </p>

        <div className="ornament-divider">❋ ❋ ❋</div>
      </div>
    </section>
  );
};

export default Opening;
