import React from "react";

function Sort() {
  return (
    <div>
      <span>Sort</span>
      <span className="px-2">
        <select>
          <option value="volvo">Price</option>
          <option value="alphabetically">Alphabetically</option>
        </select>
      </span>
    </div>
  );
}

export default Sort;
