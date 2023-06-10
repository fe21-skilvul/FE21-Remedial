import React from 'react';
import pict from '../assets/kelaslukis1.png';
import BlogButton from './BlogButton';
import { useState, useEffect } from 'react';

const CardBlog = ({ blog }) => {
  const { image, title, artikel, date, author, id } = blog;
  const [truncatedText, setTruncatedText] = useState(artikel);

  useEffect(() => {
    const maxLength = 96;
    if (artikel.length > maxLength) {
      setTruncatedText(artikel.substring(0, maxLength) + '...');
    }
  }, []);

  return (
    <div className="flex border-[1px] max-w-[1200px]">
      <img src={image} alt="" className="object-fill w-1/3" />
      <div className="m-6 flex flex-col gap-4 w-2/3">
        <h1 className="font-medium tracking-normal text-xl">{title}</h1>
        <p className="bg-green-600 w-fit px-1 text-xs font-medium text-white rounded-sm p-[1px]">{author}</p>
        <p>{truncatedText}</p>
        <p className="text-sm self-end">{date}</p>
        <BlogButton id={id} />
      </div>
    </div>
  );
};

export default CardBlog;
