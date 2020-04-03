import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'pivotal-ui/css/flex-grids';
import 'pivotal-ui/css/colors';
import 'pivotal-ui/css/images';
import 'pivotal-ui/css/panels';
import 'pivotal-ui/css/whitespace';
import 'pivotal-ui/css/border';
import 'pivotal-ui/css/typography';
import 'pivotal-ui/css/vertical-alignment';
import 'pivotal-ui/css/positioning';
import '../styles/main.css'
import Firebase, { FirebaseContext } from '../Firebase';
import HomePage from './HomePage';
import Checkout from './Checkout';
import { mockedProducts } from '../MockedData';
import ProdPage from './prodPage';
import Cart from './Cart';
import { CartContext } from './CartContext';

export default class App extends React.Component {


  render() {
    return (

      <Cart>
        <FirebaseContext.Provider value={new Firebase()}>
          <Router basename='/DesignSystem-app'>
        <Switch>
          {mockedProducts.map(product => {
            const component = `product${product.id}`
            return (
              <Route key={product.id} path={`/${component}`}>
              <ProdPage id={product.id} product={product} />
              </Route>
            </Switch>
          </Router>
        </FirebaseContext.Provider>
      </Cart>
    );
  }
  static contextType = CartContext;
}
