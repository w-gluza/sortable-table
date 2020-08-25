import React from "react";
import HeaderCell from "../header-cell/HeaderCell";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <HeaderCell value="name" />
        <HeaderCell value="population" />
        <HeaderCell value="area" />
        <HeaderCell value="gdp" />
      </tr>
    </thead>
  );
};

export default TableHeader;
