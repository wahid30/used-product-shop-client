import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const AddAProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const imageHostKey = process.env.REACT_APP_imgbb_key;
  // console.log(imageHostKey);

  const navigate = useNavigate();

  const { data: selections, isLoading } = useQuery({
    queryKey: ["mobileSelection"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/mobileSelection");
      const data = await res.json();
      return data;
    },
  });

  const handleAddAProduct = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);
          const product = {
            name: data.name,
            email: data.email,
            selection: data.selection,
            price: data.price,
            condition: data.condition,
            number: data.number,
            location: data.location,
            productCategory: data.productCategory,
            description: data.description,
            yearsOfPurChase: data.yearsOfPurChase,
            image: imgData.data.url,
          };
          // console.log(product);

          // save product information to the database
          fetch("http://localhost:5000/products", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${data.name} is added successfully`);
              navigate("/dashboard/manageproducts");
            });
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="w-96 p-7 border-4 rounded my-10">
      <h2 className="text-4xl">Add A Product</h2>
      <form onSubmit={handleSubmit(handleAddAProduct)}>
        {/* for name  */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            {...register("name", {
              required: "Name is Required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        {/* for email  */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            {...register("email", {
              required: true,
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        {/* for product name  */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Select a Mobile</span>
          </label>
          <select
            {...register("selection")}
            className="select input-bordered w-full max-w-xs"
          >
            {selections.map((selection) => (
              <option key={selection._id} value={selection.name}>
                {selection.name}
              </option>
            ))}
          </select>
        </div>
        {/* for product price  */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Price</span>
          </label>
          <input
            type="number"
            {...register("price", {
              required: true,
            })}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        {/* for product condition  */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Select Mobile Condition</span>
          </label>
          <select
            {...register("condition")}
            className="select input-bordered w-full max-w-xs"
          >
            <option>excellent</option>
            <option>good</option>
            <option>fair</option>
          </select>
        </div>
        {/* for mobile number  */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Mobile Number</span>
          </label>
          <input
            type="text"
            {...register("number", {
              required: true,
            })}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        {/* for location  */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Location</span>
          </label>
          <input
            type="text"
            {...register("location", {
              required: true,
            })}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        {/* for product category  */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Select Mobile Category</span>
          </label>
          <select
            {...register("productCategory", {
              required: true,
            })}
            className="select input-bordered w-full max-w-xs"
          >
            <option>iphone</option>
            <option>Samsung</option>
            <option>One Plus</option>
          </select>
        </div>
        {/* for product description  */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Description</span>
          </label>
          <textarea
            {...register("description", {
              required: true,
            })}
            className="textarea input-bordered"
            placeholder="Description"
          ></textarea>
        </div>
        {/* for product yearsOfPurChase   */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Years of PurChase</span>
          </label>
          <input
            type="number"
            {...register("yearsOfPurChase", {
              required: true,
            })}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        {/* for upload photo  */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            {...register("image", {
              required: "Photo is Required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.img && <p className="text-red-500">{errors.img.message}</p>}
        </div>
        <input
          className="btn btn-success w-full mt-4"
          value="Add Product"
          type="submit"
        />
      </form>
    </div>
  );
};

/**
 * Three places to store images
 * 1. Third party image hosting server
 * 2. File system of your server
 * 3. mongodb (database)
 */

export default AddAProduct;
