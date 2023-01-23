import React from "react";
import SalesReportTable from "../../components/tables/SalesReportTable";

const SalesReportPage = () => {
  const rowsPerPage = 7;

  return (
    <div className="mb-4">
      <section>
        <div className="bg-white p-4 rounded-lg">
          <h3 className="text-bodyText text-xl font-semibold capitalize mb-4">
            Sales Report
          </h3>
          <SalesReportTable rowsPerPage={rowsPerPage} />
        </div>
      </section>
    </div>
  );
};

export default SalesReportPage;
