import * as React from 'react';
import { Component } from 'react';
import { Panel } from 'pivotal-ui/react/panels';
import { Siteframe } from 'pivotal-ui/react/siteframe';
import 'pivotal-ui/css/alignment';
import 'pivotal-ui/css/positioning';
import { Link } from 'react-router-dom';
import {BrandButton} from 'pivotal-ui/react/buttons';

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
import Receipt from "./CheckoutComponents/Receipt"

interface Props {
  passStateFromInfo:any
  passStateFromKlarna:any
  passStateFromBankCard:any
  passShipping: any
}

interface State {
  userInfoWritten: boolean,
  klarnaInfoWritten: boolean,
  swishInfoWritten: boolean,
  bankCardInfoWritten: boolean

  dhlSelected: boolean
  shenkerSelected: boolean,
  postNordSelected: boolean,

  hideBankCard: boolean
  hideSwish: boolean
  hideKlarna: boolean
  firstName: boolean,
  lastName: boolean,
  email: boolean,
  adress: boolean,
  cart: Products[],
  hideReceipt: boolean,
  price: number,
  shippingPrice: number,
  shippingTime: string,
  totalPrice: number
}

export default class Checkout extends Component<{}, State, {onChange:any}> {
  static contextType = CartContext;

  state = {
    userInfoWritten: false,
    klarnaInfoWritten: false,
    swishInfoWritten: false,
    bankCardInfoWritten: false,

    dhlSelected: false,
    shenkerSelected: false,
    postNordSelected: false,


    hideBankCard: true,
    hideSwish: true,
    hideKlarna: true,
    cart: [] as any,
    firstName: false,
    lastName: false,
    email: false,
    adress: false,
    hideReceipt: true,
    price: 0,
    shippingPrice: 0,
    shippingTime: "",
    totalPrice: 0
  }

  render() {
    return (
      <CartContext.Consumer>
        {context =>
          <div style={{ position: 'relative', height: '100vh' }}>
            <Siteframe {... {
              headerProps: {
                className: 'bg-light-gray paxl',
                companyName:
                    <span style={{ color: 'black', fontSize:"30px", fontStyle:"italic" }}>RetroShop</span>,
                productName: <div><Link to="/"><BrandButton>Go to frontPage</BrandButton></Link></div>,
              }
            }}>
              <div className='bg-light-green paxl scroll' style={{ height: '100%', overflow: "scroll" }}>
                {!this.state.hideReceipt ?
                <Receipt status={this.state} />
                : null}
                <Panel className="txt-c" {...{ title: 'Shopping Bag' }}>
                  <ShoppingBag cart={context.cart} />
                  <p className="txt-r h4 em-high">Total: {this.getTotal()}kr</p>
                </Panel>
                <Panel className="txt-c" {...{ title: 'Your Information' }}>
                  <CheckoutInfo passStateFromInfo={this.passStateFromInfo} status={this.state} />
                </Panel>
                <Panel className="txt-c" {...{ title: 'Shipping' }}>
                  <Shipping passShipping={this.passShipping}/>
                </Panel >
                <Panel className="txt-c" {...{ title: 'Payment' }}>
                  <PaymentDivs displayBankCard={this.displayBankCard} displayKlarna={this.displayKlarna} displaySwish={this.displaySwish} />
                  {!this.state.hideBankCard ?
                    <BankCardInfo passStateFromBankCard={this.passStateFromBankCard} />
                    : null}

                  {!this.state.hideKlarna ?
                    <KlarnaInfo passStateFromKlarna={this.passStateFromKlarna} />
                    : null}

                  {!this.state.hideSwish ?
                    <SwishInfo passStateFromSwish={this.passStateFromSwish} />
                    : null}

                </Panel>
                <Panel className="txt-c pbxxl" {...{ title: 'Confirmation' }}>
                  <ConfirmOrderButton checkIfDone={this.checkIfInfoFilledOut} />
                </Panel>
              </div>
            </Siteframe>
          </div>
        }
      </CartContext.Consumer>
    )
  }


  /**
   * Calls function from CartContext that calculates shopping bag total price.
   * @returns {number} Total price of all products in shopping bag.
   */
  getTotal(): number {
    const cartContext = this.context;
    const total = cartContext.getCurrentTotal();

    return total;
  }

  passStateFromInfo= (props:any) => {
    console.log(props.adress)

      if(props.firstName !== "" && props.firstName != null
      && props.lastName !== "" && props.lastName != null 
      && props.country !== "" && props.country != null
      && props.phoneNumber !== "" && props.phoneNumber != null
      && props.zipcode !== "" && props.zipcode != null
      && props.email !== "" && props.email != null
      && props.adress !== "" && props.email != null) {
        this.setState({userInfoWritten:true})
        console.log("Info is done")
      }else{
        this.setState({userInfoWritten:false})
      }
  }

  passStateFromKlarna= (props:any) => {

      if(props.firstName !== "" && props.firstName != null
      && props.lastName !== "" && props.lastName != null 
      && props.email !== "" && props.email != null) {
        this.setState({klarnaInfoWritten:true})
        console.log("Klarna is done")
      }else{
        this.setState({klarnaInfoWritten:false})
      }
  }

  passStateFromSwish= (props:any) => {

      if(props.firstName !== "" && props.firstName != null
      && props.lastName !== "" && props.lastName != null 
      && props.phoneNumber !== "" && props.phoneNumber != null) {
        this.setState({swishInfoWritten:true})
        console.log("Swish is done")
      }else{
        this.setState({swishInfoWritten:false})
      }
  }

  passStateFromBankCard= (props:any) => {

      if(props.firstName !== "" && props.firstName != null
      && props.lastName !== "" && props.lastName != null 
      && props.bankNumber !== "" && props.bankNumber != null
      && props.cvc !== "" && props.cvc != null
      && props.month !== "" && props.month != null
      && props.year !== "" && props.year != null) {
        this.setState({bankCardInfoWritten:true})
        console.log("Bankcard is done")
      }else{
        this.setState({bankCardInfoWritten:false})
      }
  }

  passShipping = (props:any) => {

    if (props.dhl.selected == true) {
      console.log("dhl has been selected")
      this.setState({dhlSelected:true})
      this.setState({shenkerSelected:false})
      this.setState({postNordSelected:false})
    }
    if (props.shenker.selected == true) {
      console.log("shenker has been selected")
      this.setState({dhlSelected:false})
      this.setState({shenkerSelected:true})
      this.setState({postNordSelected:false})
    }
    if (props.postnord.selected == true) {
      console.log("postnord has been selected")
      this.setState({dhlSelected:false})
      this.setState({shenkerSelected:false})
      this.setState({postNordSelected:true})
    }

  }

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
    let dhl = {
      cost: 99,
      time: 1
    };
    let shenker = {
      cost: 49,
      time: 2
    };
    let postnord = {
      cost: 0,
      time: 3
    };

    // If the location is checkout, otherwise it checks on homepage as well. */
    if (window.location.pathname === '/checkout' || window.location.pathname === '/DesignSystem-app/checkout') {
      /*If a payment has been selected*/
      if (this.state.hideBankCard === false || this.state.hideKlarna === false || this.state.hideSwish === false) {
        // If cart is not empty
        if (this.context.cart.length >= 1) {
          // If the userInfo has been submited
          if(this.state.userInfoWritten == true) {
            /*If there is an item in the cart, and an shipping has been chosen, then we continue*/
            if(this.state.dhlSelected == true || this.state.postNordSelected == true || this.state.shenkerSelected == true) {
              this.checkShippingChosen(dhl, shenker, postnord);
              return true;
            } else {
              alert("please choose an shipping method")
              return false;
            }
          } else {
            alert("Please fill in your information")
          }
        } else {
          alert("Your shopping bag is empty. Please add items to your shopping bag before checkout.");
          return false;
        }
      } else {
        alert("Please select a payment method.")
        return false;
      }
    } else { return false; }
  }

  /**
   * 
   * @param dhl Everything that contains inside dhl
   * @param shenker  Everything that contains inside shenker
   * @param postnord Everything that contains inside postnord
   */
  checkShippingChosen(dhl: any, shenker: any, postnord: any) {

    if (this.state.dhlSelected == true) {
      console.log("DHL has been chosen")
      this.checkPaymentChosen(dhl)
      return true;
    }

    if (this.state.shenkerSelected == true) {
      console.log("Shenker has been chosen")
      this.checkPaymentChosen(shenker)
      return true;
    }

    if (this.state.postNordSelected == true) {
      console.log("Postnord has been chosen")
      this.checkPaymentChosen(postnord)
      return true;
    }
  }

  checkPaymentChosen(shipping: any) {
    if (this.state.hideBankCard === false) {
      if (this.state.bankCardInfoWritten) {
        this.orderHasBeenPlaced(shipping);
        return true;
      }
    }
    if (this.state.hideKlarna === false) {
      if (this.state.klarnaInfoWritten) {
        this.orderHasBeenPlaced(shipping);
        return true;
      }
    }
    if (this.state.hideSwish === false) {
      if (this.state.swishInfoWritten) {
        this.orderHasBeenPlaced(shipping);
        return true;
      }
    } else { return false; }
  }

  orderHasBeenPlaced(shipping:any) {

    let thePrice = this.getTotal()
    
    this.setState({shippingPrice: shipping.cost})
    this.setState({shippingTime: shipping.time})
    this.setState({price: thePrice})
    let theTotalPrice = thePrice + shipping.cost;
    
    this.setState({totalPrice: theTotalPrice})
  setTimeout(() => {
      this.setState({hideReceipt: false})
    }, 2000);
    return true;
    
  }
}
