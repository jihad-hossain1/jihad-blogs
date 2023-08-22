"use client";
import useAuth from "@/hooks/useAuth";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const LoginForm = () => {
  const { signIn, googleLogin } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data;
    const toastId = toast.loading("Loading....");
    try {
      const user = await signIn(email, password);
      toast.dismiss(toastId);
      toast.success("User signed in successfully");
    } catch (error) {
      toast.dismiss(toastId);
      toast.error(error.message || "User noat signed in");
    }
  };

  const handleGoogleLogin = async () => {
    const toastId = toast.loading("Loading....");
    try {
      const user = await googleLogin();
      toast.dismiss(toastId);
      toast.success("User signed in successfully");
    } catch (error) {
      toast.dismiss(toastId);
      toast.error(error.message || "User not signed in");
    }
  };
  return (
    <div className=" sm:max-w-[300px] md:max-w-[500px] mx-auto py-20 px-6">
      <form action="" onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <h4 className="text-3xl md:text-4xl text-center font-bold text-gray-600 py-2">
          Sign In
        </h4>
        {/* <div className="w-full">
          <label htmlFor="html" className="text-gray-600">
            Your Name<span className="text-pink-600">*</span>
          </label>
          <input
            type="text"
            name=""
            className="p-2 border border-sky-300 focus:outline-sky-300 w-full rounded shadow-sm focus:shadow "
            {...register("name", { required: true })}
            id=""
          />
          {errors.name && <span>This field is required</span>}
        </div> */}
        <div className="w-full">
          <label htmlFor="html" className="text-gray-600">
            Your Email<span className="text-pink-600">*</span>
          </label>
          <input
            type="email"
            name=""
            className="p-2 border border-sky-300 focus:outline-sky-300 w-full rounded shadow-sm focus:shadow "
            {...register("email", { required: true })}
            id=""
          />
          {errors.email && <span>This field is required</span>}
        </div>
        <div className="w-full">
          <label htmlFor="html" className="text-gray-600">
            Password<span className="text-pink-600">*</span>
          </label>
          <input
            type="password"
            name=""
            className="p-2 border border-sky-300 focus:outline-sky-300 w-full rounded shadow-sm focus:shadow "
            {...register("password", { required: true })}
            id=""
          />
          {errors.password && <span>This field is required</span>}
        </div>
        <div className="w-full pt-3">
          <input
            type="submit"
            name=""
            className="p-2 border border-sky-300 focus:outline-sky-300 w-full rounded shadow-sm focus:shadow cursor-pointer bg-sky-400 text-white dark:text-gray-700 hover:shadow-md"
            value="Submit"
          />
        </div>
      </form>
      <div className=" pt-3 text-center">
        <button
          onClick={handleGoogleLogin}
          className="max-w-[200px] mx-auto p-2 border border-sky-300 focus:outline-sky-300  rounded shadow-sm focus:shadow cursor-pointer  hover:shadow flex gap-2  items-center"
        >
          <FcGoogle className="shadow-sm text-2xl "></FcGoogle>
          LogIn
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
