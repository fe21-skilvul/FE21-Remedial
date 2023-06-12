import React from "react";
import { NavLink } from "react-router-dom";

export default function classNameName() {
  return (
    // <div classNameName="flex flex-col justify-center items-center bg-white md:pt-10 pt-5 md:mx-40">

    //   <div classNameName=" flex md:flex-row flex-col md:my-5 ">
    //     {/* items kelas */}
    //     <div classNameName="w-80 bg-white md:mx-10 my-3">
    //       <img src="src\assets\gambar2.png" alt="" />
    //       <div classNameName="p-2">
    //         <h1 classNameName="font-bold">Seni Tari</h1>
    //         <p classNameName="py-2">
    //           Seni abstrak atau seni tanwujud adalah salah satu jenis kesenian
    //           kontemporer
    //         </p>
    //         <div classNameName=" flex flex-col">
    //           <p classNameName="py-1">
    //             <i className="fa fa-map-marker-alt "></i> Belajar online & offline
    //           </p>
    //           <p classNameName="py-1">
    //             <i className="fa fa-clock "></i> Belajar Lebih Fleksible
    //           </p>
    //           <p classNameName="py-1">
    //             <i className="fa fa-calendar-check "></i> Fulltime-{" "}
    //             <b>Senin s/d Jumat (WIB) Mulai pukul : 08:30 - 16:00</b>
    //           </p>
    //         </div>
    //         <div classNameName="flex flex-row justify-between pt-5">
    //           <NavLink
    //             to="/courselist"
    //             classNameName="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    //           >
    //             Lihat Selengkapnya
    //           </NavLink>
    //           <h2 classNameName="font-bold">Rp 100.000</h2>
    //         </div>
    //       </div>
    //     </div>
    //     {/* alhir item */}
    //     {/* items kelas */}
    //     <div classNameName="w-80 bg-gray md:mx-10 my-3 ">
    //       <img src="src\assets\gambar1.png" alt="" />
    //       <div classNameName="p-2">
    //         <h1 classNameName="font-bold">Seni Lukis</h1>
    //         <p classNameName="py-2">
    //           Seni lukis adalah cabang dari seni rupa yang berfokus pada
    //           kegiatan melukis.
    //         </p>
    //         <div classNameName=" flex flex-col">
    //           <p classNameName="py-1">
    //             <i className="fa fa-map-marker-alt "></i> Belajar online & offline
    //           </p>
    //           <p classNameName="py-1">
    //             <i className="fa fa-clock "></i> Belajar Lebih Fleksible
    //           </p>
    //           <p classNameName="py-1">
    //             <i className="fa fa-calendar-check "></i> Fulltime-{" "}
    //             <b>Senin s/d Jumat (WIB) Mulai pukul : 08:30 - 16:00</b>
    //           </p>
    //         </div>
    //         <div classNameName="flex flex-row justify-between pt-5">
    //           <a
    //             href="#"
    //             classNameName="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    //           >
    //             Lihat Selengkapnya
    //           </a>
    //           <h2 classNameName="font-bold">Gratis</h2>
    //         </div>
    //       </div>
    //     </div>
    //     {/* alhir item */}
    //   </div>
    // </div>
    <section className="text-dark-600 body-font overflow-hidden">
      <h1 className="text-center md:text-4xl font-bold text-xl">
        Pilihan Kelas Kelas
        <br /> yang Paling Diminati di 2023
      </h1>
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              Seni Lukis
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
              Animated Night Hill Illustrations
            </h1>
            <div className="flex mb-4">
              <a className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">
                Description
              </a>
            </div>
            <p className="leading-relaxed mb-4">
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric
              sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo
              juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
              seitan poutine tumeric. Gastropub blue bottle austin listicle
              pour-over, neutra jean.
            </p>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Color</span>
              <span className="ml-auto text-gray-900">Blue</span>
            </div>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Size</span>
              <span className="ml-auto text-gray-900">Medium</span>
            </div>
            <div className="flex border-t border-b mb-6 border-gray-200 py-2">
              <span className="text-gray-500">Quantity</span>
              <span className="ml-auto text-gray-900">4</span>
            </div>
            <div className="flex">
              <NavLink
                to="/courselist"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Lihat Selengkapnya
              </NavLink>
            </div>
          </div>
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="src\assets\kelaslukis4.png"
          />
        </div>
      </div>
    </section>
  );
}
