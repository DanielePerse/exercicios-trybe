import React from 'react';

class Login extends React.Component {
  render () {
    return (
      <div>
        <h1>Página de Login</h1>
        <form>
          <label>
            E-mail
            <input></input>
          </label>
          <br/>

          <br/>
          <label>
            Senha
            <input></input>
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
