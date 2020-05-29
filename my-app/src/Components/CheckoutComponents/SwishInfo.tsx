import * as React from 'react';
// import { Input } from 'pivotal-ui/react/inputs';
import "../Imports.css";
import { Grid, FlexCol } from 'pivotal-ui/react/flex-grids';
import { Panel } from 'pivotal-ui/react/panels';
import { CartContext } from '../CartContext';


interface Props {
  fields: any

}


export default class SwishInfo extends React.Component <Props, {}>{
  static contextType = CartContext;
  constructor(props: any) {
    super(props)
    this.state = {
      firstName: "",
      lastName: "",
      phoneNumber: ""
    }

  }


  render() {
    return (
      <div>
        <FlexCol>
          <Grid>
            <FlexCol>{this.props.fields.firstNameSwishPay}</FlexCol>
            <FlexCol>{this.props.fields.lastNameSwishPay}</FlexCol>
          </Grid>
          <Grid>
            <FlexCol>{this.props.fields.phoneNumberSwishPay}</FlexCol>
          </Grid>
        </FlexCol>
      </div>
    )
  }

  centerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    paddingTop: "20px"
  }
  gridContainer: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "auto auto",
    gridColumnGap: "50px",
    gridRowGap: "20px",
    justifyContent: "center",
  }
  gridItem: React.CSSProperties = {
    fontSize: "16px"
  }
}