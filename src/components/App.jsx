import React from "react";

//libs
import { Routes, Route } from "react-router-dom";

// components
import { ItemLevelsReportPage } from "./pages/ItemsLevelReport/ItemLevelsReportPage";

export const App = () => {
  return (
    <main>
      <Routes>
        <Route path={'/'} element={<ItemLevelsReportPage />} />
      </Routes>
    </main>
  );
}