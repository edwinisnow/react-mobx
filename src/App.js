import React from 'react';
import CartItem from './CartItem';
import ItemForm from './ItemForm';
import 'bootstrap/dist/css/bootstrap.css'
import { Container, Row } from 'reactstrap'
import Example from './Bootstrap';

function App() {
  return (
    <div className="App">
      <div className="heading"><Example /></div>
      <footer>Find me on social media.</footer>
      <Container>
        <h3>React Mobx  - Shopping Cart Demo</h3>
        <br />
        <Row><ItemForm /></Row>
        <br />
        <Row><CartItem /></Row>
      </Container>
    </div>
  );
}

export default App;
