import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import banner from "../assets/banner.png";
import logo from "../assets/logo.png";
import "./Signup.css";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleSignup = (data) => {
    console.log(data);
    fetch("https://test.nexisltd.com/signup", {
      method: "POST",

      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="flex sm:flex-col lg:flex-row ">
      <div className="mr-36 banner">
        <img
          className="w-[612px] h-[437px] lg:my-28 lg:ml-32"
          src={banner}
          alt=""
        />
        <img className="logo" src={logo} alt="" />
      </div>
      <div>
        <div className="h-[930px] w-[516px] cardw-96 bg-base-100 shadow-xl">
          <form className="ml-[89px]" onSubmit={handleSubmit(handleSignup)}>
            <h1 className="signup text-center mx-30 my-28">SignUp Form</h1>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                className="input input-bordered w-full max-w-xs"
                type="text"
                {...register("first_name", {
                  required: "FirstName is required",
                })}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>
              <input
                className="input input-bordered w-full max-w-xs"
                type="text"
                {...register("last_Name", {
                  required: "Last Name is required",
                })}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                className="input input-bordered w-full max-w-xs"
                type="number"
                {...register("phone_number", {
                  required: "Phone Number is required",
                })}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                className="input input-bordered w-full max-w-xs"
                type="text"
                {...register("email", {
                  required: "Email Address is required",
                })}
              />
              {errors.email && (
                <p className="text-red-600 font-semibold">
                  {errors?.email?.message}
                </p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                className="input input-bordered w-full max-w-xs"
                type="password"
                {...register("password", {
                  required: "Password  is required",
                  minLength: {
                    value: 8,
                    message: "Password must be 8 character",
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-600 font-semibold">
                  {errors?.password?.message}
                </p>
              )}
              <label className="label">
                <span className="label-text">Forget Password?</span>
              </label>
            </div>

            <input
              className="btn-usercreate btn text-white mx-20 "
              value="Next Step"
              type="submit"
            />
            <div></div>
          </form>
          <p className="ml-52 mt-24 ">
            already have account?
            <Link className="text-blue-600 ml-3" to="/login">
              LOGIN
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
