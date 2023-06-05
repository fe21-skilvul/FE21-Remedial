import React from "react";

function Ratings() {
  return (
    <div className="flex flex-col justify-center items-center pt-5 md:py-24">
      <h1 className="md:text-3xl text-lg font-bold">Remedial Alumni</h1>
      <h2 className="text-center md:text-2xl text-sm font-semibold md:mb-10 mb-10">
        Berikut kata alumni setelah mengikuti di program yang selenggarakan oleh
        Remedial
      </h2>
      <div className="bg-[#343a40] flex flex-col md:flex-row justify-between md:px-10 md:py-20  md:mx-40 ">
        {/*awal item */}
        <div className="bg-white md:w-96 rounded-xl p-3 mx-2 flex my-3">
          <img
            src="src\assets\test2.png"
            alt="gambar profil"
            className="h-20"
          />
          <p className="pl-3">
            “Belajar di Remedial sangat menambah wawasan dan menyenangkan.
            Bertemu dengan facil yang insightful dan komunikatif”
          </p>
        </div>
        {/*akhir item */}
        {/*awal item */}
        <div className="bg-white md:w-96 rounded-xl p-3 mx-2 flex  my-3">
          <img
            src="src\assets\test1.png"
            alt="gambar profil"
            className="h-20"
          />
          <p className="pl-3">
            “Senang bisa menjadi peserta dari Remidial , banyak ilmu yang
            diperoleh, menantang tetapi enjoy karena mentor yang pengertian juga
            menyenangkan.”
          </p>
        </div>
        {/*akhir item */} {/*awal item */}
        <div className="bg-white md:w-96 rounded-xl p-3 mx-2 flex  my-3">
          <img
            src="src\assets\test3.png"
            alt="gambar profil"
            className="h-20"
          />
          <p className="pl-3">
            “Program Remidial telah memberikan banyak sekali ilmu soal
            berkesenian dan penciptaan karya seni rupa sebagai sebuah instrumen
            efektif untuk merespon berbagai macam issue kontemporer. ”
          </p>
        </div>
        {/*akhir item */}
      </div>
    </div>
  );
}

export default Ratings;
