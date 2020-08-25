import React from "react";
import HeaderCell from "../header-cell/HeaderCell";

const TableHeader = ({ handleSorting }) => {
  return (
    <thead>
      <tr>
        <HeaderCell value="name" handleChange={() => handleSorting("name")} />
        <HeaderCell
          value="population"
          handleChange={() => handleSorting("population")}
        />
        <HeaderCell value="area" handleChange={() => handleSorting("area")} />
        <HeaderCell value="gdp" handleChange={() => handleSorting("gdp")} />
      </tr>
    </thead>
  );
};

export default TableHeader;
