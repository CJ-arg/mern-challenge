import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { RecoverPasswordPAge } from "../pages/RecoverPasswordPAge";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="recover" element={<RecoverPasswordPAge />} />
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
