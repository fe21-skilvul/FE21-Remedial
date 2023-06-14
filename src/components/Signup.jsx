import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import NavbarOut from "./NavbarOut";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      navigate("/signin");
      toast.success("Register Berhasil!");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
      toast.error("Email/Password Salah!");
    }
  };

  return (
    // <div>
    //   <NavbarOut />
    //   {/* <div className="max-w-[700px] mx-auto my-16 p-4">
    //     <div>
    //       <h1 className="text-2xl font-bold py-2">
    //         Sign up for a free account
    //       </h1>
    //       <p className="py-2">
    //         Already have an account yet?{" "}
    //         <Link to="/" className="underline">
    //           Sign in.
    //         </Link>
    //       </p>
    //     </div>
    //     <form onSubmit={handleSubmit}>
    //       <div className="flex flex-col py-2">
    //         <label className="py-2 font-medium">Email Address</label>
    //         <input
    //           onChange={(e) => setEmail(e.target.value)}
    //           className="border p-3"
    //           type="email"
    //         />
    //       </div>
    //       <div className="flex flex-col py-2">
    //         <label className="py-2 font-medium">Password</label>
    //         <input
    //           onChange={(e) => setPassword(e.target.value)}
    //           className="border p-3"
    //           type="password"
    //         />
    //       </div>
    //       <button className="border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white">
    //         Sign Up
    //       </button>
    //     </form>
    //   </div>
    // </div> */}
    <div>
      <NavbarOut />
      <section class="bg-gray-50 min-h-screen flex items-center justify-center">
        <div class="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
          <div class="md:w-1/2 px-8 md:px-16">
            <h2 class="font-bold text-2xl text-[#002D74]">Daftar</h2>
            <p class="text-xs mt-4 text-[#002D74]">
              Daftar akun Masukan Email dan Password
            </p>

            <form onSubmit={handleSubmit} action="" class="flex flex-col gap-4">
              <input
                onChange={(e) => setEmail(e.target.value)}
                class="p-2 mt-8 rounded-xl border"
                type="email"
                Classname="email"
                placeholder="Email"
              />
              <div class="relative">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-2 rounded-xl border w-full"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="gray"
                  class="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                </svg>
              </div>
              <button class="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">
                Daftar
              </button>
            </form>

            <div class="mt-3 text-xs flex justify-between items-center text-[#002D74]">
              <p>Sudah Punya Akun?</p>
              <Link to="/signin" className="underline">
                Masuk
              </Link>
            </div>
          </div>

          <div class="md:block hidden w-1/2">
            <img
              class="rounded-2xl"
              src="https://images.unsplash.com/photo-1616606103915-dea7be788566?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
