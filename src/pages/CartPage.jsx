import React from "react";
import { useCartContext } from "../context/cart_context";
import CartItem from "../components/CartItem";
import { MdClear } from "react-icons/md";
import Navbar from "../components/Navbar";
import StripeCheckout from "react-stripe-checkout";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
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
      <div>
        <Navbar />

        <div className="text-center text-4xl font-bold pt-50">
          Tidak ada item untuk dibayar, lakukan beli kelas terlebih dahulu
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
