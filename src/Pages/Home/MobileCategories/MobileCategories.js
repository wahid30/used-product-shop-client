import { useQuery } from "@tanstack/react-query";
// import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import ShowMobileCategories from "./ShowMobileCategories/ShowMobileCategories";

const MobileCategories = () => {
  // const [mobileCategories, setMobileCategories] = useState([]);

  const { data: mobileCategories = [], isLoading } = useQuery({
    queryKey: ["mobiles-category"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/mobiles-category");
      const data = await res.json();
      return data;
    },
  });

  // useEffect(() => {
  //   fetch("http://localhost:5000/mobiles-category")
  //     .then((res) => res.json())
  //     .then((data) => setMobileCategories(data));
  // }, []);

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div className="my-3 grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {mobileCategories.map((mobileCategory) => (
          <ShowMobileCategories
            key={mobileCategory._id}
            mobileCategory={mobileCategory}
          ></ShowMobileCategories>
        ))}
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
