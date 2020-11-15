import React, { useContext } from 'react';
import TodoContext from '../context/TodoContext';

// function TodoList({ todos }) {
//   return (
//     <ul>
//       {todos.map(todo => <li>{todo}</li>)}
//     </ul>
//   );
// }

//refatoração 2
// function TodoList() {
//   return (
//     <TodoContext.Consumer>
//       {({ todos }) => (
//         <ul>
//           {todos.map((todo, index) => <li key={index}>{todo}</li>)}
//         </ul>
//       )}
//     </TodoContext.Consumer>
//   );
// }

//refatoração 3: usando reactHook.
//1. primeiro importo o "useContext";
//2. não preciso mais receber a informação de outro componente via props
//3. não preciso mais do consumer. Então, vou cirar uma variável ("todos") e ele vai vir do meu useContext, e esse useContext deve receber o cntexto ao qual estou me referindo.
function TodoList() {
  const { todos } = useContext(TodoContext);

  return (
    <ul>
      {todos.map((todo, index) => <li key={index}>{todo}</li>)}
    </ul>
  );
}

export default TodoList;
