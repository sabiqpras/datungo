import { StationaryCardProps } from "@/types";
import Image from "next/image";
import React from "react";

const StationaryCard = ({
  type,
  name,
  qty,
  unit,
  img,
}: StationaryCardProps) => {
  return (
    <div className="w-36 h-60 bg-black text-white">
      <div className="w-36 h-36 relative">
        <Image src={`/${img}.png`} alt="" fill style={{ objectFit: "cover" }} />
      </div>
      <div className="pl-2 mt-1 ">
        <div className="italic text-xs h-5 ">{type}</div>
        <div className="font-bold leading-none text-sm h-11 ">{name}</div>
        <div className="text-sm">
          Stok: <span> {qty}</span>
          <span className="font-bold"> {unit}</span>
        </div>
      </div>
    </div>
  );
};

export default StationaryCard;
