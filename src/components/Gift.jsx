import React, { useState } from "react";
import { Gift, Copy, Check } from "lucide-react";

const GiftSection = () => {
  const [copied, setCopied] = useState(false);

  const copyRekening = () => {
    navigator.clipboard.writeText("5015206397");

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <section className=" py-10">
      <div className="premium-card mx-auto max-w-md p-6 text-center">
        <div className="mb-4 flex justify-center">
          <div className="rounded-full bg-yellow-100 p-4">
            <Gift size={32} className="text-yellow-600" />
          </div>
        </div>

        <h2 className="elegant-title text-3xl font-bold text-red-900">
          Kirim Hadiah
        </h2>

        <p className="mt-4 text-gray-600 leading-7">
          Doa restu Anda merupakan hadiah terbaik bagi kami. Namun apabila ingin
          memberikan tanda kasih, dapat melalui rekening berikut:
        </p>

        <div className="gift-glow mt-6 rounded-2xl border border-yellow-200 bg-gradient-to-r from-yellow-50 to-yellow-100 p-5">
          <p className="text-sm text-gray-500">Bank BCA</p>

          <h3 className="mt-2 text-3xl font-bold tracking-wider text-red-900">
            5015206397
          </h3>

          <p className="mt-2 font-semibold text-gray-700">a/n Yusuf Anugerah</p>
        </div>

        <button
          onClick={copyRekening}
          className="
            mt-5
            inline-flex
            items-center
            gap-2
            rounded-xl
            bg-gradient-to-r
            from-red-900
            to-red-700
            px-5
            py-3
            font-semibold
            text-white
            shadow-lg
            transition
            hover:scale-105
          "
        >
          {copied ? (
            <>
              <Check size={18} />
              Berhasil Disalin
            </>
          ) : (
            <>
              <Copy size={18} />
              Salin Nomor Rekening
            </>
          )}
        </button>
      </div>
    </section>
  );
};

export default GiftSection;
