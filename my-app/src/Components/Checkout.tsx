import * as React from 'react';
import {Component} from 'react';
import {Panel} from 'pivotal-ui/react/panels';
import {Siteframe} from 'pivotal-ui/react/siteframe';
import {Icon} from 'pivotal-ui/react/iconography';
import 'pivotal-ui/css/alignment';
import 'pivotal-ui/css/positioning';

import ShoppingBag from "./CheckoutComponents/ShoppingBag";
import CheckoutInfo from "./CheckoutComponents/CheckoutInfo";
import Shipping from "./CheckoutComponents/Shipping";
import Payment from "./CheckoutComponents/Payment"

export default class Checkout extends Component {
  render() {
    return (
      <div style={{position: 'relative', height: '100vh'}}>
        <Siteframe {... {
          headerProps:  {
            logo: <div className="ptl pbl pll" style={{fontSize: '40px'}}><Icon src="react" style={{stroke: 'red'}}/></div>,
            companyName: 'Our test store',
            productName: 'Test Store',
          }
        }}>
        <div className="bg-light-gray pal" style={{height: '100%', overflow: "scroll" }}>
          <Panel className="txt-c" {...{title: 'Shopping Bag'}}>
          <ShoppingBag />
            </Panel>
          <Panel className="txt-c" {...{title: 'Your Information'}}>
            <CheckoutInfo />
          </Panel>
          <Panel className="txt-c" {...{title: 'Shipping'}}>
            <Shipping />
          </Panel >
          <Panel className="txt-c" {...{title: 'Payment'}}>
            <Payment />
          </Panel>
          <Panel className="txt-c" {...{title: 'Confirmation'}}>
            <button>Send</button>
          </Panel>
          </div>
        </Siteframe>
      </div>
    )
  }
}