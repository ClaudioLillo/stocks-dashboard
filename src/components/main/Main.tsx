import React from "react";

import "./Main.css";

// components
import Dashboard from "../dashboard/Dashboard";

export default function Main() {
  return (
    <div className="main">
      <Dashboard posX={0} posY={0} x={400} y={300} />
    </div>
  );
}
