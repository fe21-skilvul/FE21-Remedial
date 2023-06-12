import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const DetailBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://64527065a2860c9ed40c6783.mockapi.io/comments/${id}`
        );
        const jsonData = await response.json();
        setBlog(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [blog]);
  return (
    <div>
      <Navbar />
      {/* <div className="min-h-screen pt-16 pb-14 ml-24 mr-[20rem]">
        <div className="container border-2 p-8">
          <div className="flex justify-center">
            <h1 className="font-semibold text-xl tracking-wide">
              {blog && blog.title}
            </h1>
          </div>
          <div className="mt-4 mb-16">
            <p className="bg-indigo-600 rounded-md w-fit text-base font-medium text-white py-2 px-3">
              {blog && blog.author}
            </p>
            <h6 className="my-3 font-semibold text-lg">{blog && blog.date}</h6>
            <img
              src={blog && blog.image}
              alt={blog && blog.title}
              className="w-full h-[500px] object-fill"
            />
          </div>
          <p>{blog && blog.artikel}</p>
        </div>
      </div> */}
      <div className="w-full pb-10 bg-[#f9f9f9]">
        <div className="max-w-[1240px] mx-auto">
          <div
            className="grid lg:grid-cols-1 md:grid-cols-2 sm:grid-cols-1 ss:grid-cols-1
            md:gap-x-8 sm:gap-y-8 ss:gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black"
          >
            <div className="col-span-2 ">
              <img
                className="h-56 w-full object-cover"
                src={blog && blog.image}
              />

              <h1 className="font-bold text-2xl my-1 pt-5">
                {blog && blog.title}
              </h1>
              <p className="text-justify text-gray-900 font-medium">
                {blog && blog.artikel}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailBlog;
