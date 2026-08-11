import React, { useState } from "react";

const WeddingGift = () => {
  const [copied, setCopied] = useState(false);

  const accounts = [
    {
      bank: "BCA",
      accountName: "Nadya Tri Anggraeni A",
      accountNumber: "0120358308",
    },
  ];

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Gagal menyalin", err);
    }
  };

  return (
    <section className="bg-white p-6 shadow-xl relative">
      {/* Notification */}
      {copied && (
        <div
          className="
      fixed
      top-4
      left-1/2
      -translate-x-1/2
      sm:left-auto
      sm:right-5
      sm:translate-x-0
      bg-yellow-600
      text-white
      px-4
      py-3
      rounded-full
      shadow-lg
      z-50
      animate-bounce
      text-sm
      sm:text-base
      w-[90%]
      sm:w-auto
      text-center
      max-w-xs
    "
        >
          Nomor rekening tersalin ✓
        </div>
      )}

      {/* Title */}
      <h3 className="text-3xl text-center text-yellow-700 font-semibold mb-4">
        Wedding Gift
      </h3>

      <p className="text-center text-gray-600 text-sm leading-relaxed mb-8">
        Doa restu Anda merupakan hadiah terbaik bagi kami. Namun jika ingin
        memberikan tanda kasih, dapat melalui rekening di bawah ini.
      </p>

      {/* Rekening */}
      <div className="space-y-5">
        {accounts.map((acc, index) => (
          <div
            key={index}
            className="border border-blue-500 rounded-3xl p-6 text-center bg-blue-100"
          >
            {/* Bank */}
            <h4 className="text-4xl font-bold text-blue-700 mb-2">
              {acc.bank}
            </h4>

            {/* Nama */}
            <p className="text-gray-700 text-lg">{acc.accountName}</p>

            {/* Nomor Rekening */}
            <p className="text-2xl font-semibold text-blue-800 my-4 tracking-[3px]">
              {acc.accountNumber}
            </p>

            {/* Button */}
            <button
              onClick={() => copyToClipboard(acc.accountNumber)}
              className="bg-blue-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-full shadow-md transition duration-300 hover:scale-105"
            >
              Salin Nomor Rekening
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WeddingGift;
