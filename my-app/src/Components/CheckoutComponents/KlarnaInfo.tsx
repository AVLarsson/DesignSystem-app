import * as React from 'react';
import "../Imports.css";
import { Grid, FlexCol } from 'pivotal-ui/react/flex-grids';
import { Panel } from 'pivotal-ui/react/panels';
import { CartContext } from '../CartContext';

interface Props {
  fields: any
}

export default class KlarnaInfo extends React.Component<Props> {
  static contextType = CartContext;
  constructor(props: any) {
    super(props)
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
            <FlexCol>{this.props.fields.email}</FlexCol>
          </Grid>
        </FlexCol>
      </Panel>
    )
  }
}
