import React from 'react';

// class TodoList extends React.Component {
//   render() {
//     const { todos } = this.props;
//     return (
//       <ul>
//         {todos.map(todo => <li>{todo}</li>)}
//       </ul>
//     )
//   }
// }

// diferenças da refatoração para função
// 1. não precisa mais estender para React.Component
// 2. não existe metodo render na função. Para renerizar, basta return essa coisa
// 3. Mas como usar as props? basta chamar como parâmetro, por default já recebe como parametro props, no caso abaixo desestruturamos para acessar apenas a prop todos.

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => <li>{todo}</li>)}
    </ul>
  );
}

export default TodoList;
