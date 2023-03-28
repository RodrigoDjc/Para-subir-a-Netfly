import React, { useState } from 'react';
import users from './assets/users.json';
import { getRandomNumber as funcion } from './utils/getRandomNumbers';
import Card from './assets/components/Card';
import Button from './assets/components/Button';

const App = () => {
  const [userIndice, setUsers] = useState(funcion(0, users.length - 1));
  const user = users[userIndice];

  const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;

  const cambiar = () => {
    let newUserIndex = funcion(0, users.length - 1);

    while (newUserIndex === userIndice) {
      newUserIndex = funcion(0, users.length - 1);
    }
    setUsers(newUserIndex);
  };

  return (
    <div className="h-full flex flex-col justify-center items-center p-10">
      <Card user={user} />
      <Button cambiar={cambiar} />
    </div>
  );
};

export default App;
