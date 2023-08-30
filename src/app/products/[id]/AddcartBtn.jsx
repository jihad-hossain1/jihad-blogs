"use client";
import React from "react";
import { toast } from "react-hot-toast";
import { TbGardenCart } from "react-icons/tb";

const AddcartBtn = ({ id }) => {
  let cart = [],
    isLoading;
  const isAlready = cart.findIndex((pd) => pd._id === id);

  const hadleAddToCart = async (id) => {
    try {
      const res = await fetch(`/api/cart?id=${id}`, {
        method: "POST",
      });
      const result = await res.json();
      if (result.added) {
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    } catch (error) {}
  };
  return (
    <>
      <button
        className="border border-sky-100 hover:border-sky-200 px-6 py-1 rounded shadow-sm hover:shadow flex items-center"
        onClick={() => hadleAddToCart(id)}
      >
        <TbGardenCart className="text-xl text-sky-600 hover:text-sky-700"></TbGardenCart>{" "}
        <span className="text-sm ml-2">Add to cart</span>
      </button>
    </>
  );
};

export default AddcartBtn;
