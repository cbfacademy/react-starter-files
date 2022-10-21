import React from 'react';

function Task(props) {

  function complete(id){
    console.log(`Task with the id '${id}' was clicked`)
  }

  return (
      <div key={props.id} className={"task"+(props.completed?" checked":"")} >
        <span>{props.title}</span>
        <span className="status" onClick={() => complete(props.id)}>{props.completed ? "✔️":"🔘"}</span>
      </div>
  );
}
export default Task