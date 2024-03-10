import React, { useEffect } from "react";
import img1 from "/Images/img112.jpg";
import img2 from "/Images/img2.jpg";
import img3 from "/Images/ladakh.jpg";

import HomeNav from "./HomeNav";

const HomePage = () => {
  return (
    <div>
      <HomeNav />
      <div
        className="h-screen w-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${img3})` }}
      ></div>

      <div className="">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white font-extrabold w-3/4 px-9">
          <div className="flex flex-col mb-10 tracking-wide">
            <h1 className="w-3/5 text-5xl float-left font-semibold text-left">
              Beautiful
            </h1>
            <h1 className="w-3/5 text-5xl font-semibold text-left">
              Places to explore
            </h1>
          </div>
          <p className="text-left mb-10 text-lg leading-6 tracking-wide w-2/5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            corrupti dolores, ad odit consequuntur numquam ab nemo eaque nihil
            fugit adipisci consequatur, odio dignissimosdeleniti dicta commodi
            officia voluptates nisi!
          </p>
          <div className="text-left">
            <input
              type="text"
              placeholder="Country Name"
              className="text-md py-2 px-10 w-2/5 rounded-sm text-black"
            />
            <button className=" -ml-24 text-white py-1 px-4 bg-black rounded-md ">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
