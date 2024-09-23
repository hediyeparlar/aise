import React from "react";
import About from "@/components/About";
import ExperienceContent from "@/components/ExperienceContent";
import Products from "@/components/Products";
import Banner from "@/components/Banner";

const Home: React.FC = () => {
  return (
    <div>
      <div id="about">
        <About />
      </div>
      <div id="products">
        <Products />
      </div>
      <div id="experience">
        <ExperienceContent />
      </div>
      <div>
        <Banner />
      </div>
    </div>
  );
};

export default Home;
