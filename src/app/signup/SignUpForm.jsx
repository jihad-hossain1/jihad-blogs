"use client";
import useAuth from "@/hooks/useAuth";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { FaEye } from "react-icons/fa";
import createJWT from "@/utils/createJWT";
import { useRouter, useSearchParams } from "next/navigation";
// import { useRouter } from "next/router";

const SignUpForm = () => {
  const { createUser, profileUpdate, googleLogin } = useAuth();
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const search = useSearchParams();
  const from = search.get("redirectUrl") || "/";
  const { replace } = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
    setValue,
    getValues,
  } = useForm();

  const uploadImage = async (event) => {
    const formData = new FormData();
    if (!event.target.files[0]) return;
    formData.append("image", event.target.files[0]);
    const toastId = toast.loading("Image uploading...");
    try {
      const res = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
        {
          method: "POST",
          body: formData,
        }
      );
      if (!res.ok) throw new Error("Faild to upload image");
      const data = await res.json();
      console.log(data);
      toast.dismiss(toastId);
      toast.success("iMage uploaded successfully!");
      setValue("photo", data.data.url);
    } catch (error) {
      toast.error("iMage not uploaded");
      toast.dismiss(toastId);
    }
  };

  const onSubmit = async (data) => {
    const { name, email, password, photo } = data;

    const toastId = toast.loading("Loading....");
    try {
      const user = await createUser(email, password);
      await createJWT({ email });
      await profileUpdate({
        displayName: name,
        photoURL: photo,
      });
      toast.dismiss(toastId);
      toast.success("User signed in successfully");
      replace(from);
      // reset();
    } catch (error) {
      toast.dismiss(toastId);
      toast.error(error.message || "User noat signed in");
    }
  };

  const handleGoogleLogin = async () => {
    const toastId = toast.loading("Loading....");
    try {
      const { user } = await googleLogin();
      createJWT({ email: user.email });
      toast.dismiss(toastId);
      toast.success("User signed in successfully");
      replace(from);
    } catch (error) {
      toast.dismiss(toastId);
      toast.error(error.message || "User not signed in");
    }
  };
  return (
    <div className=" sm:max-w-[300px] md:max-w-[500px] mx-auto py-20 px-6">
      <form action="" onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <h4 className="text-3xl md:text-4xl text-center font-bold text-gray-600 py-2">
          Sign Up
        </h4>
        <div className="w-full">
          <label htmlFor="name" className="text-gray-600 label label-text">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            autoComplete="name"
            className="p-2 border border-sky-300 focus:outline-sky-300 w-full rounded shadow-sm focus:shadow "
            {...register("name", { required: true })}
            id="name"
          />
          {errors.name && <span className="text-sm">Enter your full name</span>}
        </div>
        <div className="w-full">
          <label htmlFor="html" className="text-gray-600 label label-text">
            Your Email
          </label>
          <input
            autoComplete="email"
            type="email"
            name=""
            className="p-2 border border-sky-300 focus:outline-sky-300 w-full rounded shadow-sm focus:shadow "
            {...register("email", { required: true })}
            id=""
          />
          {errors.email && (
            <span className="text-sm">Enter a valid email address</span>
          )}
        </div>
        <div className="w-full ab">
          <label htmlFor="html" className="text-gray-600 label label-text">
            Password
          </label>
          <input
            id="password"
            name="password"
            autoComplete="new-password"
            type={passwordShown ? "text" : "password"}
            className="p-2 border border-sky-300 focus:outline-sky-300 w-full rounded shadow-sm focus:shadow "
            {...register("password", { required: true, minLength: 6 })}
          />

          {errors.password && (
            <span className="text-sm">Please enter a valid password</span>
          )}
        </div>
        <div className="w-full relative">
          <label htmlFor="html" className="text-gray-600 label label-text">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            autoComplete="new-password"
            type={passwordShown ? "text" : "password"}
            className="p-2 border border-sky-300 focus:outline-sky-300 w-full rounded shadow-sm focus:shadow "
            {...register("confirmPassword", {
              required: true,
              minLength: 6,
              validate: (value) =>
                value === getValues("password") ||
                "The passwords do not match.",
            })}
          />
          <FaEye
            onClick={togglePasswordVisiblity}
            className="absolute top-11 text-xl text-gray-600  right-6 hover:text-sky-600 cursor-pointer"
          ></FaEye>
          {errors.confirmPassword && (
            <span className="text-red-500  mt-1 text-sm">
              {errors.confirmPassword.message ||
                "Please confirm your password."}
            </span>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="photo" className="label label-text">
            Upload Photo
          </label>
          <input
            type="file"
            id="photo"
            required
            onChange={uploadImage}
            className="file-input file-input-bordered file-input-[#00000] w-full"
          />
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

export default SignUpForm;
