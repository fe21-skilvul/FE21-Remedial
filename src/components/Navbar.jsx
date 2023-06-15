import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  Bars3Icon,
  ChartPieIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { other_images } from "../utils/images";

const products = [
  {
    name: "Logout",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();

      navigate("/");
      toast.info("Anda Telah Loqout");
    } catch (e) {
      toast("Anda Telah Loqout");
    }
  };

  return (
    <header className="bg-white font-black ">
      <nav
        className=" mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-10"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <NavLink to="/home" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src={other_images.nav} alt="" />
          </NavLink>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative ">
            <NavLink
              to="/home"
              className="hover:bg-indigo-700 focus:bg-indigo-700 focus:text-white rounded-2xl px-5 hover:text-white flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
            >
              Home
            </NavLink>
          </Popover>

          <NavLink
            to="/courselist"
            className="focus:bg-indigo-700 focus:text-white text-sm font-semibold leading-6 text-gray-900 hover:bg-indigo-700 rounded-2xl px-5 hover:text-white"
          >
            Programs
          </NavLink>

          <NavLink
            to="/blog"
            className="focus:bg-indigo-700 focus:text-white text-sm font-semibold leading-6 text-gray-900 hover:bg-indigo-700 rounded-2xl px-5 hover:text-white"
          >
            Blogs
          </NavLink>
          <NavLink
            to="/about"
            className="focus:bg-indigo-700 focus:text-white text-sm font-semibold leading-6 text-gray-900 hover:bg-indigo-700 rounded-2xl px-5 hover:text-white"
          >
            About Us
          </NavLink>
        </Popover.Group>
        <Popover
          onClick={handleLogout}
          className="relative hidden lg:flex lg:flex-1 lg:justify-end"
        >
          <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
            {user && user.email}
            <ChevronDownIcon
              className="h-5 w-5 flex-none text-gray-400"
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon
                        className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex-auto">
                      <a
                        href={item.href}
                        className="block font-semibold text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <NavLink
                  to="/home"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/courselist"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Programs
                </NavLink>
                <NavLink
                  to="/blog"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Blogs
                </NavLink>
                <NavLink
                  to="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About Us
                </NavLink>
              </div>
              <div className="py-6">
                <a
                  onClick={handleLogout}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Loqout
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
