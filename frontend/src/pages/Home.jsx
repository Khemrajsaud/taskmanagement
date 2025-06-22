import React from "react";
import Sidebar from "../components/Home/Sidebar";
import { Outlet } from "react-router-dom";


const Home = () => {



  return (
    <div className="flex h-[98vh] gap-1  top-0">
      <div className=" bg-gray-1000 w-1/6 border border-gray-700  px-4  text-black top-0">
        <Sidebar />
      </div>
      <div className="bg-gray-900 w-5/6 border border-gray-800  px-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
