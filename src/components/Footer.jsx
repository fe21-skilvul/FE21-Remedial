
import React from "react";

function Footer() {
  return (
    <footer className="bg-black flex md:flex-row md:justify-around flex-col px-10 py-16 md:pl-40 md:pr-60 ">
      <div className="flex flex-col my-3">
        <h1 className="text-white text-2xl font-bold">Remidial</h1>
        <p className="md:w-80 md:pt-5 text-white font-semibold  text-lg">
          Remedial merupakan kegiatan yang akan Serrum lakukan selama 1 tahun di
          2019. Dengan metode saling silang informasi yang menghasilkan
          pengetahuan dan pendekatan seni dan literasi. Program ini gratis.
        </p>
        <div className="flex justify-between md:w-40 md:pt-5 ">
          <a class="btn btn-square text-white rounded-circle me-2" href="">
            <i class="fab fa-discord"></i>
          </a>
          <a class="btn btn-square text-white rounded-circle me-2" href="">
            <i class="fab fa-instagram"></i>
          </a>
          <a class="btn btn-square text-white rounded-circle me-2" href="">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a class="btn btn-square text-white rounded-circle me-2" href="">
            <i class="fab fa-twitter"></i>
          </a>
        </div>
      </div>
      <div className="my-3">
        <h1 className="text-white text-2xl font-bold">Remedial</h1>
        <div className="md:pt-5">
          <p className="text-white  text-lg">Remedial Offline</p>
          <p className="text-white  text-lg">Remedial Online</p>
          <p className="text-white  text-lg">Workshop</p>
        </div>
      </div>
      <div className="my-3">
        <h1 className="text-white text-2xl font-bold">Program</h1>
        <div className="md:pt-5">
          <p className="text-white  text-lg">Hello Siswa</p>
          <p className="text-white  text-lg">Pena Siswa</p>
          <p className="text-white  text-lg">Konsultasi Seni Rupa</p>
        </div>
      </div>
      <div className="md:pl-20 my-3">
        <h1 className="text-white text-2xl font-bold">About</h1>
        <div className="md:pt-5">
          <p className="text-white text-lg">Community</p>
          <p className="text-white text-lg">Designers</p>
          <p className="text-white text-lg">Support</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
=======
import React from "react";
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-white mx-200 w-100 -lg shadow dark:bg-gray-900 ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <NavLink className="mr-4 hover:underline md:mr-6" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Flowbite™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;

