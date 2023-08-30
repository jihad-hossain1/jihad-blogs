import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleCategory = ({ category }) => {
  const { _id, imageUrl, name } = category;
  return (
    <Link href={`/products?categoryId=${_id}`}>
      <div className="card card-compact bg-base-100 shadow-2xl h-full justify-between border border-sky-100 hover:border-sky-300">
        <figure>
          <Image
            src={imageUrl}
            alt={name}
            width={300}
            height={300}
            className="max-h-[150px] sm:max-h-[250px] xl:max-h-[250px]"
          ></Image>
        </figure>
        <div className="card-body">
          <h2 className="card title">{name}</h2>
        </div>
      </div>
    </Link>
  );
};

export default SingleCategory;
