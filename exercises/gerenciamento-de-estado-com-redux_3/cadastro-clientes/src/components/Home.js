import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render () {
    return (
      <div>
        <h2>Bem vindo ao nosso site! faça login para melhorar sua experiência</h2>
        <Link to="/login">Login</Link>
      </div>
    )
  }
}

export default Home;