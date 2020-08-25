import React from "react";

const HeaderCell = ({ value, handleChange }) => {
  return <th onClick={handleChange}>{value}</th>;
};

export default HeaderCell;
