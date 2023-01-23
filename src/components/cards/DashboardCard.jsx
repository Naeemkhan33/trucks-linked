import React from "react";

import { ChevronRightIcon, XMarkIcon } from "@heroicons/react/20/solid";

const DashboardCard = () => {
  return (
    <div className="bg-white p-4 rounded-lg">
      <div className="mb-4 flex">
        <div className="h-12 w-12 bg-gray-100 rounded-full mr-auto">
          <img
            className="h-full w-full rounded-full"
            src="/assets/images/icon-0.png"
            alt="..."
          />
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            className="h-8 w-8 bg-sky-400 rounded-full hover:opacity-80 active:scale-105 flex items-center justify-center"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="h-8 w-8 bg-gray-100 rounded-full hover:opacity-80 active:scale-105 flex items-center justify-center"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-3">
          <h4 className="text-bodyText line-clamp-1 capitalize">data title</h4>
          <h5 className="text-sky-300">+/-00%</h5>
        </div>
        <h3 className="text-bodyText text-xl xl:text-2xl font-medium uppercase line-clamp-1">
          $ 00,000,00
        </h3>
      </div>
    </div>
  );
};

export default DashboardCard;
