import React from "react";

const FeatureSortCard = () => {
  return (
    <div className="bg-white rounded-lg px-3 py-1">
      <select className="border-0 w-full capitalize focus:shadow-none focus:outline-none focus:ring-primary ">
        <option value="-" disabled selected>
          features sort
        </option>
        <option value="one">one</option>
        <option value="two">two</option>
      </select>
    </div>
  );
};

export default FeatureSortCard;
