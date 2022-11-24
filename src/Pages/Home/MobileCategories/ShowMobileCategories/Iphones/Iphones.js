import React, { useEffect, useState } from "react";
import ShowIphones from "./ShowIphones";

const Iphones = () => {
  const [iphones, setIphones] = useState([]);
  useEffect(() => {
    fetch("iphones.json")
      .then((res) => res.json())
      .then((data) => setIphones(data));
  }, []);
  return (
    <div className="text-center my-5">
      <h2 className="my-3">This is the platform of iphones</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {iphones.map((iphone) => (
          <ShowIphones key={iphone._id} iphone={iphone}></ShowIphones>
        ))}
      </div>
    </div>
  );
};

export default Iphones;
