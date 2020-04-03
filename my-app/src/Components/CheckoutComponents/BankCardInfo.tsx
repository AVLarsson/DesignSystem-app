import * as React from 'react';
import {Input} from 'pivotal-ui/react/inputs';
import "../Imports.css";

export default class BankCardInfo extends React.Component {

  componentDidMount = () => {
    let userFirstName = (document.getElementById("userFirstNameSwish") as unknown as HTMLInputElement);
    let userLastName = (document.getElementById("userLastNameSwish") as unknown as HTMLInputElement);

    
    if (localStorage.firstName){
        userFirstName.value = JSON.parse(localStorage.firstName);
    }
    if (localStorage.lastName){
        userLastName.value = JSON.parse(localStorage.lastName);
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
                <label htmlFor="userCardNumber">Card Number</label>
                <Input id="userCardNumber" />
            </div>
            <div style={this.gridItem}>
                <label htmlFor="userCvc">CVC</label>
                <Input id="userCvc" />
            </div>
            <div style={this.gridItem}>
                <label htmlFor="userMonth">Month</label>
                <Input id="userMonth" />
            </div>
            <div style={this.gridItem}>
                <label htmlFor="userYear">Year</label>
                <Input id="userYear" />
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