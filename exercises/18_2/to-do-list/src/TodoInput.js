import React, { useState } from 'react';

// class TodoInput extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       newTodo: ''
//     }
//     this.handleChange = this.handleChange.bind(this);
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleChange({target}) {
//     this.setState({
//       newTodo: target.value,
//     });
//   }

//   handleClick() {
//     const { addTodo } = this.props;
//     const { newTodo } = this.state;

//     addTodo(newTodo);
//     this.setState({ newTodo: '' });
//   }

//   render() {
//     const { newTodo } = this.state;
//     return (
//       <section>
//         <label htmlFor="addTodo">
//           Insira uma tarefa:
//           <input
//             value={newTodo}
//             onChange={this.handleChange}
//             type="text"
//             name="newTodo"
//             id="addTodo"
//           />
//         </label>
//         <button onClick={this.handleClick}>Adicionar Tarefa</button>
//       </section>
//     )
//   }
// }

//diferenças refatoração:
// 1. linha 53: além de não ter o construtor, a função tb não trabalha com estados. O q fazer, já que nossa app usa o estado do "newTodo"  no render? usar o reactHook useState. Primeiro, vou importar ele. Depois vou criar 2 variáveis que serão desestruturadas do useState. Tal função retorna um array e esse array será desestruturado, em sua primeira posição recebo a variável que utilizo na leitura do state "newTodo" (onde armazeno a informação), na segunda posição recebo meu "setNewTodo" (faz o papel do setState, mas somente para essa variável). E o que eu passar como parametro na função useState, será meu default, ou seja, meu valor inicial para meu "newTodo".
// 2. linha 56: reescrevendo função. Não posso mais utilizar método, terei que usar outra sintaxe, no caso, o prof. usou arrow function. Essa função recebe como parâmetro o evento, no caso o target. E utilizaremos o "setNewTodo" para atualizar o estado do "newTodo". E agora, na propriedade "onChange" do meu input não preciso mais escrever "this.handleChange", já posso retirar o this.
//3. linha 60: reescrevendo função. Essa função já está usando uma prop. Como posso capturar uma prop num componente funcional? Através dos parametros desestruturado na raiz da função TodoInput (linha 53)! Nesse caso, chamo meu "addTodo", recebendo "newTodo" como parametro. E por último, nossa função setava uma string vazia para limpar o inut da app. Então chamo de novo o "setNewTodo" para atualizar o estado do "newTodo" para uma string vazia. Com isso a função handleClick foi finalizada, e agora preciso retirar o "this" de sua chamada dentro do button.

function TodoInput({ addTodo }) {
  const [newTodo, setNewTodo] = useState('');

  const handleChange = ({ target }) => {
    setNewTodo(target.value);
  }

  const handleClick = () => {
    addTodo(newTodo);
    setNewTodo('');
  }

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
