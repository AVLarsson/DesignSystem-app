import * as React from 'react';
import 'pivotal-ui/css/selection';
import { FlexCol } from 'pivotal-ui/react/flex-grids';

interface Props {
  passShipping: any
}

interface shippingType {
  price: number | string;
  time: number;
  selected: boolean;
}

interface State {
  selected: string
}

export default class Shipping extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.handleDivSelect = this.handleDivSelect.bind(this)
    this.state = {
      selected: ""
    }
  }

  render() {
    const { selected } = this.state;
    return (
      <div className="pui-no-select" style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
        <FlexCol onClick={this.handleDivSelect} id="dhl" className={`dhl shippingDiv ${selected === "dhl" ? "bg-light-teal" : "bg-light-gray"} border-rounded"`} style={this.shippingPaymentBox}>
          <div className="bg-accent-teal border-rounded type-white" style={this.shippingPaymentBoxInside}>
            DHL
          </div>
          <p>24h</p>
          <p className="amountForShipping">99kr</p>
        </FlexCol>
        <FlexCol onClick={this.handleDivSelect} id="shenker" className={`shenker shippingDiv ${selected === "shenker" ? "bg-light-teal" : "bg-light-gray"} border-rounded"`} style={this.shippingPaymentBox}>
          <div className="bg-accent-teal border-rounded type-white" style={this.shippingPaymentBoxInside}>
            Shenker
              </div>
          <p>48h</p>
          <p className="amountForShipping">49kr</p>
        </FlexCol>
        <FlexCol onClick={this.handleDivSelect} id="postnord" className={`postnord shippingDiv ${selected === "postnord" ? "bg-light-teal" : "bg-light-gray"} border-rounded"`} style={this.shippingPaymentBox}>
          <div className="bg-accent-teal border-rounded type-white" style={this.shippingPaymentBoxInside}>
            Postnord
            </div>
          <p>72h</p>
          <p className="amountForShipping">free</p>
        </FlexCol>
      </div>
    )
  }

  handleDivSelect = (event: any) => {
    this.setState({selected: event.currentTarget.id})
    this.props.passShipping(event.currentTarget.id)
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