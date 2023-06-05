import React from "react";

export default function className() {
  return (
    <div className="flex flex-col justify-center items-center bg-[#d4d4d6] md:pt-10 pt-5 md:mx-40">
      <h1 className="text-center md:text-4xl font-bold text-xl">
        Pilihan Kelas Kelas
        <br /> yang Paling Diminati di 2023
      </h1>
      <div className=" flex md:flex-row flex-col md:my-5 ">
        {/* items kelas */}
        <div className="w-80 bg-[#b3eedc] md:mx-10 my-3">
          <img src="src\assets\gambar2.png" alt="" />
          <div className="p-2">
            <h1 className="font-bold">Abstrak</h1>
            <p className="py-2">
              Seni abstrak atau seni tanwujud adalah salah satu jenis kesenian
              kontemporer
            </p>
            <div className=" flex flex-col">
              <p className="py-1">
                <i class="fa fa-map-marker-alt "></i> Belajar online & offline
              </p>
              <p className="py-1">
                <i class="fa fa-clock "></i> Belajar Lebih Fleksible
              </p>
              <p className="py-1">
                <i class="fa fa-calendar-check "></i> Fulltime-{" "}
                <b>Senin s/d Jumat (WIB) Mulai pukul : 08:30 - 16:00</b>
              </p>
            </div>
            <div className="flex flex-row justify-between pt-5">
              <a
                className="p-2 border-2 border-red-500 rounded-xl bg-black text-white"
                href=""
              >
                Ikuti Kelas ini
              </a>
              <h2 className="font-bold">Rp 100.000</h2>
            </div>
          </div>
        </div>
        {/* alhir item */}
        {/* items kelas */}
        <div className="w-80 bg-[#b3eedc] md:mx-10 my-3 ">
          <img src="src\assets\gambar1.png" alt="" />
          <div className="p-2">
            <h1 className="font-bold">Seni Lukis</h1>
            <p className="py-2">
              Seni lukis adalah salah satu cabang dari seni rupa yang berfokus
              pada kegiatan melukis.
            </p>
            <div className=" flex flex-col">
              <p className="py-1">
                <i class="fa fa-map-marker-alt "></i> Belajar online & offline
              </p>
              <p className="py-1">
                <i class="fa fa-clock "></i> Belajar Lebih Fleksible
              </p>
              <p className="py-1">
                <i class="fa fa-calendar-check "></i> Fulltime-{" "}
                <b>Senin s/d Jumat (WIB) Mulai pukul : 08:30 - 16:00</b>
              </p>
            </div>
            <div className="flex flex-row justify-between pt-5">
              <a
                className="p-2 border-2 border-red-500 rounded-xl bg-black text-white"
                href=""
              >
                Ikuti Kelas ini
              </a>
              <h2 className="font-bold">Gratis</h2>
            </div>
          </div>
        </div>
        {/* alhir item */}
      </div>
    </div>
  );
}
