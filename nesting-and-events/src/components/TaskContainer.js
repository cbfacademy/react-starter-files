import React from 'react';

function TaskContainer(props) {
  return (
      <div className="task-container">
        {props.children}
      </div>
  );
}
export default TaskContainer