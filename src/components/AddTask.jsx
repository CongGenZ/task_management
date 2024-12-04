import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid4 } from "uuid";
import { addTask } from "../features/taskSlice";

const AddTask = () => {
    const [title,settitle] = useState("")
    const [description,setDesciption] =  useState("")
    const [status,setStatus] =  useState("To Do")
 const dispatch = useDispatch()
    const handleSubmit  =(e)=>{
      e.preventDefault()
      const newTask = {
        id:uuid4(),
        title,
        description,
        status

      }
      dispatch(addTask(newTask))
      settitle("")
      setDesciption("")
      setStatus("To Do")
    }
    
  return (
    <form action="" className="mb-6" onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold mb-3 text-indigo-500">Add New Task</h2>
      <div className="mb-4">
              <input type="text" 
             placeholder="task title"
              value={title}
              onChange={(e)=>settitle(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-inherit "
              required
              
              />
      </div>
      
      <div className="mb-4">
                  <textarea name="" id=""
                   placeholder="Task Description"
                   value={description}
                   onChange={(e)=>setDesciption(e.target.value)}
                   className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2"
                   rows="3">

                  </textarea>
      </div>

      <div className="mb-4">
       <select name="" id=""
       value={status}
       onChange={(e)=>setStatus(e.target.value)}
       className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2">
            <option value="to Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
       </select>

      </div>
        <button type="submit"
         className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700">
            Add Task
         </button>
    </form>
  );
};

export default AddTask;
