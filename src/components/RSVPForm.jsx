import React, { useState } from "react";
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCSe5IT7EAXzlvPW3B60_ZCAMLwaS5KqzY",
  authDomain: "live-comment-d217e.firebaseapp.com",
  projectId: "live-comment-d217e",
  storageBucket: "live-comment-d217e.appspot.com",
  messagingSenderId: "533677732830",
  appId: "1:533677732830:web:81121f19fa3c721a23e34f",
  measurementId: "G-1DKNJJJFEF",
  databaseURL: "https://live-comment-d217e-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const MailOpenIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21.2 8.4V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.4"></path>
    <polyline points="7.5 14.1 12 16.5 16.5 14.1"></polyline>
    <path d="M2 8.4c0-1.85 1.55-3.44 3.4-3.5A4.5 4.5 0 0 1 12 8c2.44 0 4.53-1.46 5.6-3.5l1.62-3.5A2.5 2.5 0 0 0 22 2.5"></path>
  </svg>
);

const RSVPForm = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const rsvpData = {
      name,
      message,
      timestamp: new Date().toISOString(),
    };

    // Firebase Aktif Kembali
    push(ref(database, "rsvp/"), rsvpData)
      .then(() => {
        setIsSubmitting(false);
        setSubmitStatus("success");
        setName("");
        setMessage("");
        setTimeout(() => setSubmitStatus(null), 5000);
      })
      .catch((error) => {
        console.error("Error saving data:", error);
        setIsSubmitting(false);
        setSubmitStatus("error");
      });
  };
  return (
    <section className="px-4 py-12 w-full flex justify-center items-center">
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-amber-100">
        <div className="bg-amber-50/50 py-8 px-6 text-center border-b border-amber-100">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 text-amber-600 rounded-full mb-4 shadow-inner">
            <MailOpenIcon />
          </div>
          <h3 className="text-3xl font-serif font-bold text-gold-500 tracking-wide">
            Ucapan & Doa
          </h3>
          <p className="text-yellow-00 mt-2 font-light italic">
            Berikan doa restu Anda untuk kedua mempelai
          </p>
        </div>

        <div className="p-8 sm:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="group">
              <label className="block text-sm font-semibold text-slate-700 mb-2 ml-1">
                Nama Perwakilan
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Masukkan nama Anda..."
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-700 outline-none focus:bg-white focus:border-amber-500"
                required
              />
            </div>

            <div className="group">
              <label className="block text-sm font-semibold text-slate-700 mb-2 ml-1">
                Pesan & Doa Restu
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="5"
                placeholder="Tuliskan harapan dan doa Anda..."
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-700 outline-none focus:bg-white focus:border-amber-500 resize-none"
                required
              ></textarea>
            </div>

            {/* Tombol Merah Solid (Pasti Muncul) */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 px-6 rounded-2xl font-bold text-white shadow-lg transition-all transform active:scale-95 
                ${isSubmitting ? "bg-gray-400" : "bg-yellow-700 hover:bg-red-600"}`}
            >
              {isSubmitting ? "Mengirim..." : "Kirim Doa Restu"}
            </button>
          </form>
          {/* ... status message tetap sama */}
        </div>
      </div>
    </section>
  );
};

export default RSVPForm;
