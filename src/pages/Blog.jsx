import React from "react";
import CardBlog from "../components/CardBlog";
import { useState } from "react";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JumbotronBlogs from "../components/JumbotronBlogs";

const Blog = () => {
  const [blogs, setBlogs] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://64527065a2860c9ed40c6783.mockapi.io/comments/"
        );
        const jsonData = await response.json();
        setBlogs(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="">
      <Navbar />
      <div className="min-h-screen">
        <JumbotronBlogs />
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5">
            {blogs &&
              blogs.map((blog, index) => <CardBlog key={index} blog={blog} />)}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
