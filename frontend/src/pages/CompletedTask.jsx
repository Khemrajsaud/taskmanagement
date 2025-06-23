// import { useEffect, useState } from "react";
// import axios from "axios";
// import Card from "../components/Home/Card";

// const CompletedTask = () => {
//   const [completedTasks, setCompletedTasks] = useState([]);

//   useEffect(() => {
//     const fetchCompleted = async () => {
//       const res = await axios.get("http://localhost:5882/api/tasks");
//       const filtered = res.data.filter(task => task.complete === true);
//       setCompletedTasks(filtered);
//     };

//     fetchCompleted();
//   }, []);

//   return <Card data={completedTasks} />;
// };

// export default CompletedTask;



import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Home/Card";

const BASE_URL = import.meta.env.VITE_API_URL;

const CompletedTask = () => {
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    const fetchCompleted = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/tasks`);
        const filtered = res.data.filter((task) => task.complete === true);
        setCompletedTasks(filtered);
      } catch (error) {
        console.error("Failed to fetch completed tasks:", error);
      }
    };

    fetchCompleted();
  }, []);

  return <Card data={completedTasks} />;
};

export default CompletedTask;

