
// import { useEffect, useState } from "react";
// import Card from "../components/Home/Card";               
// import InputData from "../components/Home/InputData";     
// import axios from "axios";

// const AllTask = () => {
//   const [inputDiv, setInputDiv] = useState("hidden");
//   const [tasks, setTasks] = useState([]);
//   console.log(tasks)

//   const fetchTasks = async () => {
//     try {
//       const res = await axios.get("http://localhost:5882/api/tasks");
//       setTasks(res.data);
//     } catch (error) {
//       console.error("Failed to fetch tasks:", error);
//     }
//   };

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   return (
//     <>
//       {/* Input Modal */}
//       <InputData setInputDiv={setInputDiv} InputDiv={inputDiv} refreshTasks={fetchTasks} />
      
//       {/* Task Cards */}
//       <Card data={tasks} home="true" setInputDiv={setInputDiv} />
//     </>
//   );
// };

// export default AllTask;


import { useEffect, useState } from "react";
import Card from "../components/Home/Card";               
import InputData from "../components/Home/InputData";     
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

const AllTask = () => {
  const [inputDiv, setInputDiv] = useState("hidden");
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/tasks`);
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
      <InputData
        setInputDiv={setInputDiv}
        InputDiv={inputDiv}
        refreshTasks={fetchTasks}
      />
      
      {/* Task Cards */}
      <Card
        data={tasks}
        home="true"
        setInputDiv={setInputDiv}
        refreshTasks={fetchTasks}
      />
    </>
  );
};

export default AllTask;

