import React from "react";
import { Calendar, PartyPopper, Clock, MapPin } from "lucide-react";

const EventDetails = () => {
  return (
    <div>
      <section id="event-section" data-aos="fade-up" className="px-5">
        <div className="premium-card mx-auto max-w-md p-6">
          <h3 className="mb-6 text-center text-2xl font-bold text-red-900">
            Detail Acara
          </h3>

          <div className="grid gap-5">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-100 text-red-700 shadow">
                <Calendar size={26} />
              </div>

              <div>
                <p className="font-semibold text-gray-800">Tanggal</p>

                <p className="text-gray-600">Minggu, 5 Juli 2026</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-100 text-red-700 shadow">
                <PartyPopper size={26} />
              </div>

              <div>
                <p className="font-semibold text-gray-800">Acara</p>

                <p className="text-gray-600">Khitanan</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-100 text-red-700 shadow">
                <Clock size={26} />
              </div>

              <div>
                <p className="font-semibold text-gray-800">Waktu</p>

                <p className="text-gray-600">10.00 WIB - Selesai</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="ornament-divider">❋ ❋ ❋</div>

      <section className="px-5 pb-10" data-aos="fade-right">
        <div className="premium-card mx-auto max-w-md p-6">
          <h3 className="mb-5 flex items-center justify-center gap-2 text-center text-2xl font-bold text-green-800">
            <MapPin size={24} />
            Lokasi Acara
          </h3>

          <p className="text-center leading-8 text-gray-700">
            Jl. Rotan Rt06/03 Gg. H. Mandor Alim
            <br />
            Limo, Depok
          </p>
          <iframe
            title="Lokasi Acara"
            src="https://maps.google.com/maps?q=Limo%20Depok&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="h-64 w-full border-0"
            loading="lazy"
          />
          <a
            href="https://maps.app.goo.gl/XjuHFi3i4RtXEj2U9?g_st=aw"
            target="_blank"
            rel="noreferrer"
            className="maps-btn mt-6 flex items-center justify-center gap-2 rounded-xl py-4 text-center font-semibold text-white"
          >
            <MapPin size={18} />
            Lihat Lokasi di Maps
          </a>
        </div>
      </section>
    </div>
  );
};

export default EventDetails;
