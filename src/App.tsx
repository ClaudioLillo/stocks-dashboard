import React from "react";

// components
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";

export default function App() {
  return (
    <div className="app">
      <Sidebar />
      <Main />
    </div>
  );
}
