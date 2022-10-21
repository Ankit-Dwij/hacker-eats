import React from "react";

const data = [
  {
    id: 1,
    maintext: "Sun's out, BOGO's out",
    subtext: "Through 8/26",
    bg: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    maintext: "Feeling Hungry ?",
    subtext: "Open 24x7",
    bg: "https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    maintext: "Vegetarians Delight",
    subtext: "Through 8/26",
    bg: "https://images.pexels.com/photos/707251/pexels-photo-707251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const HeadLineCards = () => {
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
