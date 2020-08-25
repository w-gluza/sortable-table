import React from "react";
import ContentCell from "../content-cell/ContentCell";

const TableBody = ({ data }) => {
  return (
    <tbody>
      {data.map((country) => (
        <tr key={country.id}>
          <ContentCell value={country.name} />
          <ContentCell value={country.population} />
          <ContentCell value={country.area} />
          <ContentCell value={country.gdp} />
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
