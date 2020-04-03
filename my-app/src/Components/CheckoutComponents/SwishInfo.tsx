import * as React from 'react';
import {Input} from 'pivotal-ui/react/inputs';
import "../Imports.css";

export default class SwishInfo extends React.Component {

  componentDidMount = () => {
    let userFirstName = (document.getElementById("userFirstNameSwish") as unknown as HTMLInputElement);
    let userLastName = (document.getElementById("userLastNameSwish") as unknown as HTMLInputElement);
    let userPhoneNumber = (document.getElementById("userPhoneNumberSwish") as unknown as HTMLInputElement);

    
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


    render() {
      return (
        <div>
        <form style={this.gridContainer} action="">
            <div style={this.gridItem}>
                <label htmlFor="userFirstNameSwish">First Name</label>
                <Input id="userFirstNameSwish" />
            </div>
            <div style={this.gridItem}>
                <label htmlFor="userLastNameSwish">Last Name</label>
                <Input id="userLastNameSwish"/>
            </div>
            <div style={this.gridItem}>
                <label htmlFor="userPhoneNumberSwish">Phone Number</label>
                <Input id="userPhoneNumberSwish" />
            </div>
        </form>
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