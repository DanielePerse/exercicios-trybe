import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './store';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Clients from './components/Clients';

class App extends React.Component {
  render() {
    return (  
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/clients" component={Clients} />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
