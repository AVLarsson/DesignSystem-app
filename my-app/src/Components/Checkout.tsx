import * as React from 'react';
import { Component } from 'react';
import { Panel } from 'pivotal-ui/react/panels';
import { Siteframe } from 'pivotal-ui/react/siteframe';
import 'pivotal-ui/css/alignment';
import 'pivotal-ui/css/positioning';
import { Link } from 'react-router-dom';
import { BrandButton } from 'pivotal-ui/react/buttons';

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

interface shippingType {
  cost: number;
  time: number;
}

interface Props {
  passStateFromInfo: any
  passStateFromKlarna: any
  passStateFromBankCard: any
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
  date: Date
}

export default class Checkout extends Component<{}, State, { onChange: any }> {
  static contextType = CartContext;
  constructor(props: any) {
    super(props)
    this.state = {
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
      totalPrice: 0,

      date: new Date()
    }

    this.checkPaymentChosen = this.checkPaymentChosen.bind(this);
    this.setState = this.setState.bind(this);
    this.orderHasBeenPlaced = this.orderHasBeenPlaced.bind(this)
    this.checkIfInfoFilledOut = this.checkIfInfoFilledOut.bind(this)
  }

  getDeliveryDate = () => {
    console.log("hello")
    const date = new Date()
    date.setDate(date.getDate() + parseInt(this.state.shippingTime))
    
    return date.toDateString().split(" ", 3).join(" ");
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
                  <span style={{ color: 'black', fontSize: "30px", fontStyle: "italic" }}>RetroShop</span>,
                productName: <div><Link to="/"><BrandButton>Go to frontPage</BrandButton></Link></div>,
              }
            }}>
              <div className='bg-light-green paxl scroll' style={{ height: '100%', overflow: "scroll" }}>
                {!this.state.hideReceipt ?
                  <Receipt status={this.state} deliveryDate={this.getDeliveryDate} />
                  : null}
                <Panel className="txt-c" {...{ title: 'Shopping Bag' }}>
                  <ShoppingBag cart={context.cart} />
                  <p className="txt-r h4 em-high">Total: {this.getTotal()}kr</p>
                </Panel>
                <Panel className="txt-c" {...{ title: 'Your Information' }}>
                  <CheckoutInfo passStateFromInfo={this.passStateFromInfo} status={this.state} />
                </Panel>
                <Panel className="txt-c" {...{ title: 'Shipping' }}>
                  <Shipping passShipping={this.passShipping} />
                </Panel >
                <Panel className="txt-c" {...{ title: 'Payment' }}>
                  <PaymentDivs displayBankCard={this.displayBankCard} displayKlarna={this.displayKlarna} displaySwish={this.displaySwish} />
                  {!this.state.hideBankCard ?
                    <BankCardInfo checkIfDone={this.checkIfInfoFilledOut} passStateFromBankCard={this.passStateFromBankCard} date={this.state.date} checkIfNumber={this.checkIfNumber} />
                    : null}

                  {!this.state.hideKlarna ?
                    <KlarnaInfo checkIfDone={this.checkIfInfoFilledOut} passStateFromKlarna={this.passStateFromKlarna} />
                    : null}

                  {!this.state.hideSwish ?
                    <SwishInfo checkIfDone={this.checkIfInfoFilledOut} passStateFromSwish={this.passStateFromSwish} checkIfNumber={this.checkIfNumber} />
                    : null}

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

  checkIfNumber(input: any) {
    const regex = new RegExp(/^[0-9\s]+$/i)
    return regex.test(input)
  }

  passStateFromInfo = (props: any) => {
    console.log(props.adress)

    if (props.firstName !== "" && props.firstName != null
      && props.lastName !== "" && props.lastName != null
      && props.country !== "" && props.country != null
      && props.phoneNumber !== "" && props.phoneNumber != null
      && props.zipcode !== "" && props.zipcode != null
      && props.email !== "" && props.email != null
      && props.adress !== "" && props.email != null) {
      this.setState({ userInfoWritten: true })
      console.log("Info is done")
    } else {
      this.setState({ userInfoWritten: false })
    }
  }

  

  passStateFromKlarna = ({ firstName, lastName, email }: any) => {
      this.setState({ klarnaInfoWritten: true }, this.checkIfInfoFilledOut)
      console.log("Klarna is done")
  }

  passStateFromSwish = ({ firstName, lastName, phoneNumber }: any) => {
      this.setState({ swishInfoWritten: true }, this.checkIfInfoFilledOut)
      console.log("Swish is done")
      // this.checkIfInfoFilledOut()
  }

  passStateFromBankCard = (props: any) => {
      this.setState({ bankCardInfoWritten: true }, this.checkIfInfoFilledOut)
      console.log("bank done")
  }

  passShipping = (props: any) => {

    if (props.dhl.selected === true) {
      console.log("dhl has been selected")
      this.setState({ dhlSelected: true, shenkerSelected: false, postNordSelected: false  })
    }
    if (props.shenker.selected === true) {
      console.log("shenker has been selected")
      this.setState({ dhlSelected: false, shenkerSelected: true, postNordSelected: false })
    }
    if (props.postnord.selected === true) {
      console.log("postnord has been selected")
      this.setState({ dhlSelected: false, shenkerSelected: false, postNordSelected: true })
    }

  }

  displayBankCard = () => {
    this.setState({ hideBankCard: false, hideSwish: true, hideKlarna: true })
  }
  displaySwish = () => {
    this.setState({ hideBankCard: true, hideSwish: false, hideKlarna: true })
  }
  displayKlarna = () => {
    this.setState({ hideBankCard: true, hideSwish: true, hideKlarna: false })

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
    console.log("Check if info")
    // If the location is checkout, otherwise it checks on homepage as well. */
    if (window.location.pathname === '/checkout' || window.location.pathname === '/DesignSystem-app/checkout') {
      /*If a payment has been selected*/
      if (this.state.hideBankCard === false || this.state.hideKlarna === false || this.state.hideSwish === false) {
        // If cart is not empty
        if (this.context.cart.length >= 1) {
          // If the userInfo has been submited
          if (this.state.userInfoWritten === true) {
            /*If there is an item in the cart, and an shipping has been chosen, then we continue*/
            this.checkShippingChosen(dhl, shenker, postnord);
            return true;
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
    } return false;
  }



  /**
   * 
   * @param dhl Everything that contains inside dhl
   * @param shenker  Everything that contains inside shenker
   * @param postnord Everything that contains inside postnord
   */
  checkShippingChosen(dhl: shippingType, shenker: shippingType, postnord: shippingType) {
    console.log("shipping chosen")
    if (this.state.dhlSelected === true) {
      console.log("DHL has been chosen")
      this.checkPaymentChosen(dhl)
      return true;
    }

    if (this.state.shenkerSelected === true) {
      console.log("Shenker has been chosen")
      this.checkPaymentChosen(shenker)
      return true;
    }

    if (this.state.postNordSelected === true) {
      console.log("Postnord has been chosen")
      this.checkPaymentChosen(postnord)
      return true;
    }
    alert("Please choose a shipping method")
    return false;

  }

  checkPaymentChosen = (shipping: shippingType) => {
    console.log('Payment')
    if (this.state.hideBankCard === false && this.state.bankCardInfoWritten) {
        return this.orderHasBeenPlaced(shipping)
    }
    if (this.state.hideKlarna === false && this.state.klarnaInfoWritten) {
        return this.orderHasBeenPlaced(shipping)
    }
    if (this.state.hideSwish === false && this.state.swishInfoWritten) {
        return this.orderHasBeenPlaced(shipping)
    } return false;
  }

  orderHasBeenPlaced(shipping: any) {
    const cart = this.context;
    console.log("order placed")
    const thePrice = this.getTotal()
    const theTotalPrice = thePrice + shipping.cost;
    
    this.setState({ shippingPrice: shipping.cost, shippingTime: shipping.time, price: thePrice, totalPrice: theTotalPrice },
      () => setTimeout(() => {
        this.setState({ hideReceipt: false })
      }, 2000))
      
      cart.cart.length = 0;
    return true;
  }
}

