import * as React from 'react';
import { Component } from 'react';
import { Panel } from 'pivotal-ui/react/panels';
import { Siteframe } from 'pivotal-ui/react/siteframe';
import 'pivotal-ui/css/alignment';
import 'pivotal-ui/css/positioning';
import { Link } from 'react-router-dom';
import { BrandButton, PrimaryButton } from 'pivotal-ui/react/buttons';
import { Icon } from 'pivotal-ui/react/iconography';
import 'pivotal-ui/css/iconography';
import { Form } from 'pivotal-ui/react/forms';
import ShoppingBag from "./CheckoutComponents/ShoppingBag";
import CheckoutInfo from "./CheckoutComponents/CheckoutInfo";
import Shipping from "./CheckoutComponents/Shipping";
import PaymentDivs from "./CheckoutComponents/PaymentDivs";
import BankCardInfo from "./CheckoutComponents/BankCardInfo";
import KlarnaInfo from "./CheckoutComponents/KlarnaInfo";
import { Grid } from 'pivotal-ui/react/flex-grids'
import SwishInfo from "./CheckoutComponents/SwishInfo";
import { Products } from 'src/ProductItems/ProductItemss';
import { CartContext } from './CartContext';
import ConfirmOrderButton from './ConfirmOrderButton';
import Receipt from "./CheckoutComponents/Receipt"

import { bankCardFields, klarnaFields, swishFields, checkoutInfoFields } from './fields';

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
  dhlSelected: boolean
  shenkerSelected: boolean,
  postNordSelected: boolean,

  hideBankCard: boolean
  hideSwish: boolean
  hideKlarna: boolean
  cart: Products[],
  hideReceipt: boolean,
  price: number,
  shippingPrice: number,
  shippingTime: string,
  totalPrice: number
  date: Date
  shipment: string
  payment: string
  isLoading: boolean
}

export default class Checkout extends Component<{}, State> {
  static contextType = CartContext;
  constructor(props: any) {
    super(props)
    this.state = {
      dhlSelected: false,
      shenkerSelected: false,
      postNordSelected: false,


      hideBankCard: true,
      hideSwish: true,
      hideKlarna: true,
      cart: [] as any,
      hideReceipt: true,
      price: 0,
      shippingPrice: 0,
      shippingTime: "",
      totalPrice: 0,
      shipment: "",
      date: new Date(),
      payment: "",
      isLoading: false
    }

    // this.checkPaymentChosen = this.checkPaymentChosen.bind(this);
    this.setState = this.setState.bind(this);
    // this.orderHasBeenPlaced = this.orderHasBeenPlaced.bind(this)
    // this.checkIfInfoFilledOut = this.checkIfInfoFilledOut.bind(this)
  }

  shouldComponentUpdate(nextProps: Props, nextState: State) {
    return true
  }

  getDeliveryDate = () => {
    const date = new Date()
    date.setDate(date.getDate() + parseInt(this.state.shippingTime))

    return date.toDateString().split(" ", 3).join(" ");
  }

  showFields = () => {
    const { hideBankCard, hideSwish, hideKlarna } = this.state;
    if (!hideBankCard) {
      return bankCardFields
    }
    if (!hideSwish) {
      return swishFields
    }
    if (!hideKlarna) {
      return klarnaFields
    }
    return {}
  }

  handleSubmit() {
    this.setState({ isLoading: true })
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 20000);
    this.checkShippingChosen()
    this.context.cart = []
  }

  render() {
    console.log(this.context.cart, this.state.shipment)
    return (
      <CartContext.Consumer>
        {context =>
          <div style={{ position: 'relative', height: '100vh' }}>
            <Form {...{
              resetOnSubmit: false,
              onSubmit: ({ initial, current }: { [property: string]: string }) => this.handleSubmit(),
              fields: Object.assign({}, [checkoutInfoFields][0], [this.showFields()][0]),
            }}>
              {({ fields, onBlur, onSubmit, canSubmit }: any) => {
                return (
                  <Siteframe {... {
                    headerProps: {
                      className: 'bg-light-gray paxl',
                      companyName: <span className="type-black">RetroShop</span>,
                      productName: <Link to="/"><BrandButton className="no-un">Go to frontPage</BrandButton></Link>,
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
                        <CheckoutInfo fields={fields} status={this.state} />
                      </Panel>
                      <Panel className="txt-c" {...{ title: 'Shipping' }}>
                        <Shipping passShipping={this.passShipping} />
                      </Panel >
                      <Panel className="txt-c" {...{ title: 'Payment' }}>
                        <PaymentDivs displayPayment={this.displayPayment} />
                        
                          {!this.state.hideBankCard ? <BankCardInfo fields={fields} /> : null}

                          {!this.state.hideKlarna ? <KlarnaInfo fields={fields} /> : null}

                          {!this.state.hideSwish ? <SwishInfo fields={fields} /> : null}

                        {this.state.isLoading ? <Icon style={{ 'fontSize': '96px' }} src="spinner-lg" /> :
                          <PrimaryButton onClick={() =>
                            this.context.cart.length === [] || this.context.cart.length === 0 || !this.context.cart ?
                              alert("Your shopping cart is empty") : !canSubmit() ?
                                alert("Please make sure everything is filled in correctly") : this.state.shipment === "" ?
                                  alert("Please select a shipping method") : onSubmit()}>Confirm order</PrimaryButton>}
                      </Panel>
                    </div>
                  </Siteframe>
                )
              }}
            </Form>
          </div>
        }
      </CartContext.Consumer>
    )
  }

  handleConfirmClick = () => {
    this.checkShippingChosen()
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

  passShipping = (props: any) => {

    if (props === "dhl") {
      console.log("dhl has been selected")
      this.setState({ dhlSelected: true, shenkerSelected: false, postNordSelected: false, shipment: "dhl" })
    }
    if (props === "shenker") {
      console.log("shenker has been selected")
      this.setState({ dhlSelected: false, shenkerSelected: true, postNordSelected: false, shipment: "shenker" })
    }
    if (props === "postnord") {
      console.log("postnord has been selected")
      this.setState({ dhlSelected: false, shenkerSelected: false, postNordSelected: true, shipment: "postnord" })
    }

  }

  displayPayment = (props:any) => {

    if(props.selected === "bankCard") {
      this.setState({ hideBankCard: false, hideSwish: true, hideKlarna: true, payment: "bankcard" })
    }
    if(props.selected === "Swish") {
      this.setState({ hideBankCard: true, hideSwish: false, hideKlarna: true, payment: "swish" })
    }
    if(props.selected === "Klarna") {
      this.setState({ hideBankCard: true, hideSwish: true, hideKlarna: false, payment: "klarna" })
    }
  }

checkShippingChosen() {

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

  console.log("shipping chosen")
  if (this.state.dhlSelected === true) {
    console.log("DHL has been chosen")
    this.orderHasBeenPlaced(dhl)
    return true;
  }

  if (this.state.shenkerSelected === true) {
    console.log("Shenker has been chosen")
    this.orderHasBeenPlaced(shenker)
    return true;
  }

  if (this.state.postNordSelected === true) {
    console.log("Postnord has been chosen")
    this.orderHasBeenPlaced(postnord)
    return true;
  }
  alert("Please choose a shipping method")
  return false;

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

