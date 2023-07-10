import './Users.css';
import React, { useState } from 'react';

const Users = () => {
  const users = [
    { id: 1, img:'https://i.imgur.com/pBcut2eb.jpg', name: 'John Gujjar', age: 25, email: 'john@example.com' },
    { id: 2, img:'https://i.imgur.com/T22FwxFb.jpg', name: 'Jane Saleem', age: 24, email: 'jane@example.com' },
    { id: 3, img:'https://i.imgur.com/An7G9J1b.jpg', name: 'Tom Hashmi', age: 28, email: 'tom@example.com' },
    { id: 3, img:'https://i.imgur.com/hxBM5q1b.jpg', name: 'Zaibi Lawa', age: 35, email: 'zaibi@example.com' },
    // Add more users as needed
  ];
  return (
    <div className="home-container">
      <h2>User Details</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th> </th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td><img class="p-img" src={user.img} alt={'Photo of ' + user.name} style={{width: 65, height: 65,}}></img></td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
              <td><MyButton name={user.name}/></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


function MyButton({ name }) {
  function handleClick() {
    
    alert('Hi! from' + name );
  }

  return (
    <button onClick={handleClick}>
      View
    </button>
  );
}


export default Users;