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

export default class App extends React.Component {
  render() {
    return (
      <FirebaseContext.Provider value={new Firebase()}>
        <Cart>
          <Router>
            <Switch>

              {mockedProducts.map(product => {
                return (
                  <Route key={product.id} path={`/product${product.id}`}>
                    <ProdPage id={product.id} product={product} />
                  </Route>
                )
              })}

              <Route path="/checkout" component={Checkout} />
              <Route path="/">
                <HomePage />
              </Route>
            </Switch>
          </Router>
        </Cart>
      </FirebaseContext.Provider>
    );
  }
}