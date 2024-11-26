import React from "react";
import FeatureCard from "../FeatureCard";

const Feature = () => {
  return (
    <div className="px-5 mt-10 lg:mt-0 lg:flex lg:flex-col lg:justify-center">
      <FeatureCard
        title="Stationary Info"
        para="Check Stationary List."
        link="/Stationary"
      />
      <FeatureCard
        title="Inventory Info"
        para="Check InventoryList."
        featureclass="mt-5"
        link="/Inventory"
      />
    </div>
  );
};

export default Feature;
