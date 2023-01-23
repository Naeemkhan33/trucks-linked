import React, { useState } from "react";
import {
  PencilSquareIcon,
  PhotoIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const TableToolbarCard = () => {
  const [addFavorite, setAddFavorite] = useState(false);
  return (
    <div className="p-2 bg-gray-100 rounded-md flex items-center justify-center gap-3">
      <button
        type="button"
        onClick={() => setAddFavorite(!addFavorite)}
        className={` hover:text-bodyText active:scale-105 ${
          addFavorite ? "text-bodyText" : "text-primary"
        } `}
      >
        <StarIcon className="h-4 w-4" />
      </button>
      <button
        type="button"
        className="text-gray-400 hover:text-bodyText active:scale-105"
      >
        <PhotoIcon className="h-4 w-4" />
      </button>
      <Link
        to="/inventory/edit-inventory"
        className="text-gray-400 hover:text-bodyText active:scale-105"
      >
        <PencilSquareIcon className="h-4 w-4" />
      </Link>
    </div>
  );
};

export default TableToolbarCard;
