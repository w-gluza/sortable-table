import React, { useState } from "react";
import "./Table.css";
import TableHeader from "./components/table-header/TableHeader";
import TableBody from "./components/table-body/TableBody";
// import TableFooter from "./components/table-footer/TableFooter";
import rawData from "../resources/resources";

const Table = () => {
  const sortValues = (key, order) => (a, b) => {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) return 0;

    const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
    const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    comparison = varA > varB ? 1 : -1;

    return order === "desc" ? comparison * -1 : comparison;
  };

  const initialData = rawData.slice(0).sort(sortValues("name", "asc"));
  const [sortedData, setSortedData] = useState(initialData);

  const handleSorting = (k, o) => {
    console.log("key:", k, "order:", o);
    const test = sortValues(k, o);
    setSortedData(rawData.slice(0).sort(test));
  };
  return (
    <>
      <p className="paragraph">Table</p>
      <table className="table">
        <TableHeader handleSorting={handleSorting} />
        <TableBody data={sortedData} />
        {/* <TableFooter /> */}
      </table>
    </>
  );
};

export default Table;
