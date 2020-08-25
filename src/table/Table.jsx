import React from "react";
import "./Table.css";
import TableHeader from "./components/table-header/TableHeader";
import TableBody from "./components/table-body/TableBody";
// import TableFooter from "./components/table-footer/TableFooter";
import data from "../resources/resources";

const Table = () => {
  const sortValues = (key, order) => (a, b) => {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) return 0;

    const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
    const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    comparison = varA > varB ? 1 : -1;

    return order === "desc" ? comparison * -1 : comparison;
  };

  console.log(data.sort(sortValues("gdp", "asc")));

  return (
    <>
      <p className="paragraph">Table</p>
      <table className="table">
        <TableHeader />
        <TableBody data={data} />
        {/* <TableFooter /> */}
      </table>
    </>
  );
};

export default Table;
