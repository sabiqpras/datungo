import { InventoryCardProps } from "@/types";
import Image from "next/image";
import React from "react";

const InventoryCard = ({ type, name, condition, img }: InventoryCardProps) => {
  return (
    <div className="w-36 h-60 bg-black text-white">
      <div className="w-36 h-36 relative">
        <Image src={`/${img}.png`} alt="" fill style={{ objectFit: "cover" }} />
      </div>
      <div className="pl-2 mt-1 pr-2">
        <div className="italic text-xs h-5 "> {type}</div>
        <div className="font-bold leading-none text-sm h-11 ">{name} </div>
        <div className="text-sm">
          Kondisi: <span className="font-bold">{condition} </span>
          {/* <span className="font-bold"> </span> */}
        </div>
      </div>
    </div>
  );
};

export default InventoryCard;
