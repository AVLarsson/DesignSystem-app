import * as React from 'react';
// import { Input } from 'pivotal-ui/react/inputs';
import "../Imports.css";
import { Panel } from 'pivotal-ui/react/panels';
import { Form, FormUnit } from 'pivotal-ui/react/forms';
import { Grid, FlexCol } from 'pivotal-ui/react/flex-grids';
import { CartContext } from '../CartContext';

interface State {
    firstName: string
    lastName: string
    bankNumber: string
    cvc: string
    month: string
    year: string
}

interface Props {
    fields: any

}


export default class BankCardInfo extends React.Component<Props, {}> {
    static contextType = CartContext;
    constructor(props: any) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            bankNumber: "",
            cvc: "",
            month: "",
            year: ""
        }
    }

    render() {
        return (
            <div>
                <FlexCol>
                    <Grid>
                        {this.props.fields.firstNameBankPay}
                        {this.props.fields.lastNameBankPay}
                    </Grid>
                    <Grid>
                        <FlexCol>{this.props.fields.emailBankPay}</FlexCol>
                        <FlexCol>{this.props.fields.phoneNumberBankPay}</FlexCol>
                    </Grid>
                    <Grid>
                        <FlexCol>{this.props.fields.adressBankPay}</FlexCol>
                        <FlexCol>{this.props.fields.zipcodeBankPay}</FlexCol>
                    </Grid>
                    <Grid>
                        <FlexCol>{this.props.fields.countryBankPay}</FlexCol>
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