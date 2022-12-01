import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="card w-96 shadow-xl mx-auto mt-32">
      <figure className="px-10 pt-10">
        <img
          src="https://th.bing.com/th/id/R.c98045cd667447def428ad9b261c0ef4?rik=y8ioZ%2bsKto28oQ&pid=ImgRaw&r=0"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Opps!!!</h2>
        <p className="text-red-400">{error.statusText || error.message}</p>
        <div className="card-actions">
          <Link to="/">
            <button className="btn btn-primary">Go back to Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
