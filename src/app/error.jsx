"use client";

import React, { useEffect } from "react";

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div className="text-center">
      <h1 className="text-2xl font-semibold text-red-500">
        {error.message || "Something went wrong happened!"}
      </h1>
      <button className="btn btn-primary bg-sky-500" onClick={() => reset()}>
        Reset
      </button>
    </div>
  );
};

export default Error;
