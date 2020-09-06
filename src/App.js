import React from 'react';
import CartItem from './CartItem';
import { ItemForm } from './ItemForm';

function App(props) {
  return (
    <div className="App">
      <CartItem store={props.store} />
      <ItemForm store={props.store} />
    </div>
  );
}

export default App;
