import React from "react";
import InventoryCard from "../InventoryCard";
import { PrismaClient } from "@prisma/client";

const InventoryGal = async () => {
  const prisma = new PrismaClient();
  const inventories = await prisma.inventories.findMany();
  return (
    <section className="px-5 mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-5">
      {inventories.map((inven) => (
        <InventoryCard
          img={inven.id}
          key={inven.id}
          type={inven.type}
          name={inven.name}
          condition={inven.condition}
        />
      ))}
    </section>
  );
};

export default InventoryGal;
