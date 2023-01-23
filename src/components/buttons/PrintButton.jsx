import { PrinterIcon } from "@heroicons/react/24/outline";
import React from "react";

const PrintButton = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button
      type="button"
      onClick={handlePrint}
      className="inline-flex items-center rounded-md border border-transparent bg-gray-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
    >
      Print
      <PrinterIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
    </button>
  );
};

export default PrintButton;
