import { useState } from "react";
import axios from "axios";
import { RxCross1 } from "react-icons/rx";
import { toast } from "react-toastify";

const InputData = ({ InputDiv, setInputDiv, refreshTasks }) => {
  const [data, setData] = useState({ title: "", description: "" });

  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const submitData = async () => {
    if (data.title.trim() === "" || data.description.trim() === "") {
      toast.error("All fields are required");
      return;
    }

    try {
      await axios.post("http://localhost:5882/api/tasks", {
        title: data.title,
        description: data.description,
      });
      setData({ title: "", description: "" });  // <-- fixed here
      setInputDiv("hidden");
      refreshTasks(); // refresh the task list after adding
      toast.success("Task added successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Error while adding task");
    }
  };

  return (
    <>
      <div
        className={`${InputDiv} fixed top-0 left-0 bg-black bg-opacity-70 h-screen w-full z-10`}
        onClick={() => setInputDiv("hidden")} // close modal if background clicked
      />
      <div
        className={`${InputDiv} fixed top-0 left-0 h-screen w-full flex items-center justify-center z-20`}
      >
        <div className="w-2/6 bg-gray-900 rounded p-4 text-white">
          <div className="flex items-center justify-end">
            <button onClick={() => setInputDiv("hidden")}>
              <RxCross1 className="text-2xl" />
            </button>
          </div>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={data.title}
            onChange={change}
            className="bg-gray-700 px-3 py-2 rounded w-full text-black my-3"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={data.description}
            onChange={change}
            className="bg-gray-700 px-3 py-2 rounded w-full my-3 text-black"
            rows={5}
          />
          <button
            onClick={submitData}
            className="px-3 py-2 bg-blue-400 rounded text-black text-xl font-semibold w-full"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default InputData;
