import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Contact() {
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  //   submit function
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg relative border md:w-1/3">
          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            onClick={handleClose}
          >
            X
          </Link>
          <h2 className="text-2xl mb-4">Contact US</h2>
          {/* form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block mb-2">Name:</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Enter your fullname"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="mb-4">
              <label className="block mb-2">Email:</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Enter your email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="mb-4">
              <label className="block mb-2">Message:</label>
              <input
                type="textarea"
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Enter your message"
                {...register("message", { required: true })}
              />
              {errors.message && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            {/* button */}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
