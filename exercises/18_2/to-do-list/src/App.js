import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

// class App extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       todos: []
//     }
//     this.addTodo = this.addTodo.bind(this); 
//   }

//   addTodo(newTodo) {
//     this.setState((prevState) => ({
//       todos: prevState.todos.concat(newTodo),
//     }));
//   }

//   render() {
//     return (
//       <main>
//         <TodoInput addTodo={this.addTodo} />
//         <TodoList todos={this.state.todos} />
//       </main>
//     )
//   }
// }

function App () {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos(todos.concat(newTodo))
  }

  return (
    <main>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} />
    </main>
  )
}

export default App;
