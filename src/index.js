import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { observable, action, autorun } from 'mobx'
class ShoppingCart {
  @observable
  items = [];

  @action
  addItem(item) {
    this.items.push(item)
  }
}

const shoppingCart = new ShoppingCart()
shoppingCart.addItem({ id: 3, name: "Computer", price: 3000 })
shoppingCart.addItem({ id: 10, name: "Mouse", price: 50 })

autorun(() => {
  console.log(shoppingCart.items.length)
  console.log(shoppingCart.items.map(item => item.name))
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
