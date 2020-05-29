import * as React from 'react';
import "../Imports.css";
import { Grid, FlexCol } from 'pivotal-ui/react/flex-grids';
import { Panel } from 'pivotal-ui/react/panels';
import { CartContext } from '../CartContext';


interface State {
  firstName: string
  lastName: string
  email: string
}

interface Props {
  fields: any

}


export default class KlarnaInfo extends React.Component<Props, {}> {
  static contextType = CartContext;
  constructor(props: any) {
    super(props)

    this.state = {
      firstName: "",
      lastName: "",
      email: ""
    }

  }


  render() {
    return (
      <div>
        <FlexCol>
          <Grid>
            <FlexCol>{this.props.fields.firstNameKlarnaPay}</FlexCol>
            <FlexCol>{this.props.fields.lastNameKlarnaPay}</FlexCol>
          </Grid>
          <Grid>
            <FlexCol>{this.props.fields.phoneNumberKlarnaPay}</FlexCol>
          </Grid>
        </FlexCol>
      </div>
    )
  }
}