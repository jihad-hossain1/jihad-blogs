"use client";
import { CirclesWithBar } from "react-loader-spinner";
const loading = () => {
  return (
    <div className="flex justify-center items-center mt-20">
      <CirclesWithBar
        height="100"
        width="100"
        color="#08C5C9"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        outerCircleColor=""
        innerCircleColor=""
        barColor=""
        ariaLabel="circles-with-bar-loading"
      />
    </div>
  );
};

export default loading;
