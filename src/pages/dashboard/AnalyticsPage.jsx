import React from "react";
import RecentlyCard from "../../components/cards/RecentlyCard";
import DashboardCharts from "../../components/charts/DashboardCharts";
import SalesReportTable from "../../components/tables/SalesReportTable";

const recentlyList = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

const AnalyticsPage = () => {
  const rowsPerPage = 4;

  return (
    <div className="mb-4">
      <section>
        <div className="flex flex-wrap -mx-4 gap-y-4">
          <div className="px-4 w-full xl:w-2/3">
            <div className=" bg-white px-1 sm:p-4 py-4 rounded-lg">
              <DashboardCharts />
            </div>
          </div>
          <div className="px-4 flex-1">
            <div className="bg-white p-4 rounded-lg sticky top-24">
              <h3 className="text-bodyText text-xl font-semibold capitalize mb-4">
                Data Options
              </h3>
              <ul className="space-y-4">
                {recentlyList.slice(0, 5).map((index) => (
                  <li key={`recently-${index}`}>
                    <RecentlyCard />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-8">
        <div className="bg-white p-4 rounded-lg">
          <h3 className="text-bodyText text-xl font-semibold capitalize mb-4">
            Activity Report
          </h3>
          <SalesReportTable rowsPerPage={rowsPerPage} />
        </div>
      </section>
    </div>
  );
};

export default AnalyticsPage;
