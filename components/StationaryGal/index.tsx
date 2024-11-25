import React from "react";
import StationaryCard from "../StationaryCard";
import { PrismaClient } from "@prisma/client";

const StationaryGal = async () => {
  const prisma = new PrismaClient();
  const stationeries = await prisma.stationary.findMany();

  return (
    <section className="px-5 mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-5">
      {stationeries.map((stationary) => (
        <StationaryCard
          img={stationary.id}
          key={stationary.id}
          name={stationary.name}
          type={stationary.type}
          qty={stationary.quantity}
          unit={stationary.unit}
        />
      ))}
    </section>
  );
};

export default StationaryGal;
