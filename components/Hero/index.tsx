import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center lg:items-start">
      <h1 className="mt-10 text-[140px] leading-none font-extrabold flex flex-col lg:pl-5">
        <div className="italic -ml-6">The</div>
        <div className="-mt-7">TUN</div>
      </h1>
      <p className="text-justify px-5 mt-10 lg:mt-3">
        This system facilitates real-time monitoring of stock levels,
        distribution, and maintenance of assets, ensuring transparency and
        accountability in resource management. With integrated reporting and
        tracking features, the platform supports the effective execution of
        tasks and functions while optimizing resource utilization within the TUN
        Directorate.
      </p>
    </div>
  );
};

export default Hero;
