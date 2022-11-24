import React from "react";
import Iphones from "./Iphones/Iphones";
import OnePlus from "./OnePlus/OnePlus";
import Samsung from "./Samsung/Samsung";

const ShowMobileCategories = () => {
  return (
    <div>
      <Iphones></Iphones>
      <Samsung></Samsung>
      <OnePlus></OnePlus>
    </div>
  );
};

export default ShowMobileCategories;
