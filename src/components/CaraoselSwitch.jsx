import { RiAddLine } from "@remixicon/react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

function CaraoselSwitch() {
  const { isDark, toggleTheme } = useTheme();
  const [hoveredCard, setHoveredCard] = useState(null);

  const brands = [
    {
      id: 1,
      name: "Brand 1",
      image1:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=800&fit=crop",
      image2:
        "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&h=800&fit=crop",
    },
    {
      id: 2,
      name: "Brand 2",
      image1:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=800&fit=crop",
      image2:
        "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=800&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Title Section */}
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4">
          Interactive Carousel
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Hover over the cards to see the smooth transition effects
        </p>
      </div>

      {/* Carousel Container */}
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center items-center">
          {brands.map((brand) => (
            <motion.div
              key={brand.id}
              className="w-full sm:w-[300px] lg:w-[400px] h-[400px] sm:h-[500px] lg:h-[600px] group relative overflow-hidden rounded-2xl shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* First Image */}
              <img
                src={brand.image1}
                alt={`${brand.name} - Image 1`}
                className="object-cover w-full h-full absolute group-hover:opacity-0 transition-opacity duration-500 ease-in-out"
              />

              {/* Second Image */}
              <img
                src={brand.image2}
                alt={`${brand.name} - Image 2`}
                className="object-cover w-full h-full absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
              />

              {/* Overlay Content */}
              <div className="group2 absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 bg-white dark:bg-[#191919] text-black dark:text-white flex items-center justify-center gap-2 px-4 py-4 sm:py-6 opacity-0 group-hover:opacity-100 duration-300 cursor-pointer rounded-xl backdrop-blur-sm">
                <span className="text-sm sm:text-base font-medium">
                  ADD TO CART
                </span>
                <motion.span
                  className="group2-hover:rotate-90 transition-all duration-300"
                  whileHover={{ rotate: 90 }}
                >
                  <RiAddLine className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.span>
              </div>

              {/* NEW Badge */}
              <span className="absolute top-4 sm:top-6 left-4 sm:left-6 text-lg sm:text-2xl font-serif italic text-white dark:text-[#191919] bg-black/20 dark:bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                NEW
              </span>
            </motion.div>
          ))}
        </div>

        {/* Additional Features for Mobile */}
        <div className="sm:hidden mt-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Tap cards to see the effect
          </p>
          <div className="flex justify-center space-x-4">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="mt-16 w-full max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white/5 dark:bg-white/5 backdrop-blur-xl rounded-xl border border-white/10">
            <div className="text-3xl mb-4">🎨</div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              Smooth Transitions
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Beautiful hover effects with seamless image transitions
            </p>
          </div>

          <div className="text-center p-6 bg-white/5 dark:bg-white/5 backdrop-blur-xl rounded-xl border border-white/10">
            <div className="text-3xl mb-4">📱</div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              Mobile Optimized
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Responsive design that works perfectly on all devices
            </p>
          </div>

          <div className="text-center p-6 bg-white/5 dark:bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 sm:col-span-2 lg:col-span-1">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              Performance
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Optimized animations for smooth 60fps performance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaraoselSwitch;
