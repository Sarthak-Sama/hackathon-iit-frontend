import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Parallax() {
  // 1) ref to the first full‑screen section
  const firstRef = useRef(null);
  // measure its scroll progress over its own height
  const { scrollYProgress } = useScroll({
    target: firstRef,
    offset: ["start start", "end start"],
  });

  // 2) map [0, 0.5] → text moves up full height
  const textY = useTransform(scrollYProgress, [0, 0.5], ["0%", "-100%"]);

  // 3) map [0.5, 1] → background moves up full height
  const bgY = useTransform(scrollYProgress, [0.5, 1], ["0%", "-100%"]);

  return (
    <div className="h-[200vh]">
      {/* FIRST SECTION: 100vh tall */}
      <section ref={firstRef} className="h-screen relative overflow-hidden">
        {/* BACKGROUND */}
        <motion.div
          className="sticky top-0 inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?...')",
            y: bgY,
          }}
        />
        <motion.div
          className="sticky top-0 inset-0 bg-black bg-opacity-40 z-10"
          style={{ y: bgY }}
        />

        {/* TEXT */}
        <motion.div
          className="sticky top-0 z-20 flex flex-col justify-center items-center h-screen text-white text-center px-4"
          style={{ y: textY }}
        >
          <h1 className="text-8xl md:text-9xl font-bold mb-8 tracking-wide">
            Connect
          </h1>
          <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-wider">
            Share quality time.
          </h2>
          <h3 className="text-6xl md:text-7xl font-bold tracking-wide">
            And Space
          </h3>
        </motion.div>
      </section>

      {/* SECOND SECTION */}
      <section className="h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center px-4">
          <motion.h2
            className="text-6xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Next Section
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            This is the second 100vh section that appears after scrolling
          </motion.p>
        </div>
      </section>
    </div>
  );
}
