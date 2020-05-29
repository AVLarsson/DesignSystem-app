import * as React from 'react';
// import { Input } from 'pivotal-ui/react/inputs';
import "../Imports.css";
import { Panel } from 'pivotal-ui/react/panels';
import { Form, FormUnit } from 'pivotal-ui/react/forms';
import { Grid, FlexCol } from 'pivotal-ui/react/flex-grids';
import ConfirmOrderButton from '../ConfirmOrderButton';
import { CartContext } from '../CartContext';

import { bankCardFields } from '../fields'
// interface Props {
//     passStateFromBankCard: any
//     checkIfNumber: (input: any) => boolean
//     date: Date
//     checkIfDone: () => boolean
// }



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
            <Panel>
                <div>
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
                </div>
            </Panel>
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