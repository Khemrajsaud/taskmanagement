import React from "react";
import { CgNotes } from "react-icons/cg";
import { MdLabelImportant } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa";
import { TbNotebook } from "react-icons/tb";
import { Link } from "react-router-dom";



const Sidebar = () => {



  const data = [
    { title: "All Tasks", icon: <CgNotes />, link: "/" },
    {
      title: "Important Tasks",
      icon: <MdLabelImportant />,
      link: "/importanttask",
    },
    {
      title: "Completed Tasks",
      icon: <FaCheckDouble />,
      link: "completedtask",
    },
    {
      title: "Incomplete Tasks",
      icon: <TbNotebook />,
      link: "incompletedtask",
    },
  ];

  return (
    <div className="flex flex-col text-white  p-4 ">
      {/* Profile Section */}
      <div className="mb-4">
        <h2 className="text-lg font-bold">Task Management</h2>
     
        <hr className="my-2 border-gray-600" />
      </div>

      {/* Task List */}
      <div className="flex flex-col gap-8 mt-[100px]">
        {data.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className=" rounded hover:bg-gray-700 hover:p-1 cursor-pointer flex items-center gap-2"
          >
            {item.icon} {item.title}
          </Link>
        ))}
      </div>

   
    </div>
  );
};

export default Sidebar;
