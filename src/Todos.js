import React from 'react';
import Table from 'react-bootstrap/Table';

function Todos(props) {
  console.log(props);
  const shoot = () => {
    alert('Great Shot!');
  };

  const editTask = (index) => {
    console.log('edit');
    console.log(index);
  };

  const deleteTask = (index) => {
    console.log('delete');
  };

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Task No</th>
          <th>Name</th>
          <th>Time</th>
          <th> </th>
          <th> </th>
        </tr>
      </thead>
      {props.todos.map((res, i) => {
        return (
          <tbody>
            <tr>
              <td>{res.tno}</td>
              <td>{res.tDec}</td>
              <td>{res.time}</td>
              <td>
                <button
                  onClick={() => {
                    editTask(i);
                  }}
                >
                  Edit
                </button>
              </td>
              <td>
                <button onClick={() => props.onDelete(i)}>Delete</button>
              </td>
            </tr>
          </tbody>
        );
      })}
      ;
    </Table>
  );
}

export default Todos;

// To ask why use arrow function on passing value to function
