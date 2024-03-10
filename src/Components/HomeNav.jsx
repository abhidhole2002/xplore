import React from "react";
import { TbHexagonLetterX } from "react-icons/tb";
import { MdAirplanemodeActive } from "react-icons/md";
import { Link } from "react-router-dom";

const HomeNav = () => {
  return (
    <div className="">
      <div className=" fixed top-0 left-1/2 transform -translate-x-1/2 flex justify-around w-full py-2 font-semibold">
        <div className="my-auto text-fuchsia-50">
          <Link to={"/"}>
            <h1 className="flex justify-center text-center items-center text-3xl cursor-pointer text-black">
              <TbHexagonLetterX className=" text-6xl" /> plore
            </h1>
          </Link>
        </div>
        <div className="my-auto flex gap-8 ">
          <nav className="my-auto ">
            <ul className=" text-black flex gap-10 text-lg cursor-pointer">
              <li>Travel Guide</li>
              <li>
                {" "}
                <Link to="/places">Famous Places</Link>{" "}
              </li>
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
