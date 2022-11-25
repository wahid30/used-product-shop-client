import React from "react";
import { useLoaderData } from "react-router-dom";
import DisplayMobilesCard from "./DisplayMobilesCard";

const DisplayMobiles = () => {
  const mobiles = useLoaderData();
  // console.log(mobiles);
  return (
    <div className="my-5 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {mobiles.map((mobile) => (
        <DisplayMobilesCard
          key={mobile._id}
          mobile={mobile}
        ></DisplayMobilesCard>
      ))}
    </div>
  );
};

export default DisplayMobiles;
