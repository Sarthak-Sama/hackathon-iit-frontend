import React, { useEffect, useRef, useState } from "react";

function Ripple() {
  const containerRef = useRef(null);
  const [ripples, setRipples] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const rippleIdRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationId;
    let lastTime = 0;
    const throttleDelay = 50; // Throttle ripple creation

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setMousePosition({ x, y });

      const currentTime = Date.now();
      if (currentTime - lastTime > throttleDelay) {
        const newRipple = {
          id: rippleIdRef.current++,
          x,
          y,
          size: Math.random() * 40 + 20,
          opacity: 0.7,
          createdAt: currentTime,
        };

        setRipples((prev) => [...prev.slice(-10), newRipple]); // Keep only last 10 ripples
        lastTime = currentTime;
      }
    };

    // Clean up old ripples
    const cleanupRipples = () => {
      const currentTime = Date.now();
      setRipples((prev) =>
        prev.filter((ripple) => currentTime - ripple.createdAt < 2000)
      );
      animationId = requestAnimationFrame(cleanupRipples);
    };

    container.addEventListener("mousemove", handleMouseMove);
    animationId = requestAnimationFrame(cleanupRipples);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-screen h-screen overflow-hidden cursor-none bg-gradient-to-br from-blue-900 via-blue-700 to-teal-500"
      style={{
        backgroundImage: `
          radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(14, 165, 233, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 40% 80%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)
        `,
      }}
    >
      {/* Background water texture overlay */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" className="animate-pulse">
          <defs>
            <pattern
              id="water"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="25" cy="25" r="2" fill="rgba(255,255,255,0.1)" />
              <circle cx="75" cy="75" r="1.5" fill="rgba(255,255,255,0.1)" />
              <circle cx="50" cy="80" r="1" fill="rgba(255,255,255,0.1)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#water)" />
        </svg>
      </div>

      {/* Mouse follower */}
      <div
        className="absolute pointer-events-none transition-all duration-100 ease-out"
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
          width: 20,
          height: 20,
          background:
            "radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(59,130,246,0.4) 70%, transparent 100%)",
          borderRadius: "50%",
          filter: "blur(1px)",
        }}
      />

      {/* Ripples */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="absolute pointer-events-none animate-ping"
          style={{
            left: ripple.x - ripple.size / 2,
            top: ripple.y - ripple.size / 2,
            width: ripple.size,
            height: ripple.size,
            background: `radial-gradient(circle, 
              rgba(255,255,255,${ripple.opacity * 0.6}) 0%, 
              rgba(59,130,246,${ripple.opacity * 0.4}) 30%, 
              rgba(14,165,233,${ripple.opacity * 0.2}) 60%, 
              transparent 100%)`,
            borderRadius: "50%",
            animation: `rippleExpand 2s ease-out forwards`,
          }}
        />
      ))}

      {/* Watery trail effect */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: mousePosition.x - 30,
          top: mousePosition.y - 30,
          width: 60,
          height: 60,
          background: `radial-gradient(circle, 
            rgba(255,255,255,0.1) 0%, 
            rgba(59,130,246,0.2) 40%, 
            rgba(14,165,233,0.1) 70%, 
            transparent 100%)`,
          borderRadius: "50%",
          filter: "blur(8px)",
          transition: "all 0.3s ease-out",
        }}
      />

      {/* CSS for ripple animation */}
      <style jsx>{`
        @keyframes rippleExpand {
          0% {
            transform: scale(0.1);
            opacity: 0.8;
          }
          50% {
            transform: scale(0.8);
            opacity: 0.4;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        .animate-ripple {
          animation: rippleExpand 2s ease-out forwards;
        }
      `}</style>

      {/* Optional content overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-white text-4xl font-bold opacity-50 select-none">
          Move your mouse
        </div>
      </div>
    </div>
  );
}

export default Ripple;
