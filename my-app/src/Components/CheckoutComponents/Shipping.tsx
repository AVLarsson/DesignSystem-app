import * as React from 'react';


export default class Shipping extends React.Component  {

    render() {
        return (
            <div  style={{display:"flex",flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
            <div className="theDiv" style={this.shippingPaymentBox}>
              <div style={this.shippingPaymentBoxInside}>
                DHL
              </div>
              <p>24h</p>
              <p>99kr</p>
            </div>
            <div className="theDiv" style={this.shippingPaymentBox}>
              <div style={this.shippingPaymentBoxInside}>
                Shenker
              </div>
              <p>48h</p>
              <p>49kr</p>
            </div>
            <div className="theDiv" style={this.shippingPaymentBox}>
              <div style={this.shippingPaymentBoxInside}>
                Postnord
              </div>
              <p>72h</p>
              <p>free</p>
            </div>
          </div>
        )
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