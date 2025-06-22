// import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ImportantTask from "./pages/ImportantTask";
import CompletedTask from "./pages/CompletedTask";
import IncompletedTask from "./pages/IncompletedTask";
import AllTask from "./pages/AllTask";


const App = () => {


  return (
    <div className="bg-gray-900 text-white h-screen p-2 relative">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<AllTask />} />
          <Route path="/importanttask" element={<ImportantTask />} />
          <Route path="/completedtask" element={<CompletedTask />} />
          <Route path="/incompletedtask" element={<IncompletedTask />} />
        </Route>
     
      </Routes>
      
    </div>
  );
};

export default App;
