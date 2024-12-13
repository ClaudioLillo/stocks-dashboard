import React, { useEffect, useState } from "react";
import getQuotations from "../../data/getQuotations";

import "./Main.css";

// components
import Dashboard from "../dashboard/Dashboard";

export default function Main() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getQuotations("AAPL").then((data) => {
      console.log(data);
      setData(data);
    });
  }, []);
  return (
    <div className="main">
      {data.length && (
        <Dashboard posX={0} posY={0} x={400} y={300} data={data} />
      )}
    </div>
  );
}
