import * as React from 'react';
import 'pivotal-ui/css/selection';

interface Props {
  passShipping: any
}

export default class Shipping extends React.Component <Props, {}> {
  constructor(props:any) {
    super(props);
    this.handleDivSelect = this.handleDivSelect.bind(this)
    // this.state = {date: new Date()};
  }

  state = {
    dhl: {
      price: 99,
      time: 24,
      selected: false
    },
    shenker: {
      price: 49,
      time: 48,
      selected: false
    },
    postnord: {
      price: "free",
      time: 72,
      selected: false
    },
}

  componentDidMount() {
      let shippingDiv = document.getElementsByClassName("shippingDiv")

      for (let i = 0; i < shippingDiv.length; i++) {
        shippingDiv[i].addEventListener("click", this.handleDivSelect)
          
      }
  }


    render() {
        return (
            <div className="pui-no-select"  style={{display:"flex",flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
            <div id="dhlShipping" className="shippingDiv" style={this.shippingPaymentBox}>
              <div style={this.shippingPaymentBoxInside}>
                DHL
              </div>
              <p>24h</p>
              <p className="amountForShipping">99kr</p>
            </div>
            <div id="shenkerShipping" className="shippingDiv" style={this.shippingPaymentBox}>
              <div style={this.shippingPaymentBoxInside}>
                Shenker
              </div>
              <p>48h</p>
              <p className="amountForShipping">49kr</p>
            </div>
            <div id="postNordShipping" className="shippingDiv" style={this.shippingPaymentBox}>
              <div style={this.shippingPaymentBoxInside}>
                Postnord
              </div>
              <p>72h</p>
              <p className="amountForShipping">free</p>
            </div>
          </div>
        )
    }
    
    handleDivSelect(event:any) {
      let paymentDiv = document.getElementsByClassName("shippingDiv") as HTMLCollectionOf<HTMLElement>

      for (let i = 0; i < paymentDiv.length; i++) {
          paymentDiv[i].style.backgroundColor = "lightgray"

          if (event.currentTarget.querySelectorAll(".amountForShipping")[i]) {
            
            console.log(event.currentTarget.querySelectorAll(".amountForShipping")[i].textContent)
          }
      }
      event.currentTarget.style.backgroundColor = "red"


      if (event.currentTarget.id == "dhlShipping") {
        this.state.dhl.selected = true;
        this.state.shenker.selected = false;
        this.state.postnord.selected = false;
      }


      if (event.currentTarget.id == "shenkerShipping") {
        this.state.dhl.selected = false;
        this.state.shenker.selected = true;
        this.state.postnord.selected = false;
      }


      if (event.currentTarget.id == "postNordShipping") {
        this.state.dhl.selected = false;
        this.state.shenker.selected = false;
        this.state.postnord.selected = true;
      }

      this.props.passShipping(this.state)
  }
  


    shippingPaymentBox: React.CSSProperties = {
        width: "150px",
        height: "150px",
        backgroundColor: "lightgray",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        margin: "10px",

        border: "2px solid black",
        borderRadius: "16px",
        fontStyle: "italic",
        fontSize: "16px",
        fontWeight: "bold"
      }
      shippingPaymentBoxInside: React.CSSProperties = {
        width: "100px",
        height: "50px",
        backgroundColor: "red",
        margin: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        border: "2px solid black",
        borderRadius: "16px"
      }
}