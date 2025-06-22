// import React, { useState } from "react";
// import Card from "../components/Home/Card";
// import { IoAddCircleSharp } from "react-icons/io5";
// import InputData from "../components/Home/InputData";

// const AllTask = () => {
//   const [InputDiv, setInputDiv] = useState("hidden");

//   return (
//     <>
//       <div>
//         <div className=" w-full flex justify-end px-4 py-2">
//           <button onClick={() => setInputDiv("fixed")}>
//             <IoAddCircleSharp className="text-4xl text-gray-300 hover:text-gray-100 transition-all duration-300" />
//           </button>
//         </div>
//         <Card home={"true"} />
//       </div>
//       <InputData InputDiv={InputDiv} setInputDiv={setInputDiv} />
//     </>
//   );
// };

// export default AllTask;

// pages/AllTask.jsx
import { useEffect, useState } from "react";
import Card from "../components/Home/Card";               
import InputData from "../components/Home/InputData";     
import axios from "axios";

const AllTask = () => {
  const [inputDiv, setInputDiv] = useState("hidden");
  const [tasks, setTasks] = useState([]);
  console.log(tasks)

  const fetchTasks = async () => {
    try {
      const res = await axios.get("http://localhost:5882/api/tasks");
      setTasks(res.data);
    } catch (error) {
      console.error("Failed to fetch tasks:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      {/* Input Modal */}
      <InputData setInputDiv={setInputDiv} InputDiv={inputDiv} refreshTasks={fetchTasks} />
      
      {/* Task Cards */}
      <Card data={tasks} home="true" setInputDiv={setInputDiv} />
    </>
  );
};

export default AllTask;

