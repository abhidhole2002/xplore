import React from "react";
import { TbHexagonLetterX } from "react-icons/tb";
import { MdAirplanemodeActive } from "react-icons/md";

const HomeNav = () => {
  return (
    <div className="">
      <div className=" fixed top-0 left-1/2 transform -translate-x-1/2 flex justify-around w-full py-2 font-semibold">
        <div className="my-auto text-fuchsia-50">
          <h1 className="flex justify-center text-center items-center text-3xl cursor-pointer">
            <TbHexagonLetterX className="text-6xl" /> plore
          </h1>
        </div>
        <div className="my-auto flex gap-8">
          <nav className="my-auto ">
            <ul className=" text-fuchsia-50 flex gap-10 text-lg cursor-pointer">
              <li>Travel Guide</li>
              <li>Famous Places</li>
              <li>Contact Us</li>
            </ul>
          </nav>
          <button className="flex my-auto bg-fuchsia-50 py-2 px-5 rounded-md">
            <MdAirplanemodeActive className="my-auto mr-2" /> Booking{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeNav;
