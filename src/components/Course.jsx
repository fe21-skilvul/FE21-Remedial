import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import StarRating from "../components/StarRating";
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
    <CourseCard className="bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[325px] mx-auto cursor-pointer hover:shadow-2xl transition">
      <img className="mb-8 " src={image} alt={course_name} />
      <div className="mb-4 flex gap-x-2 text-sm">
        <div className="text-lg font-semibold max-w-[260px]">{course_name}</div>
      </div>
      <div className="flex gap-x-4 my-4">
        <div className="flex items-center text-yellow-300 gap-1">
          <StarRating rating_star={rating_star} />
        </div>
      </div>
      <div className="item-btns flex">
        <Link to={`/courses/${id}`} className="item-btn see-details-btn">
          See details
        </Link>
      </div>
    </CourseCard>
  );
};
const CourseCard = styled.div`
  .item-btns {
    justify-self: flex-start;
    padding: 4px 8px 30px 18px;
    margin-top: auto;
    .item-btn {
      font-size: 15px;
      display: inline-block;
      padding: 6px 16px;
      font-weight: 700;
      transition: var(--transition);
      white-space: nowrap;

      &.see-details-btn {
        background-color: transparent;
        border: 1px solid var(--clr-black);
        margin-right: 5px;

        &:hover {
          background-color: rgba(0, 0, 0, 0.9);
          color: var(--clr-white);
        }
      }

      &.add-to-cart-btn {
        background: green;
        color: black;

        &:hover {
          background-color: transparent;
          color: rgba(0, 0, 0, 0.9);
        }
      }
    }
  }
`;

export default Course;
