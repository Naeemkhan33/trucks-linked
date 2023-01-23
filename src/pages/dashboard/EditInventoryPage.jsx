import {
  PencilIcon,
  PencilSquareIcon,
  PlusCircleIcon,
  Squares2X2Icon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import ExportButton from "../../components/buttons/ExportButton";
import PrintButton from "../../components/buttons/PrintButton";
import CustomSelect from "../../components/inputs/CustomSelect";
import CustomToggle from "../../components/inputs/CustomToggle";

const people = [
  { name: "Wade Cooper" },
  { name: "Arlene Mccoy" },
  { name: "Devon Webb" },
  { name: "Tom Cook" },
  { name: "Tanya Fox" },
  { name: "Hellen Schmidt" },
  { name: "Caroline Schultz" },
  { name: "Mason Heaney" },
  { name: "Claudie Smitham" },
  { name: "Emil Schaefer" },
];

const EditInventoryPage = () => {
  return (
    <div className="mb-4">
      <section>
        <form noValidate>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
            <div className="space-y-7">
              <div className="bg-white p-4 rounded-lg">
                <div className="flex items-center mb-4">
                  <h3 className="text-bodyText text-xl font-semibold capitalize mr-auto">
                    Vehicle Data
                  </h3>
                  <h3 className="text-bodyText">ID: 123456</h3>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                  <li>
                    <div>
                      <label
                        htmlFor="DisplayTitle"
                        className="block font-medium text-bodyText mb-2 capitalize line-clamp-1"
                      >
                        Display Title
                      </label>

                      <input
                        type="text"
                        name="DisplayTitle"
                        id="DisplayTitle"
                        className="block w-full px-3 py-2 placeholder:font-medium placeholder:text-gray-400 rounded-md border border-gray-300 shadow-sm focus-visible:outline-none focus:border-primary focus:ring-primary sm:text-sm"
                        placeholder="New International LT 2022"
                      />
                    </div>
                    {/* === */}
                    <div className="mt-4">
                      <CustomSelect
                        placeholder="Default Select"
                        label="Make"
                        items={people}
                      />
                    </div>
                  </li>
                  <li>
                    <div className="h-full flex flex-col">
                      <label
                        htmlFor="description"
                        className="block font-medium text-bodyText mb-2 capitalize line-clamp-1"
                      >
                        description
                      </label>

                      <textarea
                        type="description"
                        name="description"
                        id="description"
                        className="block flex-1 min-h-[6rem] w-full px-3 py-2 placeholder:font-medium placeholder:text-gray-400 rounded-md border border-gray-300 shadow-sm focus-visible:outline-none focus:border-primary focus:ring-primary sm:text-sm"
                        placeholder="..."
                      />
                    </div>
                  </li>
                  <li>
                    <div>
                      <CustomSelect
                        placeholder="Default Select"
                        label="Year"
                        items={people}
                      />
                    </div>
                  </li>
                  <li>
                    <div>
                      <CustomSelect
                        placeholder="Default Select"
                        label="Model"
                        items={people}
                      />
                    </div>
                  </li>
                  <li>
                    <div>
                      <label
                        htmlFor="GVW"
                        className="block font-medium text-bodyText mb-2 capitalize line-clamp-1"
                      >
                        GVW
                      </label>

                      <input
                        type="text"
                        name="GVW"
                        id="GVW"
                        className="block w-full px-3 py-2 placeholder:font-medium placeholder:text-gray-400 rounded-md border border-gray-300 shadow-sm focus-visible:outline-none focus:border-primary focus:ring-primary sm:text-sm"
                        placeholder="New International LT 2022"
                      />
                    </div>
                  </li>
                  <li>
                    <div>
                      <label
                        htmlFor="VINNumber"
                        className="block font-medium text-bodyText mb-2 capitalize line-clamp-1"
                      >
                        VIN Number
                      </label>

                      <input
                        type="text"
                        name="VINNumber"
                        id="VINNumber"
                        className="block w-full px-3 py-2 placeholder:font-medium placeholder:text-gray-400 rounded-md border border-gray-300 shadow-sm focus-visible:outline-none focus:border-primary focus:ring-primary sm:text-sm"
                        placeholder="New International LT 2022"
                      />
                    </div>
                  </li>
                  <li>
                    <div>
                      <label
                        htmlFor="ListPrice"
                        className="block font-medium text-bodyText mb-2 capitalize line-clamp-1"
                      >
                        List Price
                      </label>

                      <input
                        type="text"
                        name="ListPrice"
                        id="ListPrice"
                        className="block w-full px-3 py-2 placeholder:font-medium placeholder:text-gray-400 rounded-md border border-gray-300 shadow-sm focus-visible:outline-none focus:border-primary focus:ring-primary sm:text-sm"
                        placeholder="New International LT 2022"
                      />
                    </div>
                  </li>
                  <li>
                    <div>
                      <CustomToggle textOnLeft label="Sale Price" />
                      <input
                        type="text"
                        name="SalePrice"
                        id="SalePrice"
                        className="block w-full px-3 py-2 placeholder:font-medium placeholder:text-gray-400 rounded-md border border-gray-300 shadow-sm focus-visible:outline-none focus:border-primary focus:ring-primary sm:text-sm"
                        placeholder="New International LT 2022"
                      />
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <div className="flex items-center mb-4">
                  <h3 className="text-bodyText text-xl font-semibold capitalize mr-auto">
                    Status
                  </h3>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                  <li className="sm:col-span-2 xl:col-span-2">
                    <div className="flex flex-wrap gap-6 sm:gap-10 xl:gap-12">
                      <div>
                        <CustomToggle label="Active" />
                      </div>
                      <div>
                        <CustomToggle label="Trucks Rated" />
                      </div>
                      <div>
                        <CustomToggle label="Dealer Website" />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <CustomSelect
                        placeholder="Default Select"
                        label="Location"
                        items={people}
                      />
                    </div>
                  </li>
                  <li>
                    <div>
                      <CustomSelect
                        placeholder="Default Select"
                        label="Rep Contact"
                        items={people}
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-7">
              <div className="bg-white p-4 rounded-lg">
                <ul className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-6">
                  <li className="sm:col-span-2">
                    <h3 className="text-bodyText text-xl font-semibold capitalize mb-3">
                      Images
                    </h3>
                    <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-1 sm:h-[15rem] lg:h-auto xl:h-[15rem]">
                      <div className="flex-1 bg-gray-100 rounded-lg h-64 sm:h-[103%] lg:h-64 xl:h-[103%]">
                        <label
                          htmlFor="cover-image"
                          className="block h-full w-full cursor-pointer hover:opacity-80"
                        >
                          <img
                            className="block h-full w-full rounded-lg object-cover"
                            src="/assets/images/placeholder.png"
                            alt="..."
                          />
                        </label>
                        <input
                          type="file"
                          name="cover-image"
                          id="cover-image"
                          className="hidden"
                        />
                      </div>
                      <div className="flex sm:block sm:space-y-1 sm:w-1/3 lg:space-y-0 lg:w-full lg:flex xl:block xl:space-y-1 xl:w-1/3 gap-1 h-full">
                        <div className="bg-gray-100 rounded-lg flex-1 h-20 sm:h-1/3 lg:h-24 xl:h-1/3">
                          <img
                            className="block h-full w-full rounded-lg object-cover"
                            src="/assets/images/placeholder.png"
                            alt="..."
                          />
                        </div>
                        <div className="bg-gray-100 rounded-lg flex-1 h-20 sm:h-1/3 lg:h-24 xl:h-1/3">
                          <img
                            className="block h-full w-full rounded-lg object-cover"
                            src="/assets/images/placeholder.png"
                            alt="..."
                          />
                        </div>
                        <div className="bg-gray-100 rounded-lg flex-1 h-20 sm:h-1/3 lg:h-24 xl:h-1/3">
                          <img
                            className="block h-full w-full rounded-lg object-cover"
                            src="/assets/images/placeholder.png"
                            alt="..."
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-col h-full">
                      <div>
                        <h3 className="text-bodyText text-lg font-medium capitalize text-right mb-3">
                          Image Count
                        </h3>
                        <span className="isolate inline-flex flex-row sm:flex-col lg:flex-row rounded-md shadow-sm w-full items-end justify-end">
                          <button
                            type="button"
                            className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white focus:bg-primary focus:text-white px-4 py-2 text-sm font-medium text-gray-400 hover:bg-gray-50 focus:z-10 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                          >
                            <PlusCircleIcon className="h-5 w-5" />
                          </button>
                          <button
                            type="button"
                            className="relative -ml-px inline-flex items-center border border-gray-300 bg-white focus:bg-primary focus:text-white px-4 py-2 text-sm font-medium text-gray-400 hover:bg-gray-50 focus:z-10 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                          >
                            <PencilIcon className="h-5 w-5" />
                          </button>
                          <button
                            type="button"
                            className="relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 bg-white focus:bg-primary focus:text-white px-4 py-2 text-sm font-medium text-gray-400 hover:bg-gray-50 focus:z-10 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                          >
                            <Squares2X2Icon className="h-5 w-5" />
                          </button>
                        </span>
                      </div>
                      <div className="mt-auto pt-6">
                        <h3 className="text-bodyText text-right text-lg font-medium capitalize mb-3">
                          OEM Logo
                        </h3>
                        <div className="bg-gray-100 rounded-lg h-32 w-32 ml-auto">
                          <label
                            htmlFor="cover-image"
                            className="block h-full w-full cursor-pointer hover:opacity-80"
                          >
                            <img
                              className="block h-full w-full rounded-lg object-cover"
                              src="/assets/images/placeholder.png"
                              alt="..."
                            />
                          </label>
                          <input
                            type="file"
                            name="cover-image"
                            id="cover-image"
                            className="hidden"
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <div className="flex items-center mb-4">
                  <h3 className="text-bodyText text-xl font-semibold capitalize mr-auto">
                    Detailed Specs
                  </h3>
                </div>
                <ul className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                  <li className="col-span-3 sm:col-span-2 lg:col-span-3 xl:col-span-2">
                    <div>
                      <label
                        htmlFor="Mileage"
                        className="block font-medium text-bodyText mb-2 capitalize line-clamp-1"
                      >
                        Mileage
                      </label>

                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          name="Mileage"
                          id="Mileage"
                          className="block w-full px-3 py-2 placeholder:font-medium placeholder:text-gray-400 rounded-md border border-gray-300 shadow-sm focus-visible:outline-none focus:border-primary focus:ring-primary sm:text-sm"
                          placeholder="000..."
                        />
                        <div className="w-[70px]">
                          <CustomSelect placeholder="mi" items={people} />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <CustomToggle label="DOT" />
                    </div>
                  </li>
                  <li>
                    <div>
                      <CustomToggle label="Operable" />
                    </div>
                  </li>
                  <li>
                    <div>
                      <CustomToggle label="Rebuilt Title" />
                    </div>
                  </li>
                  <li className="col-span-3 sm:col-span-2 lg:col-span-3 xl:col-span-2">
                    <div>
                      <label
                        htmlFor="Horsepower"
                        className="block font-medium text-bodyText mb-2 capitalize line-clamp-1"
                      >
                        Horsepower
                      </label>

                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          name="Horsepower"
                          id="Horsepower"
                          className="block w-full px-3 py-2 placeholder:font-medium placeholder:text-gray-400 rounded-md border border-gray-300 shadow-sm focus-visible:outline-none focus:border-primary focus:ring-primary sm:text-sm"
                          placeholder="000..."
                        />
                        <div className="w-[70px]">
                          <CustomSelect placeholder="hp" items={people} />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <label
                        htmlFor="EngineOEM"
                        className="block font-medium text-bodyText mb-2 capitalize line-clamp-1"
                      >
                        Engine OEM
                      </label>
                      <input
                        type="text"
                        name="EngineOEM"
                        id="EngineOEM"
                        className="block w-full px-3 py-2 placeholder:font-medium placeholder:text-gray-400 rounded-md border border-gray-300 shadow-sm focus-visible:outline-none focus:border-primary focus:ring-primary sm:text-sm"
                        placeholder="000..."
                      />
                    </div>
                  </li>
                  <li>
                    <div>
                      <label
                        htmlFor="EngineModel"
                        className="block font-medium text-bodyText mb-2 capitalize line-clamp-1"
                      >
                        Engine Model
                      </label>
                      <input
                        type="text"
                        name="EngineModel"
                        id="EngineModel"
                        className="block w-full px-3 py-2 placeholder:font-medium placeholder:text-gray-400 rounded-md border border-gray-300 shadow-sm focus-visible:outline-none focus:border-primary focus:ring-primary sm:text-sm"
                        placeholder="000..."
                      />
                    </div>
                  </li>
                  <li>
                    <div>
                      <CustomSelect
                        label="Fuel Type"
                        placeholder="Diesel"
                        items={people}
                      />
                    </div>
                  </li>
                  <li className="col-span-3 sm:col-span-2 lg:col-span-3 xl:col-span-2">
                    <div>
                      <CustomSelect
                        label="Transmission"
                        placeholder="Automatic"
                        items={people}
                      />
                    </div>
                  </li>
                  <li>
                    <div>
                      <CustomSelect
                        label="Drive"
                        placeholder="4x2"
                        items={people}
                      />
                    </div>
                  </li>
                  <li>
                    <div>
                      <CustomSelect
                        label="Suspension"
                        placeholder="Air Ride"
                        items={people}
                      />
                    </div>
                  </li>
                  <li>
                    <div>
                      <CustomSelect
                        label="Axles"
                        placeholder="Single"
                        items={people}
                      />
                    </div>
                  </li>
                  <li className="col-span-3 sm:col-span-2 lg:col-span-3 xl:col-span-2">
                    <div>
                      <CustomSelect
                        label="GVW Rating"
                        placeholder="Class 6: 19k - 26k lbs"
                        items={people}
                      />
                    </div>
                  </li>
                  <li>
                    <div>
                      <CustomSelect
                        label="Wheelbase"
                        placeholder="4x2"
                        items={people}
                      />
                    </div>
                  </li>
                  <li>
                    <div>
                      <CustomSelect
                        label="Color"
                        placeholder="Air Ride"
                        items={people}
                      />
                    </div>
                  </li>
                  <li>
                    <div>
                      <CustomSelect
                        label="Length"
                        placeholder="Single"
                        items={people}
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* buttons */}
          <div className="mt-6 flex flex-wrap gap-3">
            <PrintButton />
            <ExportButton />
            <button
              type="button"
              className="inline-flex items-center rounded-md border border-transparent bg-primary px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 md:mr-auto"
            >
              Save
              <PencilSquareIcon
                className="ml-3 -mr-1 h-5 w-5"
                aria-hidden="true"
              />
            </button>
            <button
              type="button"
              className="inline-flex items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Delete
              <XCircleIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default EditInventoryPage;
