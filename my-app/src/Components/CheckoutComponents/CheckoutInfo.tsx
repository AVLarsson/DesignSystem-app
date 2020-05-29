import * as React from 'react';
import {Input} from 'pivotal-ui/react/inputs';

import { Grid, FlexCol } from 'pivotal-ui/react/flex-grids';
import { Form } from 'pivotal-ui/react/forms';
import { Panel } from 'pivotal-ui/react/panels';
import ConfirmOrderButton from '../ConfirmOrderButton';
import { CartContext } from '../CartContext';

interface Props {
    status: any,
    fields: any
}

export default class CheckoutInfo extends React.Component <Props, {}> {

    constructor(props:any) {
        super(props)
    
    }

    state = {
        firstName: "",
        lastName: "",
        country: "",
        phoneNumber: "",
        zipcode: "",
        adress: "",
        email: ""
    }


    render() {
        return (
            <div>
                <FlexCol>
                    <Grid>
                        {this.props.fields.firstName}
                        {this.props.fields.lastName}
                    </Grid>
                    <Grid>
                        <FlexCol>{this.props.fields.email}</FlexCol>
                        <FlexCol>{this.props.fields.phoneNumber}</FlexCol>
                    </Grid>
                    <Grid>
                        <FlexCol>{this.props.fields.adress}</FlexCol>
                        <FlexCol>{this.props.fields.zipcode}</FlexCol>
                    </Grid>
                    <Grid>
                        <FlexCol>{this.props.fields.country}</FlexCol>
                    </Grid>
                </FlexCol>
            </div>
        )
    }

    
    centerStyle: React.CSSProperties = {
        paddingTop: "20px",
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center",
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
