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
//2. 
function TodoList() {
  const { todos } = useContext(TodoContext);

  return (
    <ul>
      {todos.map((todo, index) => <li key={index}>{todo}</li>)}
    </ul>
  );
}

export default TodoList;
