import React from "react";
import FeatureCard from "../FeatureCard";

const Feature = () => {
  return (
    <div className="px-5 mt-10 lg:mt-0 lg:flex lg:flex-col lg:justify-center">
      <FeatureCard
        title="Stationary Info"
        para="Occaecat voluptate velit labore Lorem magna incididunt deserunt nostrud nisi id id voluptate nostrud."
        link="/Stationary"
      />
      <FeatureCard
        title="Inventory Info"
        para="Occaecat voluptate velit labore Lorem magna incididunt deserunt nostrud nisi id id voluptate nostrud."
        featureclass="mt-5"
        link="/Inventory"
      />
    </div>
  );
};

export default Feature;
