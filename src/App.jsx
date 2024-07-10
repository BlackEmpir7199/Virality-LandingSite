import React from "react";
import Workflow from "./components/Workflow";
import FeaturesSection from "./components/FeaturesSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7-xl mx-auto pt-20 px-6">
        <HeroSection id="hero" />
        <FeaturesSection id="features" />
        <Workflow id="workflow" />
        <Pricing id="pricing" />
        <Testimonials id="testimonials" />
        <Footer />
      </div>
    </>
  );
}

export default App;
