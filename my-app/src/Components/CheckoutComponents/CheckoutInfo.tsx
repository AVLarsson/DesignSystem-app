import * as React from 'react';
import {Form} from 'pivotal-ui/react/forms';
import {Grid, FlexCol} from 'pivotal-ui/react/flex-grids';
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
        const targetValue = event.target.value;
        const targetName = event.target.name
        const valueString = JSON.stringify(targetValue);

        localStorage.setItem(targetName, valueString)
    
            
    }


    render() {
        return (
            <Form style={{display: "flex", justifyContent: "center"}} {...{
                fields: {
                  firstName: {
                    inline: true,
                    label: 'First Name',
                    children: <Input id="userFirstName" onKeyUp={this.handleInputChange} />,
                  },
                  lastName: {
                    inline: true,
                    label: 'Last Name',
                    children: <Input id="userLastName" onKeyUp={this.handleInputChange}/>
                  },
                  email: {
                      inline: true,
                      label: "Email",
                      children: <Input id="userEmail" onKeyUp={this.handleInputChange}/>
                  },
                  phoneNumber: {
                      inline: true,
                      label: "Phone Number",
                      children: <Input id="userPhoneNumber" onKeyUp={this.handleInputChange}/>
                  },
                  adress: {
                      inline: true,
                      label: "Adress",
                      children: <Input id="userAdress" onKeyUp={this.handleInputChange}/>
                  },
                  zipcode: {
                      inline: true,
                      label: "Zipcode",
                      children: <Input id="userZipcode" onKeyUp={this.handleInputChange}/>
                  },
                  country: {
                      inline: true,
                      label: "Country",
                      children: <Input id="userCountry" onKeyUp={this.handleInputChange}/>
                  }
                }
              }}>
                {({fields} : {fields:any} ) => { 
                return (
                    <div style={{width: "80vw"}}>
                        <Grid className="grid-show mbxl" style={this.centerStyle}>
                          
                        <FlexCol col={5}>{fields.firstName}</FlexCol>
                        <FlexCol col={5}>{fields.lastName}</FlexCol>
                            
                        </Grid>
                        <Grid className="grid-show mbxl" style={this.centerStyle}>
                          
                        <FlexCol col={5}>{fields.email}</FlexCol>
                        <FlexCol col={5}>{fields.phoneNumber}</FlexCol>

                        </Grid>
                        <Grid className="grid-show mbxl" style={this.centerStyle}>

                        <FlexCol col={10}>{fields.adress}</FlexCol>

                        </Grid>
                        <Grid className="grid-show mbxl" style={this.centerStyle}>

                        <FlexCol col={3}>{fields.zipcode}</FlexCol>
                        <FlexCol  col={5}>{fields.country}</FlexCol>

                        </Grid>
                    </div>
                );
                }}
            </Form>
        )
    }

    centerStyle: React.CSSProperties = {
        paddingTop: "20px",
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center",
      }
}