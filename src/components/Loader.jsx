import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

function Loader({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0);
  const { isDark } = useTheme();

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            onLoadingComplete();
          }, 300);
          return 100;
        }
        return prev + Math.random() * 8 + 3;
      });
    }, 150);

    return () => clearInterval(progressInterval);
  }, [onLoadingComplete]);

  const progressPercentage = Math.min(progress, 100);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-[#191919] transition-colors duration-300"
    >
      <div className="text-center">
        {/* Simple Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            CS
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
            Component Showcase
          </div>
        </motion.div>

        {/* Minimal Progress Bar */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 200 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto"
        >
          <div className="h-[2px] bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gray-900 dark:bg-white rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Loader;
