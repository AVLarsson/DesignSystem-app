import * as React from 'react';
import "../Imports.css";
import {Input} from 'pivotal-ui/react/inputs';

export default class KlarnaInfo extends React.Component {

  componentDidMount = () => {
    let userFirstName = (document.getElementById("userFirstNameKlarna") as unknown as HTMLInputElement);
    let userLastName = (document.getElementById("userLastNameKlarna") as unknown as HTMLInputElement);
    let userEmail = (document.getElementById("userEmailKlarna") as unknown as HTMLInputElement);

    
    if (localStorage.firstName){
        userFirstName.value = JSON.parse(localStorage.firstName);
    }
    if (localStorage.lastName){
        userLastName.value = JSON.parse(localStorage.lastName);
    }
    if (localStorage.phoneNumber){
        userEmail.value = JSON.parse(localStorage.phoneNumber);
    }
  }

  checkIfNumber(event:any) {

  let targetValue = event.target.value
  const regex=/^[a-zA-Z]+$/;

  for (let i = 0; i < event.target.value.length; i++) {
      if (!targetValue[i].match(regex))
      {
          event.target.value = "";
          targetValue = "";
      }
  }
}


  render() {
    return (

      <div>
        <form style={this.gridContainer}>
          <div style={this.gridItem}>
            <label htmlFor="userFirstNameKlarna">First Name</label>
            <Input id="userFirstNameKlarna" onChange={this.checkIfNumber} />
          </div>
          <div style={this.gridItem}>
            <label htmlFor="userLastNameKlarna">Last Name</label>
            <Input id="userLastNameKlarna" onChange={this.checkIfNumber} />
          </div>
          <div style={this.gridItem}>
            <label htmlFor="userEmailKlarna">Email</label>
            <Input id="userEmailKlarna" />
          </div>
        </form>
      </div>
    )
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