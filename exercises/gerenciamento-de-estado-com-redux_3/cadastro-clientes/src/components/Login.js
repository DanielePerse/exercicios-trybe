import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addLogin } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  render () {
    const { email, password } = this.state;
    return (
      <div>
        <h1>Página de Login</h1>
        <form>
          <label>
            E-mail
            <input name="email" type="email" required placeholder="exemplo@gmail.com" onChange={({target}) => this.setState({email: target.value})}></input>
          </label>
          <br/>

          <br/>
          <label>
            Senha
            <input name="senha" type="text" required placeholder="senha" onChange={({target}) => this.setState({password: target.value})}></input>
          </label>
          <br/>

          <br/>
          <Link to="/clients" onClick={() => this.props.addLogin({ email, password })}>Fazer Login</Link>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addLogin: event => dispatch(addLogin(event))});

export default connect(null, mapDispatchToProps)(Login);
