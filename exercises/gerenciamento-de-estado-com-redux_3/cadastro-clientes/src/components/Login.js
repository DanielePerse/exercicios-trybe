import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addLogin } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>
        <h1>Página de Login</h1>
        <form>
          <label>
            E-mail
            <input name="email" type="email" required placeholder="exemplo@gmail.com"></input>
          </label>
          <br/>

          <br/>
          <label>
            Senha
            <input name="senha" type="text" required></input>
          </label>
          <br/>

          <br/>
          <button>Fazer Login</button>
        </form>
      </div>
    )
  }
}

export default Login;
