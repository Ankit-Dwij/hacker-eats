import React, { useState } from "react";
import { HeadLine } from "../data/data";

const HeadLineCards = () => {
  const [data, setData] = useState(HeadLine);
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* card */}
      {data.map((item) => {
        return (
          <div className="roundex-xl relative" key={item.id}>
            {/* overlay */}
            <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
              <p className="font-bold text-2xl px-4 pt-4">{item.maintext}</p>
              <p className="px-4">{item.subtext}</p>
              <button className="border-white bg-white text-black mx-4 absolute bottom-4">
                Order Now
              </button>
            </div>
            <img
              className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
              src={item.bg}
              alt="BOGO's kitchen"
            />
          </div>
        );
      })}
    </div>
  );
};

export default HeadLineCards;
