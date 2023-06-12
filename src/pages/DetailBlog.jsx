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
      <div className="min-h-screen pt-16 pb-14 ml-24 mr-[20rem]">
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
      </div>
      <Footer />
    </div>
  );
};

export default DetailBlog;
