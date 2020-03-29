import * as React from 'react';

export default class PaymentDivs extends React.Component <{displayPayment: () => void}> {
    render() {
        return (
            <div onClick={() => this.props.displayPayment()} >
                <div style={{display:"flex",flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                  <div className="txt-c" style={this.shippingPaymentBox}>
                    <div style={this.shippingPaymentBoxInside}>
                    Bank Card
                    </div>
                    <p>Mastercard</p>
                    <p>Visa</p>
                </div>
                <div className="txt-c" style={this.shippingPaymentBox}>
                <div style={this.shippingPaymentBoxInside}>
                    Swish
                </div>
                </div>
                <div className="txt-c" style={this.shippingPaymentBox}>
                <div style={this.shippingPaymentBoxInside}>
                    Klarna
                </div>
                <p>Split up your payment</p>
                </div>
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