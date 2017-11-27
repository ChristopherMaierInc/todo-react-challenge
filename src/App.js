import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import toDos from './data';
import { Container, Row, Col, ListGroup, ListGroupItem, Badge } from 'reactstrap';

function Heading() {
  return
    <div class="heading">;
      <h1>My Todo list</h1>;
      <h4>Things I need to get done!</h4>;
    </div>;
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          {toDos.map(item => (
            <li>{ item }</li>
          ))}
        </ul>
      </div>)
  }
}

export default App;
