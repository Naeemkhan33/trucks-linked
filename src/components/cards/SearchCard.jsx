import React from "react";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchCard = () => {
  return (
    <form
      noValidate
      className="w-full bg-white px-3 py-1 rounded-lg flex items-center"
    >
      <button
        type="submit"
        className="h-6 min-w-[1.5rem] w-6 p-1 bg-primary text-white rounded-full hover:opacity-80 active:scale-105 rotate-90"
      >
        <MagnifyingGlassIcon className="h-full w-full" />
      </button>
      <input
        className="flex-1 border-0 ml-3 text-base font-medium focus:shadow-none focus:outline-none focus:ring-primary"
        type="search"
        placeholder="Search..."
      />
    </form>
  );
};

export default SearchCard;
