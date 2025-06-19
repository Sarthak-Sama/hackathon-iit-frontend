import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function testimonial() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Customer Testimonials text disappears
  const customerTextOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  // Happy and Sellers move apart - increased distance to exit viewport
  const happyX = useTransform(scrollYProgress, [0.2, 0.6], [-210, -1200]);
  const sellersX = useTransform(scrollYProgress, [0.2, 0.6], [210, 1200]);

  // Testimonials fade in and scroll horizontally
  const testimonialsOpacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
  const testimonialsX = useTransform(scrollYProgress, [0.6, 1], [0, -2000]);

  const bentoItems = [
    {
      id: 1,
      type: "testimonial",
      size: "large",
      name: "John Smith",
      role: "Property Seller",
      content:
        "Amazing experience! Sold my house within a week. The platform made everything so easy and transparent.",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
    },
    {
      id: 2,
      type: "stat",
      size: "medium",
      title: "Success Rate",
      value: "98%",
      subtitle: "Properties Sold",
    },
    {
      id: 3,
      type: "testimonial",
      size: "medium",
      name: "Sarah Johnson",
      role: "Real Estate Agent",
      content:
        "This platform revolutionized how I work with clients. The tools are intuitive and results speak for themselves.",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b510?w=100&h=100&fit=crop&crop=face",
      rating: 5,
    },
    {
      id: 4,
      type: "feature",
      size: "small",
      title: "24/7 Support",
      icon: "💬",
    },
    {
      id: 5,
      type: "testimonial",
      size: "large",
      name: "Mike Chen",
      role: "Property Investor",
      content:
        "Incredible ROI on my listings. The analytics and market insights provided are game-changing for investors like me.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
    },
    {
      id: 6,
      type: "stat",
      size: "small",
      title: "Avg. Days",
      value: "7",
      subtitle: "To Sell",
    },
    {
      id: 7,
      type: "testimonial",
      size: "medium",
      name: "Emily Davis",
      role: "First-time Seller",
      content:
        "As a first-time seller, I was nervous. But the support team guided me through every step.",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
    },
    {
      id: 8,
      type: "feature",
      size: "medium",
      title: "AI-Powered Pricing",
      icon: "🤖",
      description: "Smart algorithms for optimal pricing",
    },
    {
      id: 9,
      type: "testimonial",
      size: "large",
      name: "David Wilson",
      role: "Luxury Home Seller",
      content:
        "The marketing strategy for my luxury property was exceptional. Sold for 15% above asking price in just 10 days!",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
    },
    {
      id: 10,
      type: "stat",
      size: "medium",
      title: "Customer Satisfaction",
      value: "4.9",
      subtitle: "Average Rating",
    },
  ];

  const renderBentoCard = (item) => {
    const sizeClasses = {
      small: "w-[200px] h-[200px]",
      medium: "w-[300px] h-[250px]",
      large: "w-[400px] h-[300px]",
    };

    const baseClasses = `${
      sizeClasses[item.size]
    } bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300 flex-shrink-0`;

    switch (item.type) {
      case "testimonial":
        return (
          <div
            key={item.id}
            className={`${baseClasses} p-6 flex flex-col justify-between`}
          >
            <div>
              <div className="flex items-center mb-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover mr-3 ring-2 ring-white/20"
                />
                <div>
                  <h3 className="text-white font-semibold text-sm">
                    {item.name}
                  </h3>
                  <p className="text-white/70 text-xs font-light">
                    {item.role}
                  </p>
                </div>
              </div>
              <p className="text-white/90 text-sm leading-relaxed font-light">
                "{item.content}"
              </p>
            </div>
            <div className="flex text-amber-400 mt-4">
              {[...Array(item.rating)].map((_, i) => (
                <svg
                  key={i}
                  className="w-3 h-3 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        );

      case "stat":
        return (
          <div
            key={item.id}
            className={`${baseClasses} p-6 flex flex-col justify-center items-center text-center`}
          >
            <div className="text-5xl font-black text-white mb-2">
              {item.value}
            </div>
            <div className="text-white/90 font-semibold text-lg mb-1">
              {item.title}
            </div>
            <div className="text-white/60 text-sm font-light">
              {item.subtitle}
            </div>
          </div>
        );

      case "feature":
        return (
          <div
            key={item.id}
            className={`${baseClasses} p-6 flex flex-col justify-center items-center text-center`}
          >
            <div className="text-4xl mb-3">{item.icon}</div>
            <div className="text-white font-semibold text-lg mb-2">
              {item.title}
            </div>
            {item.description && (
              <div className="text-white/70 text-sm font-light">
                {item.description}
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div ref={containerRef} className="h-[400vh] relative">
      {/* Modern sleek background with animated gradients */}
      <div className="sticky top-0 h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-600/30 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-pink-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl"></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        {/* Main content container */}
        <div className="relative z-10 h-full flex items-center justify-center">
          {/* Customer Testimonials small text */}
          <motion.div
            style={{ opacity: customerTextOpacity }}
            className="absolute top-48 text-white/80 text-lg tracking-widest uppercase font-light"
          >
            Customer Testimonials
          </motion.div>

          {/* Happy text - positioned left of center */}
          <motion.div
            style={{ x: happyX }}
            className="absolute text-white font-black text-8xl md:text-9xl tracking-tight drop-shadow-2xl"
            initial={{ x: -300 }}
          >
            Happy
          </motion.div>

          {/* Sellers text - positioned right of center */}
          <motion.div
            style={{ x: sellersX }}
            className="absolute text-white font-black text-8xl md:text-9xl tracking-tight drop-shadow-2xl"
            initial={{ x: 300 }}
          >
            Sellers
          </motion.div>

          {/* Bento Grid Testimonials section */}
          <motion.div
            style={{
              opacity: testimonialsOpacity,
              x: testimonialsX,
            }}
            className="absolute inset-0 flex items-center z-20"
          >
            <div className="flex gap-8 px-8 min-w-max">
              {/* First Bento Grid Column */}
              <div className="grid grid-rows-3 gap-4 h-[500px] w-[320px]">
                {/* Large testimonial card */}
                <div className="row-span-2 bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                      alt="John Smith"
                      className="w-12 h-12 rounded-full object-cover mr-3 ring-2 ring-white/20"
                    />
                    <div>
                      <h3 className="text-white font-semibold text-sm">
                        John Smith
                      </h3>
                      <p className="text-white/70 text-xs font-light">
                        Property Seller
                      </p>
                    </div>
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed font-light mb-4">
                    "Amazing experience! Sold my house within a week. The
                    platform made everything so easy and transparent. Couldn't
                    be happier with the results."
                  </p>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-3 h-3 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Small stat card */}
                <div className="row-span-1 bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300 flex flex-col justify-center items-center text-center">
                  <div className="text-3xl font-black text-white mb-1">98%</div>
                  <div className="text-white/90 font-semibold text-sm">
                    Success Rate
                  </div>
                </div>
              </div>

              {/* Second Bento Grid Column */}
              <div className="grid grid-rows-4 gap-4 h-[500px] w-[280px]">
                {/* Small feature card */}
                <div className="row-span-1 bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300 flex flex-col justify-center items-center text-center">
                  <div className="text-2xl mb-2">💬</div>
                  <div className="text-white font-semibold text-sm">
                    24/7 Support
                  </div>
                </div>

                {/* Medium testimonial card */}
                <div className="row-span-2 bg-white/5 backdrop-blur-xl rounded-2xl p-5 border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center mb-3">
                    <img
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b510?w=100&h=100&fit=crop&crop=face"
                      alt="Sarah Johnson"
                      className="w-10 h-10 rounded-full object-cover mr-3 ring-2 ring-white/20"
                    />
                    <div>
                      <h3 className="text-white font-semibold text-xs">
                        Sarah Johnson
                      </h3>
                      <p className="text-white/70 text-xs font-light">
                        Real Estate Agent
                      </p>
                    </div>
                  </div>
                  <p className="text-white/90 text-xs leading-relaxed font-light mb-3">
                    "This platform revolutionized how I work with clients. The
                    tools are intuitive."
                  </p>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-2 h-2 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Small stat card */}
                <div className="row-span-1 bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300 flex flex-col justify-center items-center text-center">
                  <div className="text-3xl font-black text-white mb-1">7</div>
                  <div className="text-white/90 font-semibold text-sm">
                    Avg Days
                  </div>
                </div>
              </div>

              {/* Third Bento Grid Column */}
              <div className="grid grid-rows-3 gap-4 h-[500px] w-[350px]">
                {/* Small feature card */}
                <div className="row-span-1 bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300 flex flex-col justify-center items-center text-center">
                  <div className="text-2xl mb-2">🤖</div>
                  <div className="text-white font-semibold text-sm mb-1">
                    AI Pricing
                  </div>
                  <div className="text-white/70 text-xs">Smart algorithms</div>
                </div>

                {/* Large testimonial card */}
                <div className="row-span-2 bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                      alt="Mike Chen"
                      className="w-12 h-12 rounded-full object-cover mr-3 ring-2 ring-white/20"
                    />
                    <div>
                      <h3 className="text-white font-semibold text-sm">
                        Mike Chen
                      </h3>
                      <p className="text-white/70 text-xs font-light">
                        Property Investor
                      </p>
                    </div>
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed font-light mb-4">
                    "Incredible ROI on my listings. The analytics and market
                    insights provided are game-changing for investors like me."
                  </p>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-3 h-3 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              {/* Fourth Bento Grid Column */}
              <div className="grid grid-rows-4 gap-4 h-[500px] w-[320px]">
                {/* Medium stat card */}
                <div className="row-span-1 bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300 flex flex-col justify-center items-center text-center">
                  <div className="text-3xl font-black text-white mb-1">4.9</div>
                  <div className="text-white/90 font-semibold text-sm">
                    Satisfaction
                  </div>
                </div>

                {/* Large testimonial card */}
                <div className="row-span-2 bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <img
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
                      alt="Emily Davis"
                      className="w-12 h-12 rounded-full object-cover mr-3 ring-2 ring-white/20"
                    />
                    <div>
                      <h3 className="text-white font-semibold text-sm">
                        Emily Davis
                      </h3>
                      <p className="text-white/70 text-xs font-light">
                        First-time Seller
                      </p>
                    </div>
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed font-light mb-4">
                    "As a first-time seller, I was nervous. But the support team
                    guided me through every step. Highly recommended!"
                  </p>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-3 h-3 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Small feature card */}
                <div className="row-span-1 bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300 flex flex-col justify-center items-center text-center">
                  <div className="text-2xl mb-2">⚡</div>
                  <div className="text-white font-semibold text-sm">
                    Fast Process
                  </div>
                </div>
              </div>

              {/* Fifth Bento Grid Column */}
              <div className="grid grid-rows-3 gap-4 h-[500px] w-[300px]">
                {/* Large testimonial card */}
                <div className="row-span-2 bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
                      alt="David Wilson"
                      className="w-12 h-12 rounded-full object-cover mr-3 ring-2 ring-white/20"
                    />
                    <div>
                      <h3 className="text-white font-semibold text-sm">
                        David Wilson
                      </h3>
                      <p className="text-white/70 text-xs font-light">
                        Luxury Seller
                      </p>
                    </div>
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed font-light mb-4">
                    "The marketing strategy for my luxury property was
                    exceptional. Sold for 15% above asking price!"
                  </p>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-3 h-3 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Medium stat card */}
                <div className="row-span-1 bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300 flex flex-col justify-center items-center text-center">
                  <div className="text-3xl font-black text-white mb-1">15%</div>
                  <div className="text-white/90 font-semibold text-sm">
                    Above Asking
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default testimonial;
