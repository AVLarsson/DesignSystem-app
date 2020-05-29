import * as React from 'react';
import 'pivotal-ui/css/selection';
import { FlexCol } from 'pivotal-ui/react/flex-grids';

interface Props {
    displayPayment: any
}

interface State {
    selected: string
  }

export default class PaymentDivs extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
          selected: ""
        }
      }


    render() {
        const { selected } = this.state;
        return (
            <div>
                <div className="pui-no-select" style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                  <FlexCol onClick={this.SelectDiv} id="bankCard" className={`bankCard shippingDiv ${selected === "bankCard" ? "bg-light-teal" : "bg-light-gray"} border-rounded"`} style={this.shippingPaymentBox}>
                    <div className="bg-accent-teal border-rounded type-white" style={this.shippingPaymentBoxInside}>
                    Bank Card
                    </div>
                    <p>Mastercard</p>
                    <p>Visa</p>
                </FlexCol>
                <FlexCol  onClick={this.SelectDiv} id="Swish" className={`Swish shippingDiv ${selected === "Swish" ? "bg-light-teal" : "bg-light-gray"} border-rounded"`} style={this.shippingPaymentBox}>
                <div className="bg-accent-teal border-rounded type-white" style={this.shippingPaymentBoxInside}>
                    Swish
                </div>
                </FlexCol>
                <FlexCol  onClick={this.SelectDiv} id="Klarna" className={`Klarna shippingDiv ${selected === "Klarna" ? "bg-light-teal" : "bg-light-gray"} border-rounded"`} style={this.shippingPaymentBox}>
                <div className="bg-accent-teal border-rounded type-white" style={this.shippingPaymentBoxInside}>
                    Klarna
                </div>
                <p>Split up your payment</p>
                </FlexCol>
            </div>
            </div>
        )
    }

    SelectDiv = (event:any) => {
        this.setState({selected: event.currentTarget.id},this.sendToParent)
    }

    sendToParent = () => {
        this.props.displayPayment(this.state)
      }

    shippingPaymentBox: React.CSSProperties = {
        minWidth: "120px",
        maxWidth: "200px",
        height: "150px",
        backgroundColor: "lightgray",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        margin: "10px",
    
        fontSize: "16px",
        fontWeight: "bold"
      }
      shippingPaymentBoxInside: React.CSSProperties = {
        width: "100px",
        height: "50px",
        margin: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }