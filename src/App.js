import React from 'react';
import './style.css';
import Todo from './Todo';
import Todos from './Todos';

export default function App() {
  console.log(Todos);
  let todos = [
    { tno: '01', tDec: 'WakeUp Morning', time: '6A.M.' },
    { tno: '02', tDec: 'Go to Gym', time: '6:30A.M.' },
    { tno: '03', tDec: 'Have Breakfast', time: '9:30A.M.' },
    { tno: '03', tDec: 'Start Work', time: '10:30A.M.' },
  ];

  function onDelete(index) {
    console.log(index);
  }

  return (
    <div>
      <Todo todo={todos[0]} />
      <Todos todos={todos} onDelete={onDelete} />
    </div>
  );
}
