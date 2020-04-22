import * as React from 'react';
import {Input} from 'pivotal-ui/react/inputs';


interface Props {
    status: any
}

export default class CheckoutInfo extends React.Component <Props, {}> {

      componentDidMount = () => {
        let userFirstName = (document.getElementById("userFirstName") as unknown as HTMLInputElement);
        let userLastName = (document.getElementById("userLastName") as unknown as HTMLInputElement);
        let userEmail = (document.getElementById("userEmail") as unknown as HTMLInputElement);
        let userPhoneNumber = (document.getElementById("userPhoneNumber") as unknown as HTMLInputElement);
        let userAdress = (document.getElementById("userAdress") as unknown as HTMLInputElement);
        let userZipcode = (document.getElementById("userZipcode") as unknown as HTMLInputElement);
        let userCountry = (document.getElementById("userCountry") as unknown as HTMLInputElement);

        
        if (localStorage.firstName){
            userFirstName.value = JSON.parse(localStorage.firstName);
        }
        if (localStorage.lastName){
            userLastName.value = JSON.parse(localStorage.lastName);
        }
        if (localStorage.email){
            userEmail.value = JSON.parse(localStorage.email);
        }
        if (localStorage.phoneNumber){
            userPhoneNumber.value = JSON.parse(localStorage.phoneNumber);
        }
        if (localStorage.adress){
            userAdress.value = JSON.parse(localStorage.adress);
        }
        if (localStorage.zipcode){
            userZipcode.value = JSON.parse(localStorage.zipcode);
        }
        if (localStorage.country){
            userCountry.value = JSON.parse(localStorage.country);
        }
    }



    handleInputChange(event:any) {
        let targetValue = event.target.value;
        const targetName = event.target.name


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
    
            
    }


    render() {
        return (
            <div>
                <form style={this.gridContainer} action="">
                    <div style={this.gridItem}>
                        <label htmlFor="userFirstName">First Name</label>
                        <Input name="firstName" id="userFirstName" onChange={this.handleInputChange} />
                    </div>
                    <div style={this.gridItem}>
                        <label htmlFor="userLastName">Last Name</label>
                        <Input name="lastName" id="userLastName" onChange={this.handleInputChange} />
                    </div>
                    <div style={this.gridItem}>
                        <label htmlFor="userEmail">Email</label>
                        <Input name="email" id="userEmail" onChange={this.handleInputChange} />
                    </div>
                    <div style={this.gridItem}>
                        <label htmlFor="userPhoneNumber">Phone Number</label>
                        <Input name="phoneNumber" id="userPhoneNumber" onChange={this.handleInputChange} />
                    </div>
                    <div style={this.gridItem}>
                        <label htmlFor="userAdress">Adress</label>
                        <Input name="adress" id="userAdress" onChange={this.handleInputChange} />
                    </div>
                    <div style={this.gridItem}>
                        <label htmlFor="userZipcode">Zipcode</label>
                        <Input name="zipcode" id="userZipcode" onChange={this.handleInputChange} />
                    </div>
                    <div style={this.gridItem}>
                        <label htmlFor="userCountry">Country</label>
                        <Input name="country" id="userCountry" onChange={this.handleInputChange} />
                    </div>
                </form>
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
