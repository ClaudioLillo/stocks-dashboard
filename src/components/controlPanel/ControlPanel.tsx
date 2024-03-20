import React from "react";

import "./ControlPanel.css";

export default function ControlPanel() {
  return (
    <div className="control-panel">
      <label>Período</label>
      <select className="control-panel-select">
        <option value="day">Día</option>
        <option value="week">Semana</option>
        <option value="month">Mes</option>
        <option value="year">Año</option>
      </select>
      <br />
      <label>Cantidad</label>
      <input className="control-panel-input" type="number" max="100" />
    </div>
  );
}
