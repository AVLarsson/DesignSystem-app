import * as React from 'react';
import "../Imports.css";
import { Panel } from 'pivotal-ui/react/panels';
import { Grid, FlexCol } from 'pivotal-ui/react/flex-grids';
import { CartContext } from '../CartContext';



interface Props {
    fields: any
  }

export default class BankCardInfo extends React.Component<Props> {
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
                        <FlexCol >{this.props.fields.bankNumber}</FlexCol>
                        <FlexCol>{this.props.fields.cvc}</FlexCol>
                    </Grid>
                    <Grid>
                        <FlexCol>{this.props.fields.month}</FlexCol>
                        <FlexCol>{this.props.fields.year}</FlexCol>
                    </Grid>
                </FlexCol>
            </Panel>
        )
    }
}