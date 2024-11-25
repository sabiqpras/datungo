import { FeatureCardProps } from "@/types";
import Image from "next/image";
import React from "react";

const FeatureCard = ({ title, para, featureclass, link }: FeatureCardProps) => {
  return (
    <div className={`${featureclass}`}>
      <div className="flex font-bold text-3xl hover:text-orange-300">
        <a href={`${link}`}>{title}</a>

        <Image src="/arrow.svg" alt="lol" width={34} height={34} />
      </div>
      <div className="text-justify mt-2">{para}</div>
    </div>
  );
};

export default FeatureCard;
