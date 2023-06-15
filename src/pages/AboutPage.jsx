import React from "react";
import img from "../assets/userr.png";
import CardAbout from "../components/cardAbout";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { other_images } from "../utils/images";

function AboutPage() {
  const people = [
    {
      name: "San Prastiwa",
      role: "Front End ",
      imageUrl: "../src/assets/sanprofil.jpeg",
    },
    {
      name: "Ari Viki",
      role: "Front End",
      imageUrl: "../src/assets/ariprofil.jpg",
    },
    {
      name: "Chitra Agustina",
      role: "Front End",

      imageUrl: "../src/assets/citraprofil.jpeg",
    },
    // More people...
  ];
  return (
    <div>
      <Navbar />
      <div className="h-50% bg-white py-2 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet our Teams
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Perkenalkan Kami sebagai Developer Website Ini
            </p>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            <li>
              <div className="flex items-center gap-x-6">
                <img
                  className="h-16 w-16 rounded-full"
                  src={other_images.san}
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    San Prastiwa
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    Front End Web Developer
                  </p>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    Universitas Budi Luhur Jakarta
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-x-6">
                <img
                  className="h-16 w-16 rounded-full"
                  src={other_images.citra}
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    Chitra Agustina
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    Front End Web Developer
                  </p>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    Universitas Dian Nuswantoro
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-x-6">
                <img
                  className="h-16 w-16 rounded-full"
                  src={other_images.ari}
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    Ari Viki
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    Front End Web Developer
                  </p>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    Universitas Jember
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 pb-20 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">
              Tentang Remedial
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Serrum merupakan perkumpulan studi seni rupa dan pendidikan
              berbasis di Jakarta yang didirikan pada tahun 2006. Kata serrum
              berasal dari kata share dan room yang berarti “ruang berbagi”.
              Serrum berfokus pada isu pendidikan, sosial-politik dan perkotaan
              dengan pendekatan presentasi yang edukatif dan artistik. Kegiatan
              serrum meliputi proyek seni, pameran, lokakarya, diskusi dan
              propaganda kreatif. Medium karya yang digunakan meliputi video,
              mural, grafis, komik dan seni instalasi.
            </p>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="p-4 lg:w-1/2">
              <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  class="flex-shrink-0 rounded-lg w-20 h-20 object-cover object-center sm:mb-0 mb-4"
                  src={other_images.peoples}
                />
                <div class="flex-grow sm:pl-8">
                  <h2 class="title-font font-medium text-lg text-gray-900">
                    Pengajar
                  </h2>
                  <h3 class="text-gray-500 mb-3">UI Developer</h3>
                  <p class="mb-4">
                    Dalam kegiatan ini diisi oleh beberapa narasumber
                    profesional dibidangnya masing-masing, seperti seniman,
                    musisi dan lain sebagainya.
                  </p>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/2">
              <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  class="flex-shrink-0 rounded-lg w-20 h-20 object-cover object-center sm:mb-0 mb-4"
                  src={other_images.timer}
                />
                <div class="flex-grow sm:pl-8">
                  <h2 class="title-font font-medium text-lg text-gray-900">
                    Durasi
                  </h2>
                  <h3 class="text-gray-500 mb-3">Designer</h3>
                  <p class="mb-4">
                    Kegiatan ini akan diadakan selama 16 x pertemuan Februari -
                    Juni 2019. Dan akan dilakukan setiap hari Sabtu selama
                    kurang lebih 2 jam.
                  </p>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/2">
              <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  class="flex-shrink-0 rounded-lg w-20 h-20 object-cover object-center sm:mb-0 mb-4"
                  src={other_images.target}
                />
                <div class="flex-grow sm:pl-8">
                  <h2 class="title-font font-medium text-lg text-gray-900">
                    Target Peserta
                  </h2>
                  <h3 class="text-gray-500 mb-3">UI Developer</h3>
                  <p class="mb-4">
                    Murid Sekolah Menengah Atas (SMA) Jakarta, Depok, Bekasi,
                    Tangerang Selatan & Bogor, dalam kurun usia 16-18tahun.
                  </p>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/2">
              <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  class="flex-shrink-0 rounded-lg w-20 h-20 object-cover object-center sm:mb-0 mb-4"
                  src={other_images.book}
                />
                <div class="flex-grow sm:pl-8">
                  <h2 class="title-font font-medium text-lg text-gray-900">
                    Materi
                  </h2>
                  <h3 class="text-gray-500 mb-3">Designer</h3>
                  <p class="mb-4">
                    Remedial adalah cara Serrum untuk berkomunikasi dengan murid
                    SMA hari ini dengan metode seni rupa dan literasi. Dengan
                    proses berdiskusi, berkreasi dan berapresiasi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default AboutPage;
