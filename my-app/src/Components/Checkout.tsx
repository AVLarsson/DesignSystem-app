import * as React from 'react';
import { Component } from 'react';
import { Panel } from 'pivotal-ui/react/panels';
import { Siteframe } from 'pivotal-ui/react/siteframe';
import { Icon } from 'pivotal-ui/react/iconography';
import 'pivotal-ui/css/alignment';
import 'pivotal-ui/css/positioning';

import ShoppingBag from "./CheckoutComponents/ShoppingBag";
import CheckoutInfo from "./CheckoutComponents/CheckoutInfo";
import Shipping from "./CheckoutComponents/Shipping";
import PaymentDivs from "./CheckoutComponents/PaymentDivs";
import BankCardInfo from "./CheckoutComponents/BankCardInfo";
import KlarnaInfo from "./CheckoutComponents/KlarnaInfo";
import SwishInfo from "./CheckoutComponents/SwishInfo";
import { Products } from 'src/ProductItems/ProductItemss';
import { CartContext } from './CartContext';
import ConfirmOrderButton from './ConfirmOrderButton';

interface State {
  hideBankCard: boolean
  hideSwish: boolean
  hideKlarna: boolean
  firstName: boolean,
  lastName: boolean,
  email: boolean,
  adress: boolean,
  cart: Products[]
}
export interface theShoppingCart {
  id: string,
  value: number
}

// interface State {
//   counters: Array<Products>
// }

export default class Checkout extends Component<{}, State> {
  static contextType = CartContext;

  state = {
    hideBankCard: true,
    hideSwish: true,
    hideKlarna: true,
    cart: [] as any,
    firstName: false,
    lastName: false,
    email: false,
    adress: false,
  }

  componentDidMount() {
    if (localStorage.firstName) {
      this.state.firstName = true;
    }
  }


  render() {
    return (
      <CartContext.Consumer>
        {context =>
          <div style={{ position: 'relative', height: '100vh' }}>
            <Siteframe {... {
              headerProps: {
                logo: <div className="ptl pbl pll" style={{ fontSize: '40px' }}><Icon src="react" style={{ stroke: 'red' }} /></div>,
                companyName: 'Our test store',
                productName: 'Test Store',
              }
            }}>
              <div className="bg-light-gray pal" style={{ height: '100%', overflow: "scroll" }}>
                <Panel className="txt-c" {...{ title: 'Shopping Bag' }}>
                  <ShoppingBag cart={context.cart} />
                </Panel>
                <Panel className="txt-c" {...{ title: 'Your Information' }}>
                  <CheckoutInfo status={this.state} />
                </Panel>
                <Panel className="txt-c" {...{ title: 'Shipping' }}>
                  <Shipping />
                </Panel >
                <Panel className="txt-c" {...{ title: 'Payment' }}>
                  <PaymentDivs displayBankCard={this.displayBankCard} displayKlarna={this.displayKlarna} displaySwish={this.displaySwish} />
                  {!this.state.hideBankCard ?
                    <BankCardInfo />
                    : null}

                  {!this.state.hideKlarna ?
                    <KlarnaInfo />
                    : null}

                  {!this.state.hideSwish ?
                    <SwishInfo />
                    : null}

                </Panel>
                <Panel className="txt-c pbxxl" {...{ title: 'Confirmation' }}>
                  <p>Total: {this.getTotal()}kr</p>
                  <ConfirmOrderButton checkIfDone={this.checkIfInfoFilledOut} />
                </Panel>
              </div>
            </Siteframe>
          </div>
        }
      </CartContext.Consumer>
    )
  }

  getTotal() {
    const cartContext = this.context;
    const total = cartContext.getCurrentTotal();
    
    return total;
  }

  /*
    addToTheCart = (addMeat:string) => {
          
      let productList = this.state.cart
      let number = 0;
      
      productList.forEach((product: Products) => {
  
          if(product.id === addMeat) {
              product.value++
              console.log("two")
          }
          if(product.id !== addMeat) {
              number++
          }
          if (number === this.state.cart.length) {                
              this.state.cart.push({id: addMeat, value: 1})
              console.log("one")
          }
      })
      this.setState({
          counters: productList
      })
  }*/
  /*
  incrementProduct = (id: string) => {
  
      let productList = this.state.cart
  
      productList.forEach((product: Products) => {
          if(product.id === id) {
              product.value++
          }
      })
  
      this.setState({
          counters: productList
      })
  }
  
  minusProduct = (id:string) => {
    let productList = this.state.cart
  
    productList.forEach((product: Products) => {
      if(product.id === id) {
        if(product.value <= 1) {
          this.deleteProduct(id)
        }
        else{
          product.value--
          this.setState({
            counters: productList
          })
        }
      }
    })
  }
  
  deleteProduct = (id:string) => {
      const counters = this.state.cart.filter(c => c.id !== id);
      this.setState({counters});
  }
  
    */
  displayBankCard = () => {
    this.setState({ hideBankCard: false })
    this.setState({ hideSwish: true })
    this.setState({ hideKlarna: true })
  }
  displaySwish = () => {
    this.setState({ hideBankCard: true })
    this.setState({ hideSwish: false })
    this.setState({ hideKlarna: true })
  }
  displayKlarna = () => {
    this.setState({ hideBankCard: true })
    this.setState({ hideSwish: true })
    this.setState({ hideKlarna: false })
  }


  checkIfInfoFilledOut = () => {
    // If the location is checkout, otherwise it checks on homepage as well. */
    if (window.location.pathname === '/checkout' || window.location.pathname === '/DesignSystem-app/checkout') {
      /*If a payment has been selected*/
      if (this.state.hideBankCard === false || this.state.hideKlarna === false || this.state.hideSwish === false) {
        // If cart is not empty
        if (this.context.cart.length >= 1) {
          //If swish has been selected and filled out 
          if (this.state.hideSwish === false && localStorage.firstName && localStorage.lastName && localStorage.phoneNumber) {
            alert("Your order has been placed.")
            return true;
          }
          //if klarna has been selected and filled out
          else if (this.state.hideKlarna === false && localStorage.firstName && localStorage.lastName && localStorage.email) {
            alert("Your order has been placed.")
            return true;
          }
          else if (this.state.hideBankCard === false && localStorage.firstName && localStorage.lastName) {
            alert("Your order has been placed.")
            return true;
          }
          else {
            alert("please fill out the payment")
            return false;
          }
        }
      } else {
        alert("Your shopping bag is empty. Please add items to your shopping bag before checkout.")
        return false;
      }
    }
  }
}
