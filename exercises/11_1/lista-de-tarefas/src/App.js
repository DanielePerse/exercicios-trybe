import React from 'react';
import './App.css';

const myTasks = ['organizar casa', 'fazer comida', 'pagar contas', 'estudar', 'fazer revisões'];

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <ul>
      {myTasks.map(myTask => task(myTask))}
    </ul>
  )
}

export default App;
