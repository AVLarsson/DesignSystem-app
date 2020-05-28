import * as React from 'react';
import {Input} from 'pivotal-ui/react/inputs';

import { Grid, FlexCol } from 'pivotal-ui/react/flex-grids';
import { Form } from 'pivotal-ui/react/forms';
import { Panel } from 'pivotal-ui/react/panels';
import ConfirmOrderButton from '../ConfirmOrderButton';
import { CartContext } from '../CartContext';

import { checkoutInfoFields } from '../fields'

interface Props {
    status: any,
    passStateFromInfo: any,
    fields: any
    test: any
}

export default class CheckoutInfo extends React.Component <Props, {}> {

    constructor(props:any) {
        super(props)
        this.handleInputChange = this.handleInputChange.bind(this)
    
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

      componentDidMount = () => {
        let userFirstName; 
        let userLastName;
        let userEmail;
        let userPhoneNumber;
        let userAdress;
        let userZipcode;
        let userCountry;

        
        if (localStorage.firstName){
            userFirstName = JSON.parse(localStorage.firstName);
            this.setState({firstName:userFirstName}, this.sendToParent)
        }
        if (localStorage.lastName){
            userLastName = JSON.parse(localStorage.lastName);
            this.setState({lastName:userLastName}, this.sendToParent)
        }
        if (localStorage.email){
            userEmail = JSON.parse(localStorage.email);
            this.setState({email:userEmail}, this.sendToParent)
        }
        if (localStorage.phoneNumber){
            userPhoneNumber = JSON.parse(localStorage.phoneNumber);
            this.setState({phoneNumber:userPhoneNumber}, this.sendToParent)
        }
        if (localStorage.adress){
            userAdress = JSON.parse(localStorage.adress);
            this.setState({adress:userAdress}, this.sendToParent)
        }
        if (localStorage.zipcode){
            userZipcode = JSON.parse(localStorage.zipcode);
            this.setState({zipcode:userZipcode}, this.sendToParent)
        }
        if (localStorage.country){
            userCountry = JSON.parse(localStorage.country);
            this.setState({country:userCountry}, this.sendToParent)
        }

    }



    handleInputChange = (event:any) => {
        event.persist()
        let targetValue = event.target.value;
        const targetName = event.target.name;


        if (targetName === "phoneNumber" || targetName === "zipcode") {

            const regex=/^[a-zA-Z]+$/;
            for (let i = 0; i < event.target.value.length; i++) {
                if (targetValue[i].match(regex))
                {
                    event.target.value = "";
                    targetValue = "";
                }
            }


        } else if  (targetName === "firstName" || targetName === "lastName" || targetName === "country") {

            const regex=/^[a-zA-Z]+$/;
            for (let i = 0; i < event.target.value.length; i++) {
                if (!targetValue[i].match(regex))
                {
                    event.target.value = "";
                    targetValue = "";
                }
            }

        }


        const valueString = JSON.stringify(targetValue);


        localStorage.setItem(targetName, valueString)

        if (targetName === "firstName") {
            this.setState({firstName:targetValue}, this.sendToParent)
        }

        if (targetName === "lastName") {
            this.setState({lastName:targetValue}, this.sendToParent)
        }

        if (targetName === "country") {
            this.setState({country:targetValue}, this.sendToParent)
        }

        if (targetName === "phoneNumber") {
            this.setState({phoneNumber:targetValue}, this.sendToParent)
        }

        if (targetName === "zipcode") {
            this.setState({zipcode:targetValue}, this.sendToParent)
        }

        if (targetName === "email") {
            this.setState({email:targetValue}, this.sendToParent)
        }

        if (targetName === "adress") {
            this.setState({adress:targetValue}, this.sendToParent)
        }

    }

    sendToParent = () => {
        this.props.passStateFromInfo(this.state)
    }
    


    render() {
        //  onChange={(e: React.ChangeEvent<HTMLInputElement>) => (e.target.value !== null && this.setState({ firstName: e.target.value }, this.handleChange))}
        return (
            <div>
            {/* {Object.entries(checkoutInfoFields).map((val, i, arr) => {
                Object.values(val).map(val2 => console.log(val2))
                return <FlexCol key={val[0]}>{arr[i]}</FlexCol>
            })} */}
                <FlexCol>
                    <Grid>
                        {console.log(this.props.test)}
                        <FlexCol>{this.props.fields.firstName}</FlexCol>
                        {/* {this.props.fields.checkoutInfoFields.props} */}
                    </Grid>
                    {/* <Grid>
                        <FlexCol>{fields.email}</FlexCol>
                        <FlexCol>{fields.phoneNumber}</FlexCol>
                    </Grid>
                    <Grid>
                        <FlexCol>{fields.adress}</FlexCol>
                        <FlexCol>{fields.zipcode}</FlexCol>
                    </Grid>
                    <Grid>
                        <FlexCol>{fields.country}</FlexCol>
                    </Grid> */}
                </FlexCol>



                {/* <form style={this.gridContainer} action="">
                    <div style={this.gridItem}>
                        <label htmlFor="userFirstName">First Name</label>
                        <Input name="firstName" id="userFirstName" onChange={this.handleInputChange} value={this.state.firstName} />
                    </div>
                    <div style={this.gridItem}>
                        <label htmlFor="userLastName">Last Name</label>
                        <Input name="lastName" id="userLastName" onChange={this.handleInputChange} value={this.state.lastName} />
                    </div>
                    <div style={this.gridItem}>
                        <label htmlFor="userEmail">Email</label>
                        <Input name="email" id="userEmail" onChange={this.handleInputChange} value={this.state.email} />
                    </div>
                    <div style={this.gridItem}>
                        <label htmlFor="userPhoneNumber">Phone Number</label>
                        <Input name="phoneNumber" id="userPhoneNumber" onChange={this.handleInputChange} value={this.state.phoneNumber} />
                    </div>
                    <div style={this.gridItem}>
                        <label htmlFor="userAdress">Adress</label>
                        <Input name="adress" id="userAdress" onChange={this.handleInputChange} value={this.state.adress}/>
                    </div>
                    <div style={this.gridItem}>
                        <label htmlFor="userZipcode">Zipcode</label>
                        <Input name="zipcode" id="userZipcode" onChange={this.handleInputChange} value={this.state.zipcode}/>
                    </div>
                    <div style={this.gridItem}>
                        <label htmlFor="userCountry">Country</label>
                        <Input name="country" id="userCountry" onChange={this.handleInputChange} value={this.state.country} />

                    </div>
                </form> */}
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
