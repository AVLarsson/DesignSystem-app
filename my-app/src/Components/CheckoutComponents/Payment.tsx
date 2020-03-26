import * as React from 'react';
import {Form} from 'pivotal-ui/react/forms';
import {Grid, FlexCol} from 'pivotal-ui/react/flex-grids';
import {Input} from 'pivotal-ui/react/inputs';

export default class Payment extends React.Component {
    render() {
        return (
            <div>
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
            <Form  style={{display: "flex", justifyContent: "center"}}>
                  {() => {
                    return (
                      <div>
                          <Grid className="grid-show mbxl">
                          
                            <FlexCol><Input placeholder="First Name" type="text"/></FlexCol>
                            <FlexCol><Input placeholder="Last Name" type="text"/></FlexCol>
                            
                          </Grid>
                          <Grid className="grid-show mbxl">
                          
                            <FlexCol col={10}><Input placeholder="CardNumber" type="text"/></FlexCol>
                            <FlexCol><Input placeholder="CVC" type="text"/></FlexCol>
                            <FlexCol><Input placeholder="Month" type="text"/></FlexCol>
                            <FlexCol><Input placeholder="Year" type="text"/></FlexCol>

                          </Grid>
                      </div>
                    );
                  }}
                  </Form>
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
        margin: "10px"
      }
      shippingPaymentBoxInside: React.CSSProperties = {
        width: "100px",
        height: "50px",
        backgroundColor: "red",
        margin: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }
}