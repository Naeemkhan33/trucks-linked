import React from "react";
import Chart from "react-apexcharts";

const DashboardCharts = () => {
  const options = {
    chart: {
      type: "line",
      dropShadow: {
        enabled: true,
        color: "#000",
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2,
      },
      toolbar: {
        show: false,
      },
    },
    series: [
      {
        name: "High - 2013",
        data: [28, 29, 33, 36, 32, 32, 33],
      },
      {
        name: "Low - 2013",
        data: [12, 11, 14, 18, 17, 13, 13],
      },
    ],
    colors: ["#58C0EE", "#7A48DE"],
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: "smooth",
    },

    grid: {
      borderColor: "#e7e7e7",
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    markers: {
      size: 1,
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      //   title: {
      //     text: "Month",
      //   },
    },
    yaxis: {
      //   title: {
      //     text: "Temperature",
      //   },
      min: 5,
      max: 40,
    },
    legend: {
      position: "bottom",
      horizontalAlign: "center",
      floating: false,
      offsetY: 7,
      offsetX: 0,
    },
    // responsive: [
    //   {
    //     breakpoint: 600,
    //     options: {
    //       legend: {
    //         position: "bottom",
    //         horizontalAlign: "center",
    //         floating: false,
    //         offsetY: 7,
    //         offsetX: 0,
    //       },
    //     },
    //   },
    // ],
  };

  return (
    <div>
      <div className="px-2 sm:px-0 flex items-center gap-4 flex-wrap">
        <h3 className="text-bodyText text-xl font-semibold capitalize mr-auto">
          Inventory Report
        </h3>
        <select className="capitalize rounded-md border-gray-200 hover:border-primary focus:border-primary focus:shadow-none focus:outline-none focus:ring-0">
          <option value="-" disabled selected>
            Sort Report
          </option>
          <option value="one">one</option>
          <option value="two">two</option>
        </select>
      </div>
      <div className="min-h-[22rem]">
        <Chart
          options={options}
          series={options.series}
          type={options.chart.type}
          width="100%"
          height="100%"
          className="h-full w-full"
        />
      </div>
    </div>
  );
};

export default DashboardCharts;
