import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";
import Loading from "../../Shared/Loading/Loading";

const ManageProducts = () => {
  const [deletingproduct, setDeletingproduct] = useState(null);

  const closeModal = () => {
    setDeletingproduct(null);
  };

  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:5000/products", {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });

  const handleDeleteproduct = (product) => {
    fetch(`http://localhost:5000/products/${product._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success(`product ${product.name} deleted successfully`);
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="my-10">
      <h2 className="text-3xl my-5">Manage products: {products?.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Device</th>
              <th>Price</th>
              <th>Condition</th>
              <th>Number</th>
              <th>Location</th>
              <th>Category</th>
              <th>Description</th>
              <th>Years of Purchase</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, i) => (
              <tr key={product._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img src={product.image} alt="" />
                    </div>
                  </div>
                </td>
                <td>{product.name}</td>
                <td>{product.email}</td>
                <td>{product.selection}</td>
                <td>${product.price}</td>
                <td>{product.condition}</td>
                <td>{product.number}</td>
                <td>{product.location}</td>
                <td>{product.productCategory}</td>
                <td>{product.description}</td>
                <td>{product.yearsOfPurChase}y</td>
                <td>
                  <label
                    onClick={() => setDeletingproduct(product)}
                    htmlFor="confirmation-modal"
                    className="btn btn-sm btn-error"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingproduct && (
        <ConfirmationModal
          title={`Are you sure you want to delete?`}
          message={`If you delete ${deletingproduct.selection}. It cannot be undone.`}
          successAction={handleDeleteproduct}
          successButtonName="Delete"
          modalData={deletingproduct}
          closeModal={closeModal}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default ManageProducts;
