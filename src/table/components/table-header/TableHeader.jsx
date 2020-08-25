import React from "react";
import HeaderCell from "../header-cell/HeaderCell";

const TableHeader = ({ handleSorting }) => {
  return (
    <thead>
      <tr>
        <HeaderCell
          value="name"
          handleChange={() => handleSorting("name", "asc")}
        />
        <HeaderCell
          value="population"
          handleChange={() => handleSorting("population", "asc")}
        />
        <HeaderCell
          value="area"
          handleChange={() => handleSorting("area", "asc")}
        />
        <HeaderCell
          value="gdp"
          handleChange={() => handleSorting("gdp", "asc")}
        />
      </tr>
    </thead>
  );
};

export default TableHeader;
