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
import Receipt from "./CheckoutComponents/Receipt"

interface Props {

}

interface State {
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
  totalPrice: string
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
    hideReceipt: true,
    price: 0,
    shippingPrice: 0,
    shippingTime: "",
    totalPrice: ""
  }

  render() {
    return (
      <CartContext.Consumer>
        {context =>
          <div style={{ position: 'relative', height: '100vh' }}>
            {console.log(context.cart.length)}
            <Siteframe {... {
              headerProps: {
                logo: <div className="ptl pbl pll" style={{ fontSize: '40px' }}><Icon src="react" style={{ stroke: 'red' }} /></div>,
                companyName: 'Our test store',
                productName: 'Test Store',
              }
            }}>
              <div className="bg-light-gray pal" style={{ height: '100%', overflow: "scroll" }}>
                {!this.state.hideReceipt ?
                <Receipt status={this.state} />
                : null}
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
                <Panel className="txt-c" {...{ title: 'Confirmation' }}>
                  <ConfirmOrderButton checkIfDone={this.checkIfInfoFilledOut} />
                  {/* <button onClick={this.checkIfInfoFilledOut}>Send</button> */}
                </Panel>
              </div>
            </Siteframe>
          </div>
        }
      </CartContext.Consumer>
    )
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
  
    /*If a payment has been selected*/
    if (window.location.pathname === '/checkout' || window.location.pathname === '/DesignSystem-app/checkout') {
      if (this.state.hideBankCard === false || this.state.hideKlarna === false || this.state.hideSwish === false) {
        if (this.context.cart.length >= 1) {
          /*If there is an item in the cart, and an shipping has been chosen, then we continue*/
          this.checkShippingChosen(dhl, shenker, postnord)
        }
      } else {
        alert("Your shopping bag is empty. Please add items to your shopping bag before checkout.")
        return false;
      }
    } else {console.log('hello')}
  }
  
  /**
   * 
   * @param dhl Everything that contains inside dhl
   * @param shenker  Everything that contains inside shenker
   * @param postnord Everything that contains inside postnord
   */
  checkShippingChosen (dhl:any, shenker:any, postnord:any) {
    let DHL = (document.getElementById("dhlShipping") as unknown as HTMLInputElement);
    let postNord = (document.getElementById("postNordShipping") as unknown as HTMLInputElement);
    let Shenker = (document.getElementById("shenkerShipping") as unknown as HTMLInputElement);
  
    console.log("hello")
    if (DHL.style.backgroundColor === "red") {
      console.log("DHL has been chosen")
      this.checkPaymentChosen(dhl)
    }
    else if (postNord.style.backgroundColor === "red") {
      console.log("Postnord has been chosen")
      this.checkPaymentChosen(postnord)
    }
    else if (Shenker.style.backgroundColor === "red") {
      console.log("Shenker has been chosen")
      this.checkPaymentChosen(shenker)
    }
    else {
      alert("please choose an shipping method")
    }
  }

  checkPaymentChosen(shipping:any) {
    if (this.state.hideBankCard === false) {
      this.checkBankCardFilledOut(shipping)
    } 
    if (this.state.hideKlarna === false) {
      this.checkKlarnaFilledOut(shipping)
    } 
    if (this.state.hideSwish === false) {
      this.checkSwishFilledOut(shipping)
    } 
  }
  
  
  /**
   * This checks if Swish has been filled out
   */
  checkSwishFilledOut(shipping:any) {
    let userFirstName = (document.getElementById("userFirstNameSwish") as unknown as HTMLInputElement);
    let userLastName = (document.getElementById("userLastNameSwish") as unknown as HTMLInputElement);
    let userPhoneNumber = (document.getElementById("userPhoneNumberSwish") as unknown as HTMLInputElement);

    if (userFirstName.value !== "" && userFirstName.value !== null &&
        userLastName.value !== "" && userLastName.value !== null &&
        userPhoneNumber.value !== "" && userLastName.value !== null) {

        this.orderHasBeenPlaced(shipping)
      }
      else {
        alert("Please fill out the payment options")
      }
    }

  /**
 * This checks if Klarna has been filled out
 */
  checkKlarnaFilledOut(shipping:any) {
    let userFirstName = (document.getElementById("userFirstNameKlarna") as unknown as HTMLInputElement);
    let userLastName = (document.getElementById("userLastNameKlarna") as unknown as HTMLInputElement);
    let userEmail = (document.getElementById("userEmailKlarna") as unknown as HTMLInputElement);

    if (userFirstName.value !== "" && userFirstName.value !== null &&
    userLastName.value !== "" && userLastName.value !== null &&
    userEmail.value !== "" && userLastName.value !== null) {

      this.orderHasBeenPlaced(shipping)

    }
    else {
    alert("Please fill out the payment options")
    }
  }

  /**
 * This checks if BankCard has been filled out
 */
  checkBankCardFilledOut(shipping:any) {
    let userFirstName = (document.getElementById("userFirstNameSwish") as unknown as HTMLInputElement);
    let userLastName = (document.getElementById("userLastNameSwish") as unknown as HTMLInputElement);
    let userCardNumber = (document.getElementById("userCardNumber") as unknown as HTMLInputElement);
    let userCvc = (document.getElementById("userCvc") as unknown as HTMLInputElement);
    let userMonth = (document.getElementById("userMonth") as unknown as HTMLInputElement);
    let userYear = (document.getElementById("userYear") as unknown as HTMLInputElement);

    if (userFirstName.value !== "" && userFirstName.value !== null &&
    userLastName.value !== "" && userLastName.value !== null &&
    userCardNumber.value !== "" && userLastName.value !== null &&
    userCvc.value !== "" && userCvc.value !== null &&
    userMonth.value !== "" && userMonth.value !== null &&
    userYear.value !== "" && userYear.value !== null) {

      this.orderHasBeenPlaced(shipping)

    } 
    else {
      alert("Please fill out the payment options")
    }
  }

  orderHasBeenPlaced(shipping:any) {


    this.setState({shippingPrice: shipping.cost})
    this.setState({shippingTime: shipping.time})
    this.setState({hideReceipt: false})

  }


}