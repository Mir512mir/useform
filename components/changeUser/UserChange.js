import React, { useEffect, useState } from 'react';

const UserChange = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://49.13.31.246:9191/users') // замените '/api/users' на эндпоинт вашего сервера
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>User Change</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserChange;