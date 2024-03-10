import React, { useState } from "react";
import Data from "./Data";
import HomeNav from "./HomeNav";

const Tour = () => {
  const [info, setInfo] = useState(Data);
  const [searchData, setSearchData] = useState("");

  const handleSearch = (e) => {
    setSearchData(e.target.value);
    let trgt_val = e.target.value;
    const search = Data.filter((item, index, arr) =>
      item.place.toLowerCase().includes(trgt_val.toLowerCase())
    );
    setInfo(search);
    console.log(e.target.value);
  };
  return (
    <div>
      <div className="bg-black">
        <div className="flex justify-center ">
          <input
            type="text"
            placeholder="Search places"
            value={searchData}
            onChange={handleSearch}
            className="mt-20 w-96 py-2 px-6 rounded-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        <div className="bg-black px-28 py-16 grid grid-cols-3 md:grid-cols-4 gap-4">
          {info.map((item, index, arr) => {
            return (
              <div
                key={item.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-56 object-cover object-center"
                />
                <div className="p-4">
                  <div className="">
                    <h1 className="text-xl font-semibold mb-2">{item.place}</h1>
                    <p className="text-gray-600 mb-2">{item.description}</p>
                  </div>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                    {item.package}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tour;
