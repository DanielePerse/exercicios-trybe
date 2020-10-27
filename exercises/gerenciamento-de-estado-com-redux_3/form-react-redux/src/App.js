import React from 'react';
import './App.css';
import Form from './Form';
import { Provider } from 'react-redux';
import store from '../src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <Form />
    </Provider>
  );
}
