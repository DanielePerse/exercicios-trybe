import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './store';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';

class App extends React.component {
  render() {
    return (  
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
