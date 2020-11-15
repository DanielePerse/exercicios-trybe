import React, { useContext, useState } from 'react';
import TodoContext from '../context/TodoContext';

// function TodoInput({ addTodo }) {
//   const [newTodo, setNewTodo] = useState('');

//   const handleChange = ({ target }) => {
//     setNewTodo(target.value);
//   }

//   const handleClick = () => {
//     addTodo(newTodo);
//     setNewTodo('');
//   }

//   return (
//     <section>
//       <label htmlFor="addTodo">
//         Insira uma tarefa:
//         <input
//           value={newTodo}
//           onChange={handleChange}
//           type="text"
//           name="newTodo"
//           id="addTodo"
//         />
//       </label>
//       <button onClick={handleClick}>Adicionar Tarefa</button>
//     </section>
//   )
// }

function TodoInput() {
  const { handleChange, handleClick, newTodo } = useContext(TodoContext);

  return (
    <section>
      <label htmlFor="addTodo">
        Insira uma tarefa:
        <input
          value={newTodo}
          onChange={handleChange}
          type="text"
          name="newTodo"
          id="addTodo"
        />
      </label>
      <button onClick={handleClick}>Adicionar Tarefa</button>
    </section>
  )
}

export default TodoInput;