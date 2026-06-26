import React from "react";
import { Calendar, PartyPopper, Clock, MapPin } from "lucide-react";

const EventDetails = () => {
  return (
    <div>
      <section id="event-section" data-aos="fade-up" className=" sm:px-5">
        <div className="premium-card mx-auto max-w-md p-4 sm:p-6">
          <h3 className="mb-5 text-center text-xl sm:text-2xl font-bold text-red-900">
            Detail Acara
          </h3>

          <div className="grid gap-4">
            {/* Tanggal */}
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-700 shadow">
                <Calendar size={20} className="sm:w-6 sm:h-6" />
              </div>

              <div>
                <p className="text-sm sm:text-base font-semibold text-gray-800">
                  Tanggal
                </p>
                <p className="text-sm sm:text-base text-gray-600">
                  Minggu, 5 Juli 2026
                </p>
              </div>
            </div>

            {/* Acara */}
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-700 shadow">
                <PartyPopper size={20} className="sm:w-6 sm:h-6" />
              </div>

              <div>
                <p className="text-sm sm:text-base font-semibold text-gray-800">
                  Acara
                </p>
                <p className="text-sm sm:text-base text-gray-600">Khitanan</p>
              </div>
            </div>

            {/* Waktu */}
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-700 shadow">
                <Clock size={20} className="sm:w-6 sm:h-6" />
              </div>

              <div>
                <p className="text-sm sm:text-base font-semibold text-gray-800">
                  Waktu
                </p>
                <p className="text-sm sm:text-base text-gray-600">
                  10.00 WIB - Selesai
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="ornament-divider">❋ ❋ ❋</div>

      {/* Lokasi */}
      <section className="sm:px-5 pb-10" data-aos="fade-right">
        <div className="premium-card mx-auto max-w-md p-4 sm:p-6">
          <h3 className="mb-4 flex items-center justify-center gap-2 text-center text-xl sm:text-2xl font-bold text-green-800">
            <MapPin size={22} />
            Lokasi Acara
          </h3>

          <p className="mb-4 text-center text-sm sm:text-base leading-7 text-gray-700">
            Jl. Rotan Rt06/03 Gg. H. Mandor Alim
            <br />
            Limo, Depok
          </p>

          {/* Google Maps Frame */}
          <div className="overflow-hidden rounded-2xl border-1 shadow-lg">
            <iframe
              title="Lokasi Acara"
              src="https://maps.google.com/maps?q=Limo%20Depok&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="h-52 sm:h-64 w-full"
              loading="lazy"
            />
          </div>

          <a
            href="https://maps.app.goo.gl/XjuHFi3i4RtXEj2U9?g_st=aw"
            target="_blank"
            rel="noreferrer"
            className="maps-btn mt-5 flex items-center justify-center gap-2 rounded-xl py-3 text-sm sm:text-base font-semibold text-white"
          >
            <MapPin size={16} />
            Lihat Lokasi di Maps
          </a>
        </div>
      </section>
    </div>
  );
};

export default EventDetails;
