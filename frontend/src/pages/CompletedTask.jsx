import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Home/Card";

const CompletedTask = () => {
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    const fetchCompleted = async () => {
      const res = await axios.get("http://localhost:5882/api/tasks");
      const filtered = res.data.filter(task => task.complete === true);
      setCompletedTasks(filtered);
    };

    fetchCompleted();
  }, []);

  return <Card data={completedTasks} />;
};

export default CompletedTask;
