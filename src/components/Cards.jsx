import { RiEqualizer2Line } from "@remixicon/react";
import { color } from "framer-motion";
import { div } from "framer-motion/client";
import React from "react";

function Cards() {
  const cards = [
    {
      name: "ECorp",
      color: "#00c08f",
    },
    {
      name: "ICopr",
      color: "#ffa903",
    },
    {
      name: "The Agency",
      color: "#f01f2a",
    },
  ];
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-md mx-auto">
        {/* Card Container */}
        <div className="flex items-center justify-center w-full max-w-[350px] aspect-square relative rounded-[2rem] bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 drop-shadow-[0_0_15px_rgba(139,69,252,0.3)] drop-shadow-[0_0_30px_rgba(139,69,252,0.2)] mx-auto">
          <div className="w-[98.5%] h-[98.5%]  aspect-square rounded-[2rem] bg-[#161415] text-white p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-bold mb-6 sm:mb-8 px-2">
              Brand Kits
            </h2>
            <div className="space-y-3 sm:space-y-4">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="flex bg-[#1e1e1e] border-zinc-700 border-[2px] items-center justify-between gap-2 p-3 sm:p-4 rounded-lg hover:bg-[#252525] transition-colors duration-200"
                >
                  <label className="flex items-center gap-2 cursor-pointer flex-1">
                    <div className="relative">
                      <input
                        type="checkbox"
                        className="appearance-none h-4 w-4 sm:h-5 sm:w-5 bg-[#2e2e2e] border-2 border-zinc-600 rounded-sm transition-colors mr-3 checked:bg-[#7459fc] checked:border-[#7459fc] peer"
                      />
                      <svg
                        className="absolute top-0.5 left-0.5 sm:top-1 sm:left-1 h-2.5 w-2.5 sm:h-3 sm:w-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="relative">
                      <div className="w-2.5 sm:w-3 absolute -top-2.5 sm:-top-3 bg-white aspect-square rounded-full border-[1px] border-zinc-200"></div>
                      <div className="w-2.5 sm:w-3 absolute -top-1 left-0.5 sm:left-1 bg-white aspect-square rounded-full border-[1px] border-zinc-200"></div>
                      <div
                        className="w-2.5 sm:w-3 absolute -top-1 -left-0.5 sm:-left-1 aspect-square rounded-full border-[1px] border-zinc-200"
                        style={{ backgroundColor: card.color }}
                      ></div>
                    </div>
                    <span className="text-base sm:text-lg font-semibold ml-4 sm:ml-5 translate-y-[-5%] sm:translate-y-[-12.5%] truncate">
                      {card.name}
                    </span>
                  </label>
                  <div className="flex-shrink-0">
                    <RiEqualizer2Line className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-400 hover:text-white transition-colors cursor-pointer" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="text-center mt-8">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Brand Kit Manager
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-sm mx-auto">
            Organize and manage your brand assets with our intuitive card-based
            interface
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
