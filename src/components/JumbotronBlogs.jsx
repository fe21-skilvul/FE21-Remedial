import React from "react";

function JumbotronBlogs() {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
            Tambah Wawasan Dengan Membaca Blog Kami
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            Baca Blog dari Remedial untuk menambah wawasan kamu agar semakin
            kaya akan pengetahuan.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"></div>
        </div>
      </section>
    </div>
  );
}

export default JumbotronBlogs;
