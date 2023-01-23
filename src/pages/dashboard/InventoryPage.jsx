import React from "react";
import DashboardCard from "../../components/cards/DashboardCard";
import TrucksTable from "../../components/tables/TrucksTable";

const cardsList = [{}, {}, {}, {}];

const InventoryPage = () => {
  const rowsPerPage = 5;

  return (
    <div className="mb-4">
      <section>
        <h3 className="text-bodyText text-xl font-semibold capitalize mb-4">
          Recent Activity
        </h3>
        <ul className="flex flex-wrap -mx-4 gap-y-4">
          {cardsList.map((index) => (
            <li
              key={`dashboard-card-${index}`}
              className="w-full sm:w-1/2 xl:w-1/4 px-4"
            >
              <DashboardCard />
            </li>
          ))}
        </ul>
      </section>
      <section className="mt-8">
        <div className="bg-white p-4 rounded-lg">
          <h3 className="text-bodyText text-xl font-semibold capitalize mb-4">
            Trucks (16)
          </h3>
          <TrucksTable rowsPerPage={rowsPerPage} />
        </div>
      </section>
    </div>
  );
};

export default InventoryPage;
