import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminLogin from "../pages/adminPages/AdminLogin";
import AdminDashboard from "../pages/adminPages/AdminDashboard";
import AdminAddSeo from "../pages/adminPages/AdminAddSeo";
import AdminEditSeo from "../pages/adminPages/AdminEditSeo";

function AdminRoute() {
  return (
    <Routes>
      <Route path="/login" element={<AdminLogin />} />
      <Route path="/dashboard" element={<AdminDashboard />} />
      <Route path="/addSeo" element={<AdminAddSeo />} />
      <Route path="/editSeo/:seoId" element={<AdminEditSeo />} />
    </Routes>
  );
}

export default AdminRoute;
