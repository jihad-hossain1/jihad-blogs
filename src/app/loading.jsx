"use client";
import { Vortex } from "react-loader-spinner";
const loading = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-400px)]">
      <Vortex
        visible={true}
        height="120"
        width="120"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={["red", "green", "blue", "yellow", "orange", "purple"]}
      />
    </div>
  );
};

export default loading;
