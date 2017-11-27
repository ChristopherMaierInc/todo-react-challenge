import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoList from './components/todo-list.js';
import toDos from './data';

const Heading = () => (
    <div className="Heading">
      <h1>My Todo list</h1>
      <h4>Things I need to get done!</h4>
    </div>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading />
        <ToDoList tasks={ toDos } />
      </div>
    );
  }
}

export default App;
