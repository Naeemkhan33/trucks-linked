import React from "react";

const RecentlyCard = () => {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <div className="h-14 w-14 border border-gray-300 bg-gray-100 rounded-full">
        <img
          className="h-full w-full rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="..."
        />
      </div>
      <div>
        <h4 className="text-bodyText/50 font-medium line-clamp-1 capitalize">
          Truck ID/VIN
        </h4>
        <h6 className="text-bodyText text-xs line-clamp-1 capitalize">
          Day Month, Year
        </h6>
      </div>
      <div className="ml-auto">
        <h5 className="text-sky-300">+/-00%</h5>
      </div>
    </div>
  );
};

export default RecentlyCard;
