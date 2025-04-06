import React, { useState } from "react";
import { BookmarkIcon, ShareIcon } from "@heroicons/react/24/outline";

const CoffeeCard = ({
  name,
  image,
  price,
  description,
  customizable,
  veg,
  preparationTime,
}) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="w-full max-w-3xl mx-auto bg-white shadow rounded-xl p-4 mb-6 flex flex-col md:flex-row gap-4">
      <div className="w-full md:w-[60%]">
        {veg && (
          <div className="flex items-center mb-2">
            <div className="w-5 h-5 flex items-center justify-center rounded-md bg-white border-2 border-green-800 mr-2">
              <div className="w-2.5 h-2.5 bg-green-800 rounded-full" />
            </div>
            <span className="text-green-600 text-sm font-bold">
              {preparationTime} mins
            </span>
          </div>
        )}

        <h2 className="text-2xl font-bold text-gray-800 mb-2">{name}</h2>

        <p className="text-gray-600 text-sm max-w-[90%]">
          {showMore ? description : `${description.slice(0, 80)}... `}
          <button
            onClick={() => setShowMore(!showMore)}
            className="text-black font-medium ml-1"
          >
            {showMore ? "less" : "more"}
          </button>
        </p>

        <div className="mt-3 font-bold text-gray-800 text-lg">₹{price}</div>

        <div className="flex mt-3 space-x-2">
          <button className="p-4 rounded-full hover:bg-gray-100 border-2 border-gray-300">
            <BookmarkIcon className="w-5 h-5 text-gray-500" />
          </button>
          <button className="p-4 rounded-full hover:bg-gray-100 border-2 border-gray-300">
            <ShareIcon className="w-5 h-5 text-gray-500" />
          </button>
        </div>
      </div>

      <div className="w-full md:w-[40%] text-center">
        <div className="relative w-full h-60 rounded-[20px] overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-[100%] h-[90%] rounded-[20px] border-2 border-pink-200"
          />
          <button className="text-xl border-2 border-pink-500 font-bold rounded-[10px] left-[10%] right-[10%] z-999 absolute bottom-0 bg-red-100 text-red-500 font-semibold py-1 px-4 hover:bg-red-200 w-[80%] p-8 h-[60px]">
            ADD
            <p className="text-4xl font-bold text-pink-500 absolute top-[-6px] right-[6px]">
              +
            </p>
          </button>
        </div>
        {customizable && (
          <span className="text-lg text-gray-500 block mt-1">Customisable</span>
        )}
      </div>
    </div>
  );
};

export default CoffeeCard;
