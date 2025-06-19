import React, { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import Navbar from "./components/Navbar";
import Brands from "./components/Brands";
import Cards from "./components/Cards";
import CaraoselSwitch from "./components/CaraoselSwitch";
import Parallax from "./components/Parallax";
import Testimonial from "./components/testimonial";

function App() {
  const [activeComponent, setActiveComponent] = useState("brands");

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
        return (
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-4xl text-gray-500 dark:text-gray-400">
              Ripple Component Coming Soon...
            </div>
          </div>
        );
      default:
        return <Testimonial />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-[#191919] transition-colors duration-300">
        <Navbar
          activeComponent={activeComponent}
          setActiveComponent={setActiveComponent}
        />

        {/* Main Content with proper spacing for navbar */}
        <div className="pt-16 md:pt-0">{renderComponent()}</div>
      </div>
    </ThemeProvider>
  );
}

export default App;
