import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
function Footer() {
  return (
    <div className="pb-1 border-2 bg-white max-w-[1350px] mx-auto py-5 px-20 grid lg:grid-cols-3 gap-2 text-[#9ea0a6]">
      <div>
        {" "}
        <img src="../src/assets/logonav.png" alt="" />
        <span className="w-full text-3xl font-bold text-black">Remedial.</span>
        <p className="py-4 ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
          ullam iste repellat consequatur libero reiciendis, blanditiis
          accusantium.
        </p>
        <a
          href="#"
          className=" rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Kontak Kami
        </a>
        <div className="flex justify-between md:w-[75%] my-10">
          <FaFacebookSquare size={30} className="text-black" />
          <FaInstagram size={30} className="text-black" />
          <FaTwitterSquare size={30} className="text-black" />
          <FaGithubSquare size={30} className="text-black" />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-around mt-6">
        <div>
          <h6 className="font-medium text-black">Support</h6>
          <ul>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Documentation</li>
            <li className="py-2 text-sm">Guides</li>
            <li className="py-2 text-sm">API Status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-black">Company</h6>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">Jobs</li>
            <li className="py-2 text-sm">Press</li>
            <li className="py-2 text-sm">Careers</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-black">Legal</h6>
          <ul>
            <li className="py-2 text-sm">Claim</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
