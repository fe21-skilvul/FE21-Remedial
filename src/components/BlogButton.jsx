import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlogButton = ({ id }) => {
  const navigate = useNavigate();
  const detail = () => {
    window.scrollTo(0, 0);
    navigate(`/blog/${id}`);
  };
  return (
    <div className="w-full bg-green-600 rounded-md">
      <button className="w-full text-white py-[6px]" onClick={detail}>
        Lihat Selengkapnya
      </button>
    </div>
  );
};

export default BlogButton;
