


// import { CiHeart } from "react-icons/ci";
// import { FaEdit } from "react-icons/fa";
// import { MdDelete } from "react-icons/md";
// import { IoAddCircleSharp } from "react-icons/io5";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { useState } from "react";

// const Card = ({ data = [], home, setInputDiv, refreshTasks }) => {
//   const [editData, setEditData] = useState(null); 
//   //  Mark as complete
//   const markAsComplete = async (id) => {
//     try {
//       await axios.patch(`http://localhost:5882/api/tasks/${id}/complete`);
//       toast.success("Task marked as complete");
//     } catch (err) {
//         console.error("Error marking task as complete:", err);
//       toast.error("Failed to mark as complete");
//       return;
//     }

//     try {
//       refreshTasks();
//     } catch (err) {
//       console.error("Refresh error:", err);
//     }
//   };

//   // ✅ Delete Task
//   const deleteTask = async (id) => {
 

//     try {
//       await axios.delete(`http://localhost:5882/api/tasks/${id}`);
//       toast.success("Task deleted");
     
//     } catch (err) {
//         console.error("Error marking task as complete:", err);
//       toast.error("Failed to delete task");
//     }
//   };

//   // ✅ Submit Edit
//   const submitEdit = async () => {
//     if (!editData.title || !editData.description) {
//       toast.error("All fields required");
//       return;
//     }

//     try {
//       await axios.put(`http://localhost:5882/api/tasks/${editData._id}`, {
//         title: editData.title,
//         description: editData.description,
//       });
//       toast.success("Task updated");
//       setEditData(null);
    
//     } catch (err) {
//         console.error("Error marking task as complete:", err);
//       toast.error("Failed to update task");
//     }
//   };

//   return (
//     <>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
//         {data.map((item) => (
//           <div
//             key={item._id}
//             className="bg-gray-700 rounded-sm p-4 flex flex-col justify-between"
//           >
//             <div>
//               <h3 className="text-xl font-semibold">{item.title}</h3>
//               <p className="text-gray-300 my-2">{item.description}</p>
//             </div>
//             <div className="mt-4 w-full flex items-center">
//               <button
//                 onClick={() => markAsComplete(item._id)}
//                 className={`${
//                   item.complete ? "bg-green-700" : "bg-red-400"
//                 } px-2 py-1 rounded`}
//               >
//                 {item.complete ? "Complete" : "Incomplete"}
//               </button>
//               <div className="text-white p-2 w-3/6 text-2xl font-semibold flex justify-around">
//                 <button><CiHeart /></button>
//                 <button onClick={() => setEditData(item)}><FaEdit /></button>
//                 <button onClick={() => deleteTask(item._id)}><MdDelete /></button>
//               </div>
//             </div>
//           </div>
//         ))}

//         {home === "true" && (
//           <button
//             onClick={() => setInputDiv("")}
//             className="flex flex-col justify-center items-center bg-gray-700 rounded-sm p-4 hover:scale-105 hover:cursor-pointer transition-all duration-300"
//           >
//             <IoAddCircleSharp className="text-5xl" />
//             <h2 className="text-2xl mt-4">Add Task</h2>
//           </button>
//         )}
//       </div>

//       {/* ✅ Edit Modal */}
//       {editData && (
//         <div className="fixed top-0 left-0 h-screen w-full bg-black bg-opacity-70 flex items-center justify-center z-50">
//           <div className="bg-white text-black p-6 rounded-md w-[90%] max-w-md">
//             <h2 className="text-xl font-semibold mb-4">Edit Task</h2>
//             <input
//               type="text"
//               className="w-full border p-2 mb-3"
//               value={editData.title}
//               onChange={(e) =>
//                 setEditData({ ...editData, title: e.target.value })
//               }
//             />
//             <textarea
//               className="w-full border p-2 mb-3"
//               rows="5"
//               value={editData.description}
//               onChange={(e) =>
//                 setEditData({ ...editData, description: e.target.value })
//               }
//             ></textarea>
//             <div className="flex justify-between">
//               <button
//                 onClick={() => setEditData(null)}
//                 className="px-4 py-2 bg-gray-500 text-white rounded"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={submitEdit}
//                 className="px-4 py-2 bg-blue-600 text-white rounded"
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Card;





import { CiHeart } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoAddCircleSharp } from "react-icons/io5";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";

const BASE_URL = import.meta.env.VITE_API_URL;

const Card = ({ data = [], home, setInputDiv, refreshTasks }) => {
  const [editData, setEditData] = useState(null);

  // ✅ Mark as complete
  const markAsComplete = async (id) => {
    try {
      await axios.patch(`${BASE_URL}/api/tasks/${id}/complete`);
      toast.success("Task marked as complete");
    } catch (err) {
      console.error("Error marking task as complete:", err);
      toast.error("Failed to mark as complete");
      return;
    }

    try {
      refreshTasks();
    } catch (err) {
      console.error("Refresh error:", err);
    }
  };

  // ✅ Delete Task
  const deleteTask = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/api/tasks/${id}`);
      toast.success("Task deleted");
    } catch (err) {
      console.error("Error deleting task:", err);
      toast.error("Failed to delete task");
    }
  };

  // ✅ Submit Edit
  const submitEdit = async () => {
    if (!editData.title || !editData.description) {
      toast.error("All fields required");
      return;
    }

    try {
      await axios.put(`${BASE_URL}/api/tasks/${editData._id}`, {
        title: editData.title,
        description: editData.description,
      });
      toast.success("Task updated");
      setEditData(null);
    } catch (err) {
      console.error("Error updating task:", err);
      toast.error("Failed to update task");
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {data.map((item) => (
          <div
            key={item._id}
            className="bg-gray-700 rounded-sm p-4 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-300 my-2">{item.description}</p>
            </div>
            <div className="mt-4 w-full flex items-center">
              <button
                onClick={() => markAsComplete(item._id)}
                className={`${
                  item.complete ? "bg-green-700" : "bg-red-400"
                } px-2 py-1 rounded`}
              >
                {item.complete ? "Complete" : "Incomplete"}
              </button>
              <div className="text-white p-2 w-3/6 text-2xl font-semibold flex justify-around">
                <button><CiHeart /></button>
                <button onClick={() => setEditData(item)}><FaEdit /></button>
                <button onClick={() => deleteTask(item._id)}><MdDelete /></button>
              </div>
            </div>
          </div>
        ))}

        {home === "true" && (
          <button
            onClick={() => setInputDiv("")}
            className="flex flex-col justify-center items-center bg-gray-700 rounded-sm p-4 hover:scale-105 hover:cursor-pointer transition-all duration-300"
          >
            <IoAddCircleSharp className="text-5xl" />
            <h2 className="text-2xl mt-4">Add Task</h2>
          </button>
        )}
      </div>

      {/* ✅ Edit Modal */}
      {editData && (
        <div className="fixed top-0 left-0 h-screen w-full bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white text-black p-6 rounded-md w-[90%] max-w-md">
            <h2 className="text-xl font-semibold mb-4">Edit Task</h2>
            <input
              type="text"
              className="w-full border p-2 mb-3"
              value={editData.title}
              onChange={(e) =>
                setEditData({ ...editData, title: e.target.value })
              }
            />
            <textarea
              className="w-full border p-2 mb-3"
              rows="5"
              value={editData.description}
              onChange={(e) =>
                setEditData({ ...editData, description: e.target.value })
              }
            ></textarea>
            <div className="flex justify-between">
              <button
                onClick={() => setEditData(null)}
                className="px-4 py-2 bg-gray-500 text-white rounded"
              >
                Cancel
              </button>
              <button
                onClick={submitEdit}
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;

