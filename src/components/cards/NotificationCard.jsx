import React from "react";

import { BellAlertIcon } from "@heroicons/react/24/outline";

const NotificationCard = () => {
  return (
    <div className="h-full bg-white flex items-center justify-center rounded-lg p-2">
      <button
        type="button"
        className="h-7 w-7 p-1 bg-primary text-white rounded-full hover:opacity-80 active:scale-105"
      >
        <BellAlertIcon className="h-full w-full" />
      </button>
    </div>
  );
};

export default NotificationCard;
