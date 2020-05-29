import * as React from 'react';
import "../Imports.css";
import { Grid, FlexCol } from 'pivotal-ui/react/flex-grids';
import { Panel } from 'pivotal-ui/react/panels';
import { CartContext } from '../CartContext';

interface Props {
  fields: any
}
interface State {
  firstName: string
  lastName: string
  phoneNumber: string
}


export default class SwishInfo extends React.Component<Props, State> {
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
      <Panel style={{display: "flex", justifyContent: "center", padding:"2rem"}}>
        <FlexCol>
          <Grid>
            <FlexCol>{this.props.fields.firstName}</FlexCol>
            <FlexCol>{this.props.fields.lastName}</FlexCol>
          </Grid>
          <Grid>
            <FlexCol>{this.props.fields.phoneNumber}</FlexCol>
          </Grid>
        </FlexCol>
      </Panel>
    )
  }
}