import React from "react";

//libs
import { Routes, Route } from "react-router-dom";

// components
import { ItemLevelReportPage } from "./pages/ItemLevelReportPage/ItemLevelReportPage";
import { WaiterLevelReportPage } from "./pages/WaiterLevelReportPage/WaiterLevelReportPage";
import { Menu } from "./pages/MenuPage/Menu";


export const App = () => {
  return (
    <main>
      <Routes>
        <Route path={'/'} element={<ItemLevelReportPage />} />
        <Route path={'waiter-level'} element={<WaiterLevelReportPage />} />
        <Route path={'menu'} element={<Menu />} />
      </Routes>
    </main>
  );
}