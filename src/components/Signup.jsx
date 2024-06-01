import React, { useState } from "react";
import { Link,useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

export default function Signup() {
const location = useLocation();
const navigate=useNavigate();
const from =location.state?.from?.pathname || "/";

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

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    console.log(data);
    await axios
      .post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        //then means promise type either it resolve or rejects
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Successfully!");
          navigate(from,{replace:true});
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error:" + err.response.data.message);
        }
      });
  };
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
          <h2 className="text-2xl mb-4">Signup</h2>
          {/* form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block mb-2">Name:</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Enter your fullname"
                {...register("fullname", { required: true })}
              />
              {errors.fullname && (
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
              <label className="block mb-2">Password:</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Enter your password"
                {...register("password", { required: true })}
              />
              {errors.password && (
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
              Signup
            </button>
            <p className="mt-4">
              Have account?{" "}
              <button
                className="underline text-blue-500 cursor-pointer"
                onClick={showModal}
              >
                {" "}
                Login
              </button>
              <Login show={show} handleClose={handleClose} />
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
