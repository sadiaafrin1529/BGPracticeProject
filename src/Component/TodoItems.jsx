import React, { useEffect, useState } from 'react';

const TodoItems = () => {
  const [todo,setTodo]=useState([]);
  useEffect(() => {
    fetch('http://10.10.83.41:8088/api/TodoItems')
      .then((res) => res.json())
      .then((data) => setTodo(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
    return (
        <div className="w3-container">
      <h2>ToDo List</h2>
    

      <table className="w3-table w3-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>iscomplet</th>
            <th>Edit</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
        {todo.map((alldata) => (
            <tr key={alldata.id}>
              <td>{alldata.id}</td>
              <td>{alldata.name}</td>
              <td>{alldata.isComplete+''}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
};

export default TodoItems;