import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem, Badge } from 'reactstrap';

const ToDoList = ({ tasks }) => (
  <ListGroup>
    {tasks.map((listitems) => <ToDoTasks key={listitems.id} listitems={listitems} />)}
  </ListGroup>
)

const ToDoTasks = ({ listitems }) => (
  listitems.complete ? <ListGroupItem>{listitems.task} <Badge color="primary">Complete</Badge></ListGroupItem> : <ListGroupItem>{listitems.task} <Badge color="danger">Incomplete</Badge></ListGroupItem>
)

export default ToDoList;
