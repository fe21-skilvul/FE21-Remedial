import React from "react";
import BlogButton from "./BlogButton";
import { useState, useEffect } from "react";

const CardBlog = ({ blog }) => {
  const { image, title, artikel, date, author, id } = blog;
  const [truncatedText, setTruncatedText] = useState(artikel);

  useEffect(() => {
    const maxLength = 96;
    if (artikel.length > maxLength) {
      setTruncatedText(artikel.substring(0, maxLength) + "...");
    }
  }, []);

  return (
    // <div className="flex border-[1px] max-w-[1200px]">
    //   <img src={image} alt="" className="object-fill w-1/3" />
    //   <div className="m-6 flex flex-col gap-4 w-2/3">
    //     <h1 className="font-medium tracking-normal text-xl">{title}</h1>
    //     <p className="bg-indigo-600 w-fit px-1 text-xs font-medium text-white rounded-sm p-[1px]">
    //       {author}
    //     </p>
    //     <p>{truncatedText}</p>
    //     <p className="text-sm self-end">{date}</p>

    //   </div>
    // </div>
    <div className="w-full  py-[50px]">
      <div className="max-w-[1000px] mx-auto">
        <div className="grid   gap-8 px-4 text-black">
          <div className="bg-white rounded-xl overflow-hidden drop-shadow-md">
            <img className="h-56 w-full object-cover" src={image} />
            <div className="p-8">
              <h3 className="font-bold text-2xl my-1">{title}</h3>
              <p className="text-gray-600 text-xl">{truncatedText}</p>
              <BlogButton id={id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBlog;
