import React from "react";
import { useNavigate } from "react-router-dom";

const BlogButton = ({ id }) => {
  const navigate = useNavigate();
  const detail = () => {
    window.scrollTo(0, 0);
    navigate(`/blog/${id}`);
  };
  return (
    <div
      onClick={detail}
      className="w-full bg-indigo-600 rounded-md  px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline text-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      <a href="#" className=" ">
        Lihat Selengkapnya
      </a>
    </div>
  );
};

export default BlogButton;
