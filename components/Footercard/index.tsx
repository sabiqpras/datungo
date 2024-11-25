import { FooterCardProps } from "@/types";

import React from "react";

const FooterCard = ({ title, link }: FooterCardProps) => {
  return (
    <div className="flex font-bold text-xl hover:text-orange-300">
      <a href={`${link}`} target="_blank">
        {title}
      </a>

      {/* <Image src="/arrow.svg" alt="lol" width={20} height={20} /> */}
    </div>
  );
};

export default FooterCard;
