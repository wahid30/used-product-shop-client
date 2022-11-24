import React from "react";
import { Link } from "react-router-dom";
import eventCard from "../../../assets/image/ShoppingEventBanner.png";

const ShoppingEvent = () => {
  return (
    <div className="my-2">
      <div className="card w-full bg-black text-white shadow-xl rounded-none">
        <div className="card-body text-center">
          <h2 className="text-3xl">Shopping Event</h2>
          <p>
            From December 12 to 31, get an Apple Gift Card when you buy an
            eligible product.
          </p>
          <Link to="/" className="text-blue-600">
            Get an early look...{" "}
          </Link>
        </div>
        <figure>
          <img src={eventCard} alt="Shoes" />
        </figure>
      </div>
    </div>
  );
};

export default ShoppingEvent;
