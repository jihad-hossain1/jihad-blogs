import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const productsLoading = () => {
  return (
    <div>
      <div className="w-full">
        <Skeleton count={30}></Skeleton>
      </div>
    </div>
  );
};

export default productsLoading;
