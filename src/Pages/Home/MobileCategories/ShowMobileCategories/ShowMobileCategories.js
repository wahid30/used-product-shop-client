import React from "react";
import { Link } from "react-router-dom";

const ShowMobileCategories = ({ mobileCategory }) => {
  const { name, image } = mobileCategory;
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl image-full">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body text-center">
          <h2 className="text-4xl">{name}</h2>
          <div className=" mt-20">
            <Link to="">
              <button className="btn btn-primary">Explore</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowMobileCategories;
