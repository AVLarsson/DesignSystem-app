import React from 'react';
// import HomePage from './HomePage';
import 'pivotal-ui/css/flex-grids';
import 'pivotal-ui/css/colors';
import 'pivotal-ui/css/images';
import 'pivotal-ui/css/panels';
import 'pivotal-ui/css/whitespace';
import 'pivotal-ui/css/border';
import 'pivotal-ui/css/typography';
import 'pivotal-ui/css/vertical-alignment';
import 'pivotal-ui/css/positioning';
import './styles/main.css'
import CartProduct from './CartProduct'
import Firebase, { FirebaseContext } from './Firebase';

function App() {
  return (
    <FirebaseContext.Provider value={new Firebase()}>
       <CartProduct />
    </FirebaseContext.Provider>

  );
}
/* <ShoppingCart firebase={firebase}/> */

export default App;
