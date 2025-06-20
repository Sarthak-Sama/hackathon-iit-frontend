import React, { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Brands from "./components/Brands";
import Cards from "./components/Cards";
import CaraoselSwitch from "./components/CaraoselSwitch";
import Parallax from "./components/Parallax";
import Testimonial from "./components/testimonial";
import Ripple from "./components/Ripple";
import Loader from "./components/Loader";

function App() {
  const [activeComponent, setActiveComponent] = useState("brands");
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case "brands":
        return <Brands />;
      case "cards":
        return <Cards />;
      case "carousel":
        return <CaraoselSwitch />;
      case "parallax":
        return <Parallax />;
      case "testimonial":
        return <Testimonial />;
      case "ripple":
        return <Ripple />;
      default:
        return <Testimonial />;
    }
  };

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" onLoadingComplete={handleLoadingComplete} />
        ) : (
          <div
            key="app"
            className="min-h-screen bg-white dark:bg-[#191919] transition-colors duration-300"
          >
            <Navbar
              activeComponent={activeComponent}
              setActiveComponent={setActiveComponent}
            />

            {/* Main Content with proper spacing for navbar */}
            <div className="pt-16 md:pt-0">{renderComponent()}</div>
          </div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
