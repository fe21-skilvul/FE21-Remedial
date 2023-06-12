import React from "react";
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";
import styled from "styled-components";

const StarRating = ({ rating_star }) => {
  const stars = Array.from({ length: 5 }, (_, idx) => {
    const val = idx + 0.5;
    return (
      <div key={idx}>
        {rating_star >= idx + 1 ? (
          <BsStarFill />
        ) : rating_star >= val ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </div>
    );
  });

  return <div className="flex gap-x-1 my-1">{stars}</div>;
};

export default StarRating;
