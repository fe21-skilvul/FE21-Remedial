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
