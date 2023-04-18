import React from "react";

//libs
import { Routes, Route } from "react-router-dom";

// components
import { ItemLevelReportPage } from "./pages/ItemLevelReportPage/ItemLevelReportPage";
import { WaiterLevelReportPage } from "./pages/WaiterLevelReportPage/WaiterLevelReportPage";

export const App = () => {
  return (
    <main>
      <Routes>
        <Route path={'item-level'} element={<ItemLevelReportPage />} />
        <Route path={'waiter-level'} element={<WaiterLevelReportPage />} />
      </Routes>
    </main>
  );
}