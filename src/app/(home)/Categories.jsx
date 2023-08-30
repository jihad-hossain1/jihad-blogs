// "use client";
import React from "react";
import SingleCategory from "./SingleCategory";
import getCategories from "@/utils/getCategories";

const Categories = async () => {
  const categories = await getCategories();
  return (
    <div className="mt-14">
      <h4 className="mb-5 text-3xl font-semibold">Categories</h4>
      <div className="grid grid-cols-2 md:grid-cols-4 mb-5 p-3 gap-3">
        {categories.map((category, index) => (
          <SingleCategory key={index} category={category}></SingleCategory>
        ))}
      </div>
    </div>
  );
};

export default Categories;
