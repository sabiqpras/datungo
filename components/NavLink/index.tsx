import { NavLinkProps } from "@/types";
import React from "react";

const NavLink = ({ title, link }: NavLinkProps) => {
  return (
    <li className="hover:text-orange-300">
      <a href={`${link}`}>{title}</a>
    </li>
  );
};

export default NavLink;
