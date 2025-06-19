import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { RiSunLine, RiMoonLine, RiArrowRightSLine } from "@remixicon/react";

function Brands() {
  const { isDark, toggleTheme } = useTheme();
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const brands = [
    "/logos/1.png",
    "/logos/2.png",
    "/logos/3.png",
    "/logos/4.png",
    "/logos/5.png",
    "/logos/6.png",
  ];

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-center p-4 sm:p-6 lg:p-8 transition-colors duration-300">
      {/* Brands Grid Container */}
      <div
        className="relative w-full max-w-6xl mx-auto"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Trusted by Leading Brands
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Join thousands of companies who trust our platform for their
            business needs
          </p>
        </div>

        {/* Brands Grid */}
        <div
          className={`w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 items-center transition-all duration-500 ${
            isHovering ? "blur-sm cursor-none" : ""
          }`}
        >
          {brands.map((brand, index) => (
            <div key={index} className="flex justify-center items-center p-4">
              <img
                src={brand}
                alt={`Brand ${index + 1}`}
                className="w-20 sm:w-24 lg:w-32 h-auto object-contain dark:invert transition-all duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* Floating "Meet our customers" button - Hidden on mobile */}
        <div
          className={`absolute z-10 pointer-events-none transition-opacity duration-100 hidden md:block ${
            isHovering ? "opacity-100" : "opacity-0"
          }`}
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            transform: "translate(-50%, -50%)",
          }}
        >
          {/* Expanding circle background with text */}
          <div
            className={`bg-zinc-100 dark:bg-zinc-800 shadow-lg flex items-center justify-center transition-all duration-500 ease-out ${
              isHovering
                ? "w-48 h-12 rounded-full px-4"
                : "w-8 h-8 rounded-full px-0"
            }`}
          >
            <span
              className={`flex items-center gap-2 whitespace-nowrap text-sm font-medium text-zinc-800 dark:text-zinc-200 transition-opacity duration-300 ${
                isHovering ? "opacity-100" : "opacity-0"
              }`}
              style={{
                transitionDelay: isHovering ? "200ms" : "0ms",
              }}
            >
              Meet our customers <RiArrowRightSLine size={16} />
            </span>
          </div>
        </div>

        {/* Mobile CTA Button */}
        <div className="md:hidden mt-12 text-center">
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300">
            Meet our customers
          </button>
        </div>
      </div>
    </div>
  );
}

export default Brands;
