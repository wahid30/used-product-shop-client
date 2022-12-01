import React, { useEffect, useState } from "react";
import ShowAllMobiles from "./ShowAllMobiles";

const AllMobiles = () => {
  // const [allMobiles, setAllMobiles] = useState();
  // useEffect(() => {
  //   fetch("https://used-mobile-shop-server.vercel.app/mobiles")
  //     .then((res) => res.json())
  //     // .then((data) => setAllMobiles(data));
  //     .then((data) => console.log(data));
  // }, []);
  return (
    <div>
      {/* {allMobiles.map((allMobile) => (
        <ShowAllMobiles
          key={allMobile._id}
          allMobile={allMobile}
        ></ShowAllMobiles>
      ))} */}
    </div>
  );
};

export default AllMobiles;
