import React, { useState } from "react";

const SalesReportTable = ({ rowsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const rows = [
    {
      unitID: "#1234567",
      vin: "Vin123ac76",
      make: "international",
      model: "LT@ Series",
      status: "Pending",
      rep: "Mark@Email.com",
      date: "10/15/22",
    },
    {
      unitID: "#1234567",
      vin: "Vin123ac76",
      make: "international",
      model: "LT@ Series",
      status: "Sold",
      rep: "Mark@Email.com",
      date: "10/15/22",
    },
    {
      unitID: "#1234567",
      vin: "Vin123ac76",
      make: "international",
      model: "LT@ Series",
      status: "Pending",
      rep: "Mark@Email.com",
      date: "10/15/22",
    },
    {
      unitID: "#1234567",
      vin: "Vin123ac76",
      make: "international",
      model: "LT@ Series",
      status: "Sold",
      rep: "Mark@Email.com",
      date: "10/15/22",
    },
    {
      unitID: "#1234567",
      vin: "Vin123ac76",
      make: "international",
      model: "LT@ Series",
      status: "Sold",
      rep: "Mark@Email.com",
      date: "10/15/22",
    },
    {
      unitID: "#1234567",
      vin: "Vin123ac76",
      make: "international",
      model: "LT@ Series",
      status: "Sold",
      rep: "Mark@Email.com",
      date: "10/15/22",
    },
    {
      unitID: "#1234567",
      vin: "Vin123ac76",
      make: "international",
      model: "LT@ Series",
      status: "Pending",
      rep: "Mark@Email.com",
      date: "10/15/22",
    },
    {
      unitID: "#1234567",
      vin: "Vin123ac76",
      make: "international",
      model: "LT@ Series",
      status: "Sold",
      rep: "Mark@Email.com",
      date: "10/15/22",
    },
    {
      unitID: "#1234567",
      vin: "Vin123ac76",
      make: "international",
      model: "LT@ Series",
      status: "Pending",
      rep: "Mark@Email.com",
      date: "10/15/22",
    },
    {
      unitID: "#1234567",
      vin: "Vin123ac76",
      make: "international",
      model: "LT@ Series",
      status: "Sold",
      rep: "Mark@Email.com",
      date: "10/15/22",
    },
    {
      unitID: "#1234567",
      vin: "Vin123ac76",
      make: "international",
      model: "LT@ Series",
      status: "Sold",
      rep: "Mark@Email.com",
      date: "10/15/22",
    },
    {
      unitID: "#1234567",
      vin: "Vin123ac76",
      make: "international",
      model: "LT@ Series",
      status: "Sold",
      rep: "Mark@Email.com",
      date: "10/15/22",
    },
    {
      unitID: "#1234567",
      vin: "Vin123ac76",
      make: "international",
      model: "LT@ Series",
      status: "Pending",
      rep: "Mark@Email.com",
      date: "10/15/22",
    },
    {
      unitID: "#1234567",
      vin: "Vin123ac76",
      make: "international",
      model: "LT@ Series",
      status: "Sold",
      rep: "Mark@Email.com",
      date: "10/15/22",
    },
    {
      unitID: "#1234567",
      vin: "Vin123ac76",
      make: "international",
      model: "LT@ Series",
      status: "Pending",
      rep: "Mark@Email.com",
      date: "10/15/22",
    },
    {
      unitID: "#1234567",
      vin: "Vin123ac76",
      make: "international",
      model: "LT@ Series",
      status: "Sold",
      rep: "Mark@Email.com",
      date: "10/15/22",
    },
    {
      unitID: "#1234567",
      vin: "Vin123ac76",
      make: "international",
      model: "LT@ Series",
      status: "Sold",
      rep: "Mark@Email.com",
      date: "10/15/22",
    },
    {
      unitID: "#1234567",
      vin: "Vin123ac76",
      make: "international",
      model: "LT@ Series",
      status: "Sold",
      rep: "Mark@Email.com",
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
                Status
              </th>
              <th className="px-4 py-2 font-medium border-r-2 border-gray-300">
                Rep
              </th>
              <th className="px-4 py-2 font-medium">Date</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((row, index) => (
              <tr key={`sales-row-${index}`} className="text-bodyText">
                <td className="px-4 py-4 text-red-500 uppercase">
                  {row.unitID}
                </td>
                <td className="px-4 py-4 uppercase">{row.vin}</td>
                <td className="px-4 py-4 capitalize">{row.make}</td>
                <td className="px-4 py-4">{row.model}</td>
                <td className="px-4 py-4 capitalize">{row.status}</td>
                <td className="px-4 py-4 text-red-500">{row.rep}</td>
                <td className="px-4 py-4 uppercase">{row.date}</td>
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

export default SalesReportTable;
