import React from "react";

import { useCartContext } from "../context/cart_context";

const CartItem = ({ cartItem }) => {
  const { removeFromCart } = useCartContext();
  const {
    cart: cartItems,
    total_items,
    total_amount,
    clearCart,
  } = useCartContext();

  return (
    <div class=" bg-white ">
      <div class=" mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div class="rounded-lg md:w-2/3">
          <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
            <img
              src={cartItem.image}
              alt={cartItem.course_name}
              class="w-full rounded-lg sm:w-40"
            />
            <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
              <div class="mt-5 sm:mt-0">
                <h2 class="text-lg font-bold text-gray-900">
                  {cartItem.course_name}
                </h2>
                <p class="mt-1 text-xs text-gray-700">By {cartItem.creator}</p>
              </div>
              <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                <div class="flex items-center border-gray-100"></div>
                <div class="flex items-center space-x-4">
                  <p class="text-sm">Rp.{cartItem.discounted_price}.000</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                    onClick={() => removeFromCart(cartItem.courseID)}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
