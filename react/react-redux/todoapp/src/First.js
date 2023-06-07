import { useState } from "react";
import { addTask } from "./redux";
import { useDispatch, useSelector } from "react-redux";

export function First() {

  const ud = useDispatch()

  const allTasks = useSelector(
    data => data.todoReducer.tasks
  )
  const [task, setTasks] = useState();

  // If you wish to have a task = "Playing" shared to other components, you have the the following approaches:
  // - createContext and useContext
  // - Use Redux

  const collectData = (event) => {
    setTasks(event.target.value)
  }

  const sendData = () => {
    // Logic to send the data which is present in task variable within redux.js
    ud(addTask(task)) // add("Playing")
  }

  return (
    <div className="m-3">
      <label className="fw-bold">Enter Task:</label>
      <br/>
      <input className="mt-2" onChange={collectData} type="text"/>
      <br/>
      <button onClick={sendData} className="btn btn-primary btn-sm mt-4" type="submit">Submit</button>

      <h5 className="mt-4 fw-bold">Todo List Tasks:</h5>
      <ul>
        {
          allTasks.map(task => {
            return <li>{task}</li>
          })
        }
      </ul>
    </div>
  )
}