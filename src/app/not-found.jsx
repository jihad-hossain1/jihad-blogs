// import Image from "next/image";
import Link from "next/link";
// import React from "react";

const NotFound = () => {
  return (
    <>
      <div className="mt-10 text-center">
        <div className="avatar">
          <div className="max-w-[400px] rounded">
            <img src="https://i.ibb.co/68RV7XW/404.gif" alt="not found 404" />
          </div>
        </div>
        <div>
          <Link href="/" className="mt-5 mb-2 inline-block">
            <button className="btn btn-primary bg-blue-500">Go Home</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
