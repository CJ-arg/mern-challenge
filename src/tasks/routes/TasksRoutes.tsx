import React from "react";
import { TasksPage } from "../pages/TasksPage";
import { Navigate, Route, Routes } from "react-router-dom";

export const TasksRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<TasksPage />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
