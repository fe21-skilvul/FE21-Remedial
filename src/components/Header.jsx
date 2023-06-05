import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment, useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Header = () => {
  let [open, setOpen] = useState(false);

  return (
    <nav>
      <nav className=" pl-5 shadow md:flex bg-white md:items-center md:justify-between">
        <div className="flex justify-between items-center ">
          <span className="md:pl-10 flex items-center font-bold text-4xl py-3 md:py-0">
            <img
              src="src\assets\logo.png"
              alt="wksoqkxy-2"
              className="md:w-16 w-12"
            />
            <h1>Remidial</h1>
          </span>
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          >
            <ion-icon name={open ? "close" : "menu"}>
              <img
                src="src\assets\menu.png"
                alt="menu"
                className="text-white text-xl"
              />
            </ion-icon>
          </div>
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-10  md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px] absolute "
          }`}
        >
          <li className="mx-4 my-6 md:my-0 md:flex">
            <a className="active font-semibold text-[#00235b]" href="/">
              Home
            </a>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <a
              className="non-active font-semibold text-[#00235b]"
              href="#about"
            >
              belajar
            </a>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="font-semibold flex justify-center items-center w-full text-[#00235b]">
                  Program
                  <ChevronDownIcon
                    className="-mr-1 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className=" w-40 absolute left-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1 bg-[#333333]">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-[#333333] text-gray-900"
                              : "text-white",
                            "block px-4 py-2 text-sm "
                          )}
                        >
                          Belajar Lukis
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-[#333333]  text-gray-900"
                              : "text-white",
                            "block px-4 py-2 text-sm "
                          )}
                        >
                          Event
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <a className="active  font-semibold text-[#00235b] " href="/">
              Article
            </a>
          </li>
          <li className="md:p-5 md:w-32 w-32 text-center bg-black">
            <a
              className="font-semibold text-white"
              href="https://www.google.com/"
            >
              user<i class="fa fa-arrow-right ms-3"></i>
            </a>
          </li>
        </ul>
      </nav>
    </nav>
  );
};

export default Header;
