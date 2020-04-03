import * as React from 'react';
import {Form} from 'pivotal-ui/react/forms';
import {Grid, FlexCol} from 'pivotal-ui/react/flex-grids';
import {Input} from 'pivotal-ui/react/inputs';
import "../Imports.css";

export default class SwishInfo extends React.Component {

  componentDidMount = () => {
    let userFirstName = (document.getElementById("userFirstNameSwish") as unknown as HTMLInputElement);
    let userLastName = (document.getElementById("userLastNameSwish") as unknown as HTMLInputElement);
    let userPhoneNumber = (document.getElementById("userphoneNumberSwish") as unknown as HTMLInputElement);

    
    if (localStorage.firstName){
        userFirstName.value = JSON.parse(localStorage.firstName);
    }
    if (localStorage.lastName){
        userLastName.value = JSON.parse(localStorage.lastName);
    }
    if (localStorage.phoneNumber){
        userPhoneNumber.value = JSON.parse(localStorage.phoneNumber);
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
        <div className="fadeInInfo">
            <h2>Please Enter Your Info</h2>
            <Form style={{display: "flex", justifyContent: "center"}} {...{
                fields: {
                  firstName: {
                    inline: true,
                    label: 'First Name',
                    children: <Input id="userFirstNameSwish" onKeyUp={this.handleInputChange} />,
                  },
                  lastName: {
                    inline: true,
                    label: 'Last Name',
                    children: <Input id="userLastNameSwish" onKeyUp={this.handleInputChange} />,
                  },
                  phoneNumber: {
                      inline: true,
                      label: "Phone Number",
                      children: <Input id="userphoneNumberSwish" onKeyUp={this.handleInputChange} />,
                  }
                }
              }}>
                {({fields} : {fields:any} ) => { 
            return (<div style={{width: "80vw"}}>
                <Grid className="grid-show mbxl" style={this.centerStyle}>
  
                    <FlexCol col={5}>{fields.firstName}</FlexCol>
                    <FlexCol col={5}>{fields.lastName}</FlexCol>
  
                </Grid>
                <Grid className="grid-show mbxl" style={this.centerStyle}>
  
                    <FlexCol col={5}>{fields.phoneNumber}</FlexCol>
  
                 </Grid>
            </div>)
            } }
            </Form>
        </div>
    )
    }
    centerStyle: React.CSSProperties = {
      display: "flex",
      justifyContent: "center",
      paddingTop: "20px"
    }
}