import React from "react";

const ShowIphones = ({ iphone }) => {
  const { name, resale_price, location, image, original_price, yearsOfUse } =
    iphone;
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">{location}</div>
          </h2>
          <p>Total use of {yearsOfUse} years</p>
          <div className="card-actions justify-center">
            <div className="badge badge-outline">
              Original Price: ${original_price}
            </div>
            <div className="badge badge-outline">
              resale price: ${resale_price}
            </div>
          </div>
        </div>
        <div className="card ">
          <button className="btn btn-primary rounded-none">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default ShowIphones;
