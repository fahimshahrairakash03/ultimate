import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import banner from "../assets/banner.png";
import logo from "../assets/logo.png";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handlelogin = (data) => {
    console.log(data);
    fetch("https://test.nexisltd.com/login", {
      method: "POST",

      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.access_token) {
          toast.success("login successfull");
        }
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("refresh_token", data.refresh_token);
        navigate("/attendence");
      });
  };
  return (
    <div>
      <div className="flex sm:flex-col lg:flex-row  items-center">
        <div className="mr-36 banner">
          <img
            className="w-[612px] h-[437px] lg:my-28 lg:ml-32"
            src={banner}
            alt=""
          />
          <img className="logo" src={logo} alt="" />
        </div>
        <div>
          <div className="h-[630px] w-[516px] card w-96 bg-base-100 shadow-xl">
            <h1 className="signup text-center mx-30 my-28">Log In Form</h1>
            <form className="ml-[89px]" onSubmit={handleSubmit(handlelogin)}>
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
                className="btn-usercreate btn text-white ml-20 "
                value="Login"
                type="submit"
              />
            </form>
            <p className="ml-52 mt-24 ">
              Don't have an account?
              <Link className="text-blue-600 ml-3 " to="/">
                SIGNUP HERE
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
