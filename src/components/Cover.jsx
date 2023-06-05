import React from "react";

function Cover() {
  return (
    <div className="bg-cover md:bg-no-repeat md:bg-fixed md:bg-cover md:w-full md:h-screen h-96 text-center flex flex-col justify-center items-center">
      <h1 className="text-white font-bold md:text-4xl text-2xl pb-10">
        Remidial
        <br />
        Kembangkan Pengetahuan Dan Belajar Dari
        <br />
        Mentor Terbaik
      </h1>
      <a
        className=" md:mt-16 md:p-3 p-2 text-white border-2 rounded-3xl border-white hover:bg-white hover:text-black"
        href=""
      >
        Saya ingin belajar sekarang!
      </a>
    </div>
  );
}

export default Cover;
