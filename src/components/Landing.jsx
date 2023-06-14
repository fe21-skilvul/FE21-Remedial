import React from "react";
import { other_images } from "../utils/images";

function Landing() {
  return (
    <div
      className="flex md:flex-row md:justify-evenly md:items-center px-10
        md:py-32 md:px-20 py-10 flex-col"
    >
      <img
        className="md:w-96
           w-60"
        src={other_images.landing}
        alt="Foto Personal"
      />
      <div className=" items-start pl-10">
        <h1 className="font-bold md:text-5xl md:pt-0 md:mb-5 pt-5">
          Kenapa Remedial ?
        </h1>
        <div className="flex flex-col ">
          <p className="max-w-2xl md:pb-10 md:text-lg pb-5 border-b-2 mt-5">
            <i className="fa fa-check-square "></i> Perkembangan seni rupa
            kontemporer dalam ruang lingkup pelajar.
          </p>
          <p className="max-w-2xl md:pb-10 md:text-lg pb-5 border-b-2 mt-5">
            <i class="fa fa-gift "></i> Bisa memiliki pengalaman berkarya
            melalui pendekatan artistik yang bervariasi.
          </p>
          <p className="max-w-2xl md:pb-10 md:text-lg pb-5 border-b-2 mt-5">
            <i class="fa fa-users "></i>Dengan pendekatan fotografi sebagai
            metode pencatatan (journaling) dan pendokumentasian.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
