import React from "react";
import "./Sidebar.css";

// components
import ControlPanel from "../controlPanel/ControlPanel";
import StockList from "../stockList/StockList";
import AddStock from "../addStock/AddStock";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <ControlPanel />
        <AddStock />
        <StockList />
      </div>
    </div>
  );
}
