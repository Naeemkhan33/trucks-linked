import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex flex-shrink-0 items-center px-4">
      <div className="relative">
        <img
          className="h-14 w-auto"
          src="/assets/images/logo-2.png"
          alt="logo"
        />
      </div>
      <div className="ml-2">
        <h4 className="text-orange-500 text-base font-extrabold">
          Trucks Linked
        </h4>
        <p className="text-gray-300 text-xs font-bold uppercase tracking-widest">
          Inventory
        </p>
      </div>
    </Link>
  );
};

export default Logo;
