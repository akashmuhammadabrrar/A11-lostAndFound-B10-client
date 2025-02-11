import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto  min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <Navbar></Navbar>
      <div className="mt-10 min-h-[calc(100vh-286px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
