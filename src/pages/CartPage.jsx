import React from "react";
import { useCartContext } from "../context/cart_context";
import CartItem from "../components/CartItem";
import { MdClear } from "react-icons/md";
import Navbar from "../components/Navbar";
import { XMarkIcon } from "@heroicons/react/20/solid";
import StripeCheckout from "react-stripe-checkout";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { NavLink, Navigate } from "react-router-dom";
const CartPage = () => {
  const onToken = (token) => {
    console.log(token);
    toast("Pembayaran Berhasil :D ! Terima Kasih.", {
      type: "success",
    });
  };
  const {
    cart: cartItems,
    total_items,
    total_amount,
    clearCart,
  } = useCartContext();

  if (cartItems.length < 1) {
    return (
      <div className="">
        <Navbar />
        <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
          <div
            className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
              style={{
                clipPath:
                  "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
              }}
            />
          </div>
          <div
            className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
              style={{
                clipPath:
                  "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
              }}
            />
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p className="text-sm leading-6 text-gray-900">
              <strong className="font-semibold">Remedial</strong>
              <svg
                viewBox="0 0 2 2"
                className="mx-2 inline h-0.5 w-0.5 fill-current"
                aria-hidden="true"
              >
                <circle cx={1} cy={1} r={1} />
              </svg>
              Tidak ada item untuk dibayar, lakukan beli kelas terlebih dahulu
            </p>
            <NavLink
              to="/courselist"
              className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
            >
              Beli Kelas Sekarang!<span aria-hidden="true">&rarr;</span>
            </NavLink>
          </div>
          <div className="flex flex-1 justify-end">
            <button
              type="button"
              className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
            >
              <span className="sr-only">Dismiss</span>
              <XMarkIcon className="h-5 w-5 text-gray-900" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className=" ">
      <Navbar />
      <div className="cart-pg-title">
        <h1 class="mb-10 mt-20 text-center text-2xl font-bold">
          {total_items} <span>Course in Cart</span>
        </h1>{" "}
      </div>
      <div className="md:flex">
        {/* card grid left */}
        <div className="w-full ">
          <div className="">
            <button
              type="button"
              className="cart-clear-btn flex fs-15 fw-6 text"
              onClick={() => clearCart()}
            >
              <MdClear className="mx-auto px-20 mb-10" />
              <span className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                Clear All
              </span>
            </button>
          </div>

          <div className="">
            {cartItems.map((cartItem) => {
              return <CartItem key={cartItem.courseID} cartItem={cartItem} />;
            })}
          </div>
        </div>
        {/* end of grid left */}

        <div class=" rounded-lg  bg-white p-6  mx-10  md:w-1/3">
          <div class="mb-2 flex justify-between">
            <p class="text-gray-700">Subtotal</p>
            <p class="text-gray-700">Rp.{total_amount}.000</p>
          </div>

          <hr class="my-4" />
          <div class="flex justify-between">
            <p class="text-lg font-bold">Total</p>
            <div class="">
              <p class="mb-1 text-lg font-bold">Rp.{total_amount}.000</p>
            </div>
          </div>
          <StripeCheckout
            image="../src/assets/logonav.png" // the pop-in header image (default none)
            token={onToken}
            name="Remedial"
            billingAddress
            amount={total_amount * 100}
            stripeKey="pk_test_51NIjmbESmv04Ta4Bq7f4CL7bjm2xeysmR8r0TCBSx4bXT6CSPxdjiy0dH3UBTgm9uKyVkaG7Iq0wA3iry58aBCmM00aYOu0KfK"
          />
          {/* <button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
            Check out
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
