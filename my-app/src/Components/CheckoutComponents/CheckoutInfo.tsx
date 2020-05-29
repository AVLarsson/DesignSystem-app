import * as React from 'react';

import { Grid, FlexCol } from 'pivotal-ui/react/flex-grids';

interface Props {
    status: any,
    fields: any
}

export default class CheckoutInfo extends React.Component<Props, {}> {
/*
    componentDidMount = () => {
        let userFirstName;
        let userLastName;
        let userEmail;
        let userPhoneNumber;
        let userAdress;
        let userZipcode;
        let userCountry;


        if (localStorage.firstName) {
            userFirstName = JSON.parse(localStorage.firstName);
            this.setState({ firstName: userFirstName }, this.sendToParent)
        }
        if (localStorage.lastName) {
            userLastName = JSON.parse(localStorage.lastName);
            this.setState({ lastName: userLastName }, this.sendToParent)
        }
        if (localStorage.email) {
            userEmail = JSON.parse(localStorage.email);
            this.setState({ email: userEmail }, this.sendToParent)
        }
        if (localStorage.phoneNumber) {
            userPhoneNumber = JSON.parse(localStorage.phoneNumber);
            this.setState({ phoneNumber: userPhoneNumber }, this.sendToParent)
        }
        if (localStorage.adress) {
            userAdress = JSON.parse(localStorage.adress);
            this.setState({ adress: userAdress }, this.sendToParent)
        }
        if (localStorage.zipcode) {
            userZipcode = JSON.parse(localStorage.zipcode);
            this.setState({ zipcode: userZipcode }, this.sendToParent)
        }
        if (localStorage.country) {
            userCountry = JSON.parse(localStorage.country);
            this.setState({ country: userCountry }, this.sendToParent)
        }

    }
*/

    saveToLocale = (event: any) => {
        let targetValue = JSON.stringify(event.target.value)
        if (targetValue.match('@')) {
            targetValue = JSON.stringify(event.target.value).replace('@', "[AT]")
        }

        localStorage.setItem(event.target.name, targetValue);
    }

    render() {
        return (
            <div>

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
            </div>
        )
    }
}
