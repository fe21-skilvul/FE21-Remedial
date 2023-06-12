import React from "react";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";
import { useCartContext } from "../context/cart_context";

const Course = (props) => {
  const {
    id,
    image,
    course_name,
    creator,
    actual_price,
    discounted_price,
    rating_count,
    rating_star,
    category,
  } = props;
  const { addToCart } = useCartContext();

  return (
    <div className="bg-white shadow-1 p-3 rounded-lg rounded-tl-[120px] w-full max-w-[325px] mx-auto cursor-pointer hover:shadow-2xl transition">
      <img className="mb-8 " src={image} alt={course_name} />
      <div className="mb-4 flex gap-x-2 text-sm">
        <div className="text-lg font-semibold max-w-[260px]">{course_name}</div>
      </div>
      <div className="flex gap-x-4 my-4">
        <div className="flex items-center text-yellow-300 gap-1">
          <span className="text-yellow-800 mr-16 rating-count">
            ({rating_count})
          </span>
          <StarRating rating_star={rating_star} />
        </div>
      </div>
      <div className="flex gap-x-4 my-4">
        <div className="flex items-center text-black gap-1">
          <span className="item-creator">{creator}</span>
        </div>
      </div>
      <div className="flex gap-x-4 my-4 ">
        <div className="flex items-center text-black gap-1">
          <span className="item-price-new">${discounted_price}</span>
          <span className="text-lg font-medium text-gray-900 line-through dark:text-black">
            ${actual_price}
          </span>
        </div>
      </div>
      <hr />
      <br />
      <Link
        to={`/courses/${id}`}
        type="button"
        class="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2"
      >
        Lihat Selengkapnya
      </Link>
    </div>
  );
};

export default Course;
