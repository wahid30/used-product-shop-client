import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../../../contexts/AuthProvider";

const BookingModal = ({ item, setItem }) => {
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
  const { user } = useContext(AuthContext);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const date = form.date.value;
    const itemName = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const meetingLocation = form.location.value;
    // console.log(date, name, email, phone);
    const booking = {
      bookingDate: date,
      item: name,
      customer: itemName,
      email,
      phone,
      meetingLocation,
      resale_price,
    };

    // console.log(booking);

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.acknowledged) {
          setItem(null);
          toast.success("Booking confirmed");
        } else {
          toast.error(data.message);
        }
      });
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
              defaultValue={user?.displayName}
              disabled
              placeholder="Your Name"
              className="input w-full input-bordered"
            />
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              disabled
              placeholder="Your Email"
              className="input w-full input-bordered"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input w-full input-bordered"
            />
            <input
              name="location"
              type="text"
              placeholder="Meeting Location"
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
