import React from 'react';

function DisplayTasks({ tasks, deleteHandler }) {
  return (
    <div>
      {tasks.map((task, index) => (
        <h3 key={index}>
          {task} &nbsp;
          <button className="btn btn-danger btn-sm" onClick={() => deleteHandler(index)}>Delete</button>
        </h3>
      ))}
    </div>
  );
}

export default DisplayTasks;
