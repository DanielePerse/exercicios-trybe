import React from 'react';
import { connect } from 'react-redux';
import { setForms } from './store/actions/actions';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      //esses itens tirei do meu reducers
      username: '',
      email: '',
      preferencia: '',
      isOk: false
    }
  }

  // não pe pq usamos redux que ele não vaia aceitar estados.. sim ele aceita estados!
  // e pq salvamos no estado primeiro para depois clicar no botão enviar e dispachar a ação?
  // pq assim populo minha store com dados consistentes! imagina preencher tudo e fechar a página?
  // faz sentido deixar toda essa informação inutil no seu store? Não faz...
  // por isso só enviado para o store dados que realmente são uteis para a app e serão usados no login

  render() {
    // porque não usou o preference e isok no estado?
    // pq está usando o state no value, daí é preciso fazer o importe desse estado
    // mas quando se faz uso do this.setState, já é acessado esse valor
    // por isso, não precisa fazer importe da preferencia e do isOk
    const { username, email } = this.state;
    console.log('props', this.props)
    return (
      <div className="App">
        <label>
          Nome <br />
          <input
            type="text"
            name="name"
            value={username} // 
            onChange={(e) => this.setState({ username: e.target.value })}
          />
        </label>
        <br />
        <label>
          is OK?
          <input
            type="checkbox"
            onChange={(e) => this.setState({ isOk: e.target.checked })}
          />
        </label>
        <br />
        <label>
          Email <br />
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </label>
        <br />
        <label>
          Biscoito
          <input
            type="radio"
            name="preferencia" // para o radiobutton alterar entre um e outro deixamos o mesmo name para eles
            value="biscoito"
            onChange={(e) => this.setState({ preferencia: e.target.value })}
          />
        </label>
        <br />
        <label>
          Bolacha
          <input
            type="radio"
            name="preferencia"
            value="bolacha"
            onChange={(e) => this.setState({ preferencia: e.target.value })}
          />
        </label>
        <br />
        <button
          type="button"
          onClick={() => this.props.setForms(this.state)}
        >
          Enviar
        </button>
      </div>
    );
  }
}

//passamos somente o stateDaStore como parametro. Pq? porque não temos nenhuma chave envolvendo o estad da minha store. aliás, esse state é ref. o estado da minha store q é visto no meu reducer. então essa função va acessar o state da minha store, quando não tem nada pega o state_initial e quando tem alguma coisa ele entra no objeto da função e captura a alteração.
// esse valor é captura e fica disponivel para gente no nosso componente, onde o acessamos como props
// forms: stateDaStore
// essa função faz a leitura da informação e nos devolve como props para comseguirmos usar. 
const mapStateToProps = (stateDaStore) => ({
  forms: stateDaStore
})

// para usar essa função precisamos importar nossa actions para esse componente, e ele vai fazer a tranmissão da action para o nosso reducer
//setForms: foi um nome qq escolhido, mas se formos usá-lo no código, temos que usar esse nome que demos - setForms(data): setForms é o nome da função que vem da nossa action - data é um nome qq para representar nossa ação, esse parametro é o estado do meu compoennte.
const mapDispatchToProps = (dispatch) => ({
  setForms: (data) => dispatch(setForms(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

// ** Lembre-se: Não importa o nome que você dê pra função 'mapStateToProps' nem o nome do parâmetro dela
// o que importa é a ordem que você coloca dentro da função do connect.
//Ele sabe que o primeiro parâmetro dele é a função que vai pegar os states da store e transformar em props pra usar no componente e que o segundo parâmetro vai ser a função responsável por despachar a action.

