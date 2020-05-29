import * as React from 'react';

import { Grid, FlexCol } from 'pivotal-ui/react/flex-grids';
import { Panel } from 'pivotal-ui/react/panels';

interface Props {
    status: any,
    fields: any
}

export default class CheckoutInfo extends React.Component<Props, {}> {

    saveToLocale = (event: any) => {
        let targetValue = JSON.stringify(event.target.value)
        if (targetValue.match('@')) {
            targetValue = JSON.stringify(event.target.value).replace('@', "[AT]")
        }

        localStorage.setItem(event.target.name, targetValue);
    }

    render() {
        return (
            <Panel style={{display: "flex", justifyContent: "center", padding:"2rem"}}>
                <FlexCol>
                    <Grid>
                        <FlexCol>{this.props.fields.firstNameInfo}</FlexCol>
                        <FlexCol>{this.props.fields.lastNameInfo}</FlexCol>
                    </Grid>
                    <Grid>
                        <FlexCol>{this.props.fields.emailInfo}</FlexCol>
                        <FlexCol>{this.props.fields.phoneNumberInfo}</FlexCol>
                    </Grid>
                    <Grid>
                        <FlexCol>{this.props.fields.adress}</FlexCol>
                        <FlexCol>{this.props.fields.zipcode}</FlexCol>
                    </Grid>
                    <Grid>
                        <FlexCol>{this.props.fields.country}</FlexCol>
                    </Grid>
                </FlexCol>
            </Panel>
        )
    }
}
