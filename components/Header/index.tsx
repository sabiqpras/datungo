import React from "react";
import NavLink from "../NavLink";

const Header = () => {
  return (
    <header className="sticky top-0 bg-white z-50">
      <nav className="px-5 lg:grid lg:grid-cols-2">
        <ul className="lg:pl-5 py-2 flex lg:col-start-2 justify-between  font-bold text-xl border-b-2 border-gray-300 lg:border-none ">
          <NavLink title="Home" link="/" />
          <NavLink title="About" link="/About" />
          <NavLink title="Help" link="/Help" />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
