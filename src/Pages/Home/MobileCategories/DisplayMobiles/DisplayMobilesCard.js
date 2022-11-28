import React from "react";
import { Link } from "react-router-dom";

const DisplayMobilesCard = ({ mobile, setItem }) => {
  // console.log(mobile);
  const {
    name,
    image_url,
    resale_price,
    location,
    original_price,
    yearsOfUse,
    rating,
    posted,
  } = mobile;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={image_url} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">{location}</div>
          </h2>
          <div className="card-actions">
            <div className="badge badge-outline">
              Original Price: ${original_price}
            </div>
            <div className="badge badge-outline">
              Resale Price: ${resale_price}
            </div>
          </div>
          <div className="card-actions">
            <div className="badge badge-outline">
              Years of Use: {yearsOfUse}y
            </div>
            <div className="badge badge-outline">Rating: {rating.number}</div>
          </div>
          <div className="badge badge-outline">Posted on: {posted}</div>
          <div className="badge badge-outline">Seller's name: {}</div>
          <div>
            <label
              onClick={() => setItem(mobile)}
              htmlFor="booking-modal"
              className="btn btn-primary"
            >
              Book Now
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayMobilesCard;
