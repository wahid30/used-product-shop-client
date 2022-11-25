import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "./BookingModal/BookingModal";
import DisplayMobilesCard from "./DisplayMobilesCard";

const DisplayMobiles = () => {
  const mobiles = useLoaderData();
  // console.log(mobiles);
  const [item, setItem] = useState(null);
  return (
    <div>
      <div>hiiiiiiiiiiii</div>

      {/* display the mobile data  */}
      <div className="my-5 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mobiles.map((mobile) => (
          <DisplayMobilesCard
            key={mobile._id}
            mobile={mobile}
            setItem={setItem}
          ></DisplayMobilesCard>
        ))}
      </div>
      {item && <BookingModal item={item}></BookingModal>}
    </div>
  );
};

export default DisplayMobiles;
