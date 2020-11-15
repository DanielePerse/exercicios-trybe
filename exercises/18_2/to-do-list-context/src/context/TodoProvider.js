import React, { useState } from 'react';

import TodoContext from './TodoContext';

// tudo que está escrito aqui é exatamente o que estava no nosso app, mas estamos abstraindo para um espaço separado, como se tivessemos configurando nossa store, criando um estado
function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos(todos.concat(newTodo))
  }

  const [newTodo, setNewTodo] = useState('');

  const handleChange = ({ target }) => {
    setNewTodo(target.value);
  }

  const handleClick = () => {
    addTodo(newTodo);
    setNewTodo('');
  }

  return (
    <main>
      <TodoContext.Provider value={{ todos, addTodo, newTodo, handleChange, handleClick }}>
        {children}
      </TodoContext.Provider>
    </main>
  );
}

export default TodoProvider;
