import React from "react";

const BookingModal = ({ item }) => {
  const {
    name,
    category_id,
    details,
    image_url,
    location,
    original_price,
    rating,
    resale_price,
    yearsofUse,
  } = item;
  // console.log(item);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const date = form.date.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    console.log(date, name, email, phone);
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form
            onSubmit={handleBooking}
            className="mt-10 grid grid-cols-1 gap-3"
          >
            <input
              name="date"
              type="text"
              placeholder="Enter Date"
              className="input w-full input-bordered"
            />
            <input
              type="text"
              value={`Price: ${resale_price}$`}
              className="input w-full input-bordered"
              disabled
            />
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="input w-full input-bordered"
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              className="input w-full input-bordered"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input w-full input-bordered"
            />
            <br />
            <input
              className="btn btn-success w-full "
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
