import { useState } from 'react';
import './App.css';
import DisplayTasks from './DisplayTasks';

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const Handler = (e) => {
    setTask(e.target.value);
  };

  // For adding a task
  const addTaskHandler = (e) => {
    e.preventDefault(); // prevent page reload
    if (task.trim() !== "") {
      setTaskList([...taskList, task]);
      setTask("");
    }
  };

  // For deleting a task
  const deleteTaskHandler = (indexToDelete) => {
    const newTaskList = taskList.filter((_, index) => index !== indexToDelete);
    setTaskList(newTaskList);
  };

  return (
    <>
      <div className="container mt-5">
        <div className="card p-4 ">
          <h1 className="text-center text-primary">Todo List</h1>
          <form onSubmit={addTaskHandler} className="d-flex mb-3">
            <input
              type='text'
              className="form-control me-2"
              value={task}
              onChange={Handler}
              placeholder="Enter a task"
            />
            <button type='submit' className="btn btn-primary">Add</button>
          </form>
          <div className='text-center p-4'>
            <DisplayTasks tasks={taskList} deleteHandler={deleteTaskHandler} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
