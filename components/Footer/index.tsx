import React from "react";
import FooterCard from "../Footercard";

const Footer = () => {
  return (
    <footer>
      <div className="px-5 mt-20 lg:grid lg:grid-cols-2">
        Visit Our
        <div className="flex justify-between lg:justify-start lg:gap-6 lg:col-start-1 lg:pr-5 ">
          <FooterCard
            title="Instagram"
            link="https://www.instagram.com/jamdatun_kejagungri/?hl=en"
          />
          <FooterCard
            title="Jamdatun Website"
            link="https://datun.kejaksaan.go.id/"
          />
        </div>
        <p className="lg:col-span-2 mt-6 lg:mt-16 py-1 text-center text-white text-xs bg-black hover:bg-orange-300">
          Made with love by Sabiq.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
