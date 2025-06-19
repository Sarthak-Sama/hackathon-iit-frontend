import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import {
  RiSunLine,
  RiMoonLine,
  RiMenu3Line,
  RiCloseLine,
} from "@remixicon/react";

const Navbar = ({ activeComponent, setActiveComponent }) => {
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Track scroll position to prevent layout shift issues
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const components = [
    { id: "brands", name: "Brands", icon: "🏢" },
    { id: "cards", name: "Cards", icon: "🃏" },
    { id: "carousel", name: "Carousel", icon: "🎠" },
    { id: "parallax", name: "Parallax", icon: "🌄" },
    { id: "testimonial", name: "Testimonial", icon: "💬" },
    { id: "ripple", name: "Ripple", icon: "🌊" },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 hidden md:block"
        style={{ position: "fixed" }} // Ensure consistent positioning
      >
        <div className="bg-white/10 dark:bg-black/10 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-full px-6 py-3 shadow-2xl">
          <div className="flex items-center space-x-6">
            {/* Logo */}
            <div className="text-2xl font-bold text-gray-800 dark:text-white">
              CS
            </div>

            {/* Component Navigation */}
            <div className="flex items-center space-x-4">
              {components.map((component) => (
                <motion.button
                  key={component.id}
                  onClick={() => setActiveComponent(component.id)}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeComponent === component.id
                      ? "text-white"
                      : "text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {activeComponent === component.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                      initial={false}
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>{component.icon}</span>
                    <span>{component.name}</span>
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isDark ? <RiSunLine size={18} /> : <RiMoonLine size={18} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navbar */}
      <div className="md:hidden">
        {/* Mobile Header */}
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-black/95 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800"
        >
          <div className="flex items-center justify-between px-4 py-3">
            <div className="text-xl font-bold text-gray-800 dark:text-white">
              Component Showcase
            </div>
            <div className="flex items-center space-x-3">
              <motion.button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isDark ? <RiSunLine size={18} /> : <RiMoonLine size={18} />}
              </motion.button>
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isOpen ? <RiCloseLine size={20} /> : <RiMenu3Line size={20} />}
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-16 left-0 right-0 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800"
            >
              <div className="px-4 py-6 space-y-4">
                {components.map((component) => (
                  <motion.button
                    key={component.id}
                    onClick={() => {
                      setActiveComponent(component.id);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                      activeComponent === component.id
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-2xl">{component.icon}</span>
                    <span className="font-medium">{component.name}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;
