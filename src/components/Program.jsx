import React from "react";

function Program() {
  return (
    <div className="md:px-40 md:mb-10 md:py-24 px-5">
      <h1 className="md:text-4xl font-bold text-xl">Remedial Program</h1>
      <h2 className="text-right py-5">
        Lihat selengkapnya
        <i class="fas fa-chevron-right"></i>
        <i class="fas fa-chevron-right"></i>
      </h2>
      <div className="flex md:flex-row md:justify-between flex-col ">
        {/* awal item */}
        <div className="md:w-80 md:pb-3 shadow-md my-5 pb-5">
          <img src="src\assets\gambarbawah1.png" alt="bambar bawah" />
          <h2 className="text-xl font-bold md:py-3 md:px-2">Seni Lukis</h2>
          <p className="md:px-2">
            Seni lukis termasuk jenis seni rupa 2 dimensi yang biasa menggunakan
            media kanvas, kertas, papan, atau bidang tertentu yang dijadikan
            media ekspresi bagi pelukisnya
          </p>
        </div>
        {/* akhir item */}
        {/* awal item */}
        <div className="md:w-80 md:pb-3 shadow-md my-5 pb-5">
          <img src="src\assets\gambarbawah2.png" alt="bambar bawah" />
          <h2 className="text-xl font-bold md:py-3 md:px-2">
            Seni Tari Tradisional
          </h2>
          <p className="md:px-2">
            Suatu tarian yang berasal dari masyarakat suatu daerah yang sudah
            turun-temurun dan telah menjadi budaya masyarakat setempat. Pada
            gambar diatas merupakan tarian yang berasal dari daerah bali tarian
            tersebut dinamakan "Tarian Kecak".
          </p>
        </div>
        {/* akhir item */}
        {/* awal item */}
        <div className="md:w-80 md:pb-3 shadow-md my-5 pb-5">
          <img src="src\assets\gambarbawah3.png" alt="bambar bawah" />
          <h2 className="text-xl font-bold md:py-3 md:px-2">Seni Abstrak</h2>
          <p className="md:px-2">
            seni abstrak salah satu dari jenis kesenian kontemporer yang tidak
            menggambarkan suatu objek pada dunia nyata.
          </p>
        </div>
        {/* akhir item */}
      </div>
    </div>
  );
}
export default Program;
