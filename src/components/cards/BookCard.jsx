import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ items }) => {
  return (
    <Link
      to="/"
      className="block text-center transition-transform duration-300 hover:scale-105"
    >
      <span className="block h-[25rem] mx-auto">
        <img
          className="block h-full w-full object-contain"
          src={`${
            items.imageURL ? items.imageURL : "/assets/images/about-img.png"
          } `}
          alt=".."
        />
      </span>
      <h6 className="mt-2 text-xl font-title font-bold uppercase">
        {items.title}
      </h6>
    </Link>
  );
};

export default BookCard;
