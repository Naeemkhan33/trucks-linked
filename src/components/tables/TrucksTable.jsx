import { PlusIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";
import TableToolbarCard from "../cards/TableToolbarCard";

const TrucksTable = ({ rowsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const rows = [
    {
      unitID: "#1234567",
      vin: "Vin123ac76",
      make: "international",
      model: "LT@ Series",
      status: "Pending",
      aging: "64 days",
      date: "10/15/22",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      unitID: "#1234567",
      vin: "Vin123ac76",
      make: "international",
      model: "LT@ Series",
      status: "Sold",
      aging: "64 days",
      date: "10/15/22",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      unitID: "#1234567",
      vin: "Vin123ac76",
      make: "international",
      model: "LT@ Series",
      status: "Pending",
      aging: "64 days",
      date: "10/15/22",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      unitID: "#1234567",
      vin: "Vin123ac76",
      make: "international",
      model: "LT@ Series",
      status: "Sold",
      aging: "64 days",
      date: "10/15/22",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      unitID: "#1234567",
      vin: "Vin123ac76",
      make: "international",
      model: "LT@ Series",
      status: "Sold",
      aging: "64 days",
      date: "10/15/22",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      unitID: "#1234567",
      vin: "Vin123ac76",
      make: "international",
      model: "LT@ Series",
      status: "Sold",
      aging: "64 days",
      date: "10/15/22",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      unitID: "#1234567",
      vin: "Vin123ac76",
      make: "international",
      model: "LT@ Series",
      status: "Pending",
      aging: "64 days",
      date: "10/15/22",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      unitID: "#1234567",
      vin: "Vin123ac76",
      make: "international",
      model: "LT@ Series",
      status: "Sold",
      aging: "64 days",
      date: "10/15/22",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      unitID: "#1234567",
      vin: "Vin123ac76",
      make: "international",
      model: "LT@ Series",
      status: "Pending",
      aging: "64 days",
      date: "10/15/22",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      unitID: "#1234567",
      vin: "Vin123ac76",
      make: "international",
      model: "LT@ Series",
      status: "Sold",
      aging: "64 days",
      date: "10/15/22",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      unitID: "#1234567",
      vin: "Vin123ac76",
      make: "international",
      model: "LT@ Series",
      status: "Sold",
      aging: "64 days",
      date: "10/15/22",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      unitID: "#1234567",
      vin: "Vin123ac76",
      make: "international",
      model: "LT@ Series",
      status: "Sold",
      aging: "64 days",
      date: "10/15/22",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      unitID: "#1234567",
      vin: "Vin123ac76",
      make: "international",
      model: "LT@ Series",
      status: "Pending",
      aging: "64 days",
      date: "10/15/22",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      unitID: "#1234567",
      vin: "Vin123ac76",
      make: "international",
      model: "LT@ Series",
      status: "Sold",
      aging: "64 days",
      date: "10/15/22",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      unitID: "#1234567",
      vin: "Vin123ac76",
      make: "international",
      model: "LT@ Series",
      status: "Pending",
      aging: "64 days",
      date: "10/15/22",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      unitID: "#1234567",
      vin: "Vin123ac76",
      make: "international",
      model: "LT@ Series",
      status: "Sold",
      aging: "64 days",
      date: "10/15/22",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      unitID: "#1234567",
      vin: "Vin123ac76",
      make: "international",
      model: "LT@ Series",
      status: "Sold",
      aging: "64 days",
      date: "10/15/22",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      unitID: "#1234567",
      vin: "Vin123ac76",
      make: "international",
      model: "LT@ Series",
      status: "Sold",
      aging: "64 days",
      date: "10/15/22",
    },
  ];

  const lastIndex = currentPage * rowsPerPage;
  const firstIndex = lastIndex - rowsPerPage;
  const currentRows = rows.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(rows.length / rowsPerPage);

  return (
    <div>
      <div className="overflow-auto">
        <table className="table-auto w-full text-left border-collapse">
          <thead>
            <tr className="bg-sky-500 text-gray-100 capitalize">
              <th className="px-4 py-2 font-medium border-r-2 border-gray-300">
                <span className="sr-only">check box</span>
              </th>
              <th className="px-4 py-2 font-medium border-r-2 border-gray-300">
                Image
              </th>
              <th className="px-4 py-2 font-medium border-r-2 border-gray-300">
                Unit ID
              </th>
              <th className="px-4 py-2 font-medium border-r-2 border-gray-300">
                VIN
              </th>
              <th className="px-4 py-2 font-medium border-r-2 border-gray-300">
                Make
              </th>
              <th className="px-4 py-2 font-medium border-r-2 border-gray-300">
                Model
              </th>
              <th className="px-4 py-2 font-medium border-r-2 border-gray-300">
                tags
              </th>
              <th className="px-4 py-2 font-medium border-r-2 border-gray-300">
                aging
              </th>
              <th className="px-4 py-2 font-medium">toolbar</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((row, index) => (
              <tr key={`sales-row-${index}`} className="text-bodyText">
                <td className="px-4 py-4 uppercase">
                  <input
                    type="checkbox"
                    name={row.unitID}
                    id={row.unitID}
                    className="h-4 w-4 rounded border-gray-400 text-primary focus:ring-primary"
                  />
                </td>
                <td className="px-4 py-4 uppercase">
                  <div className="h-12 w-12 bg-gray-100 rounded-full">
                    <img
                      className="h-full w-full rounded-full"
                      src={`${
                        row.imageUrl
                          ? row.imageUrl
                          : "/assets/images/icon-0.png"
                      }`}
                      alt="..."
                    />
                  </div>
                </td>
                <td className="px-4 py-4 text-red-500 uppercase">
                  {row.unitID}
                </td>
                <td className="px-4 py-4 uppercase">{row.vin}</td>
                <td className="px-4 py-4 capitalize">{row.make}</td>
                <td className="px-4 py-4">{row.model}</td>
                <td className="px-4 py-4 capitalize">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      className="inline-flex items-center rounded border border-transparent active:scale-105 bg-primary px-2.5 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    >
                      New Inventory
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center rounded-md border border-transparent active:scale-105 bg-gray-100 px-2.5 py-1.5 text-xs font-semibold text-gray-500 hover:text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Add
                      <PlusIcon className="-mr-1 h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                </td>
                <td className="px-4 py-4 capitalize">{row.aging}</td>
                <td className="px-4 py-4 uppercase">
                  <TableToolbarCard />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex gap-2 items-center justify-between pt-4 mt-4 border-t-2 border-gray-200">
        <button
          className="bg-sky-100 text-sky-600 hover:bg-sky-500 hover:text-white py-1 px-4 rounded-md disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <div className="text-bodyText">
          {currentPage} of {totalPages}
        </div>
        <button
          className="bg-sky-100 text-sky-600 hover:bg-sky-500 hover:text-white py-1 px-4 rounded-md disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === Math.ceil(rows.length / rowsPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TrucksTable;
