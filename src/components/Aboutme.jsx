import React from "react";

const Aboutme = () => {
  return (
    <section data-aos="fade-up" className="px-5 py-10 text-center">
      <div className="mx-auto max-w-md">
        <div className="rounded-3xl bg-gradient-to-r from-green-900 via-green-800 to-green-700 p-6 text-white shadow-2xl">
          <h2 className="uwais-name elegant-title l ">Uwais</h2>

          <p className="mt-3 text-2xl text-yellow-100">Atthafariz Anugerah</p>
        </div>

        <div className="mt-8">
          <img
            src="./uwais.jpg"
            className="mx-auto w-64 drop-shadow-2xl transition duration-500 hover:scale-105"
          />
        </div>
      </div>

      <div className="ornament-divider">❋ ❋ ❋</div>
    </section>
  );
};

export default Aboutme;
