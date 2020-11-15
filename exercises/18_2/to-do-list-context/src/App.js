import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

import TodoProvider from './context/TodoProvider';

// function App () {
//   const [todos, setTodos] = useState([]);

//   const addTodo = (newTodo) => {
//     setTodos(todos.concat(newTodo))
//   }

//   return (
//     <main>
//       <TodoInput addTodo={addTodo} />
//       <TodoList todos={todos} />
//     </main>
//   )
// }

function App () {
  return (
    <main>
      <TodoProvider>
        <TodoInput />
        <TodoList />
      </TodoProvider>
    </main>
  );
}

export default App;
