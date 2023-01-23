import React, { useState } from "react";

import { CloudArrowUpIcon } from "@heroicons/react/24/outline";

function ExportButton() {
  const [data, setData] = useState({ name: "John", age: 25 });
  const handleExport = () => {
    const dataStr = JSON.stringify(data);
    const dataUri =
      "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);
    const exportFileDefaultName = "data.txt";
    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", dataUri);
    linkElement.setAttribute("download", exportFileDefaultName);
    linkElement.click();
  };

  return (
    <button
      type="button"
      onClick={handleExport}
      className="inline-flex items-center rounded-md border border-transparent bg-sky-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
    >
      Export
      <CloudArrowUpIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
    </button>
  );
}

export default ExportButton;
