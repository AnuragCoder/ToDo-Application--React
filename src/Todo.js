import React from 'react';
function Todo(props) {
  return (
    <div>
      at {props.todo.time} {props.todo.tDec}
      <div>
        <button> Next Task </button>
        <button> Previous Task </button>
      </div>
    </div>
  );
}

export default Todo;
