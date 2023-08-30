import React from "react";
import SingleProduct from "./SingleProduct";
import getProducts from "@/utils/getProducts";

export const revalidate = 0;

export const metadata = {
  title: "Products - Jihad Blogs",
};

const ProductPage = async ({ searchParams: { categoryId } }) => {
  const products = await getProducts(categoryId);
  console.log(products, "<----- ProductPage here ------->");
  return (
    <div className="mt-10">
      {products || products.length === 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-5">
          {products.map((product) => (
            <SingleProduct product={product} key={product._id}></SingleProduct>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <h4 className="text-4xl text-gray-950 font-bold">
            No Product Found!
          </h4>
          <p>Please Wait a minute...............</p>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
