import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../context/useAuth";
import "./Booking.css";

const Booking = () => {
  const { packageId } = useParams();
  const [singlePackage, setSinglePackage] = useState({});
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();

  const onSubmit = (data) => {
    const orderStatus = "pending";
    data.orderStatus = orderStatus;

    console.log(data);

    axios
      .post("https://travel-mate-server.onrender.com/orders", data)
      .then((res) => {
        if (res.data.insertedId) {
          console.log(res.data);
          alert("Added Successfully");
          reset();
        }
      });
  };

  useEffect(() => {
    fetch(`https://travel-mate-server.onrender.com/packages/${packageId}`)
      .then((res) => res.json())
      .then((data) => setSinglePackage(data));
  }, []);

  return (
    <div className="booking-page">
      <h2 className="text-success fw-bold pt-3 mx-3 pb-3 fs-3 text-uppercase">
        Package title: {singlePackage.title}
      </h2>
      <br />

      <div className="package-info text-white">
        <div className=" text-start">
          <div>
            <img className="w-100" src={singlePackage.img} alt="" />
          </div>
          <h2>{singlePackage.title}</h2>
          <h3>
            <i class="fas fa-map-marker-alt"></i> {singlePackage.location}
          </h3>
          <p className="fs-5">{singlePackage.description}</p>
          <h3>
            Price: {singlePackage.price} <i class="fas fa-dollar-sign"></i>
          </h3>
        </div>
      </div>

      <div className="package-info ">
        <h2 className="text-white">FillUp this form to Place Order</h2>
        <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
          <input className="form-control" defaultValue={user.displayName} {...register("name")} />

          <input className="form-control"
            defaultValue={user.email}
            placeholder="Email"
            {...register("email", { required: true })}
          />

          {errors.email && (
            <span className="error">This field is required</span>
          )}

          <input className="form-control"
            placeholder="Price"
            defaultValue={singlePackage.price}
            {...register("price")}
          />
          <input className="form-control"
            placeholder="Package Title"
            defaultValue={singlePackage.title}
            {...register("title")}
          />
          <input className="form-control"
            placeholder="Address"
            defaultValue=""
            {...register("address")}
          />

          <input className="form-control"
            placeholder="Phone No."
            defaultValue=""
            {...register("phone")}
          />
          <input className="form-control btn btn-primary" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Booking;
