import React from "react";

export default function Remidial() {
  return (
    <div className="md:pl-5 md:py-28 flex md:justify-between md:items-center md:flex-row flex-col md:mx-40 py-10 px-2">
      <div className="md:w-full md:pr-20  pt-5">
        <a
          href=""
          className="p-5 border-2 text-black border-[#0F4229] rounded-3xl hover:bg-[#0F4229] hover:text-white"
        >
          Workshop
        </a>
        <h1 className="md:mt-10 md:text-6xl text-2xl font-bold pb-3 md:pb-0 md:pt-0 pt-10">
          Hello Siswa
        </h1>
        <h2 className="md:text-4xl text-xl font-semibold md:w-full md:mt-5">
          Memento mori ; pameran tunggal prajna puspa arum
        </h2>
        <p className="md:mt-10 md:text-lg text-sm">
          Proses refleksi Prajna (pelajar SMA Kelas 12), proses penciptaan karya
          melalui projek ke dalam media gambar dan lukis. Prajna akan
          mempresentasikan bagaimana ia menerjemahkan pelbagai masalah remaja
          yang ia hadapi dengan merefleksikannya ke dalam bentuk gambar,
          goresan, teks. memento mori caranya untuk mengingat hal-hal apapun
          yang ia temui dalam kehidupan sehari-hari.
        </p>
        <p className="md:pt-2 text-lg">
          Akan dipresentasikan di Guds Gallery pada tanggal 11 Februari 2023.
        </p>
        <p className="text-[#0F4229] font-bold md:pt-2 pt-2 text-lg">
          lihat Selengkapnya<i class="fas fa-long-arrow-alt-right"></i>
        </p>
      </div>
      <img src="src\assets\Capture.PNG" alt="" className="md:h-96 pt-5" />
    </div>
  );
}
