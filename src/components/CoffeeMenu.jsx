import React, { useState } from "react";
import { StarIcon, BookmarkIcon, ShareIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { FastForward } from "lucide-react";
const coffeeItems = [
  {
    id: 1,
    name: "Cappuccino",
    price: 255,
    rating: 4.5,
    reviews: 9,
    description:
      "Rich flavors of bold espresso smoothly blended with steamed milk, creating a velvety texture that's both satisfying and comforting. Topped with a layer of creamy milk foam, this classic beverage delivers a balanced taste of coffee intensity and creamy sweetness. Ideal for those who enjoy a well-rounded coffee experience that’s not too strong, not too mild—just perfect to kickstart your day or refresh your afternoon.",
    image:
      "https://s.yimg.com/zb/imgv1/3f736b22-676a-361c-8108-db789b27d857/t_500x300",
    preparationTime: 15,
    customizable: true,
    veg: true,
  },
];

const CoffeeMenu = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="max-w-3xl mx-auto p-4">
      {coffeeItems.map((item) => (
        <div
          key={item.id}
          className="flex items-start justify-between bg-white shadow rounded-xl p-4 mb-6"
        >
          <div className="flex-1">
            <div className="flex items-center space-x-2">
              {item.veg && (
                <div className="flex items-center mt-2">
                  <div className="w-5 h-5 flex items-center justify-center rounded-md bg-white border border-green-800 border-2 mr-2">
                    <div className="w-2.5 h-2.5 bg-green-800 rounded-full " />
                  </div>
                  <span className="text-green-500 text-sm font-bold flex items-center gap-2 font-bold flex items-center">
                    <div className="rounded-md px-1 py-0.5 flex items-center gap-2 font-bold ml-2 bg-gradient-to-l from-gray-200 to-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="green"
                        className="size-6 skew-x-[-20deg] text-green-600 opacity-70"
                      >
                        <path d="M5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256l-7.108-4.061C13.555 6.346 12 7.249 12 8.689v2.34L5.055 7.061Z" />
                      </svg>

                      <span className="text-green-600 text-[15px] font-medium">
                        {item.preparationTime} mins
                      </span>
                    </div>
                  </span>
                </div>
              )}
            </div>

            <h2 className="text-2xl pt-2 font-bold mt-1 text-gray-800 mb-4">
              {item.name}
            </h2>
            <div className="text-gray-500 text-xl max-w-[80%] font-semi-bold">
              <p className={`${!showMore ? "line-clamp-3" : ""} inline`}>
                {!showMore && item.description.slice(0, 80)}
                {showMore && item.description}
                {!showMore && "... "}
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="text-black font-medium"
                >
                  {showMore ? "less" : "more"}
                </button>
              </p>
            </div>

            <div className="mt-2 font-bold text-gray-800 text-lg">
              ₹{item.price}
            </div>

            <div className="flex mt-3 space-x-2">
              <button className="p-4 rounded-full hover:bg-gray-100 border-2 border-gray-300">
                <BookmarkIcon className="w-5 h-5 text-gray-500" />
              </button>
              <button className="p-4 rounded-full hover:bg-gray-100 border-2 border-gray-300">
                <ShareIcon className="w-5 h-5 text-gray-500" />
              </button>
            </div>
          </div>

          <div className="text-center w-[40%]">
            <div className="relative w-full h-60 rounded-[20px] overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-[100%] h-[90%] rounded-[20px] border-2 border-pink-200"
              />
              <button className="text-xl border-2 border-pink-500 font-bold rounded-[10px] left-[10%] right-[10%] z-999 absolute bottom-0 w-full bg-red-100 text-red-500 font-semibold py-1 px-4 hover:bg-red-200 w-[80%] p-8 h-[60px]">
                ADD
                <p className="text-4xl font-bold text-pink-500 absolute top-[-6px] right-[6px]">
                  +
                </p>
              </button>
            </div>
            {item.customizable && (
              <span className="text-lg text-gray-500 block mt-1">
                Customisable
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoffeeMenu;
