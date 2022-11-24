import React from "react";
import { Link } from "react-router-dom";

const MobileCategories = () => {
  return (
    <div>
      <div className="my-3 grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {/* category 1  */}
        <div className="card w-full bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src="https://th.bing.com/th/id/R.9ade469f2a6aa4ca5a3d0d6587935644?rik=gzZB6bgM6g6Cqw&pid=ImgRaw&r=0"
              alt="Shoes"
            />
          </figure>
          <div className="card-body text-center">
            <h2 className="text-4xl">iphone</h2>
            <div className=" mt-20">
              <Link to="/iphone">
                <button className="btn btn-primary">Explore</button>
              </Link>
            </div>
          </div>
        </div>
        {/* category 2  */}
        <div className="card w-full bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src="https://th.bing.com/th/id/R.dfaa74badc2688356ab67e9d48483f8e?rik=kVeZp4Wah4MOWQ&pid=ImgRaw&r=0"
              alt="Shoes"
            />
          </figure>
          <div className="card-body text-center">
            <h2 className="text-4xl">samsung</h2>
            <div className=" mt-20">
              <Link to="/samsung">
                <button className="btn btn-primary">Explore</button>
              </Link>
            </div>
          </div>
        </div>
        {/* category 3  */}
        <div className="card w-full bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src="https://www.compsmag.com/wp-content/uploads/2020/02/Tech-News-Google039s-Pixel-2-is-an-outright-steal-at.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body text-center">
            <h2 className="text-4xl">one plus</h2>
            <div className="mt-20">
              <Link to="/onePlus">
                <button className="btn btn-primary">Explore</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <Link to="/allmobiles">
          <button className="btn btn-primary">All Mobiles</button>
        </Link>
      </div>
    </div>
  );
};

export default MobileCategories;
