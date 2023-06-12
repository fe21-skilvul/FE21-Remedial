import React from 'react';
import CardBlog from '../components/CardBlog';
import { useState } from 'react';
import { useEffect } from 'react';

const Blog = () => {
  const [blogs, setBlogs] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://64527065a2860c9ed40c6783.mockapi.io/comments/');
        const jsonData = await response.json();
        setBlogs(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="">
      <div className="min-h-screen">
        <div className=" bg-zinc-100 ml-12 mt-0 pt-12 pb-20">
            <div className="bg-zinc-200 ml-14 py-20 pl-10 rounded-md">
            <h1 className="w-1/3 mb-4 text-2xl font-light text-gray-900 md:text-5xl md:tracking-tight md:leading-tight lg:text-5xl lg:tracking-tight lg:leading-tight dark:text-black">Tambah Wawasan Dengan Membaca Blog Kami</h1>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            <p className=" mb-8 text-lg font-extralight text-gray-900 lg:text-xl dark:text-black">Baca Blog dari Remedial untuk menambah wawasan kamu agar semakin kaya akan pengetahuan.</p>
          </div>
        </div>
        <div className="mt-16 mb-16 flex flex-col justify-center items-center">
          <div className="grid gap-8">{blogs && blogs.map((blog, index) => <CardBlog key={index} blog={blog} />)}</div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
