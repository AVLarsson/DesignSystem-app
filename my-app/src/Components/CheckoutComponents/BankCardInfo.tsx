import * as React from 'react';
import {Input} from 'pivotal-ui/react/inputs';
import "../Imports.css";

export default class BankCardInfo extends React.Component {

  componentDidMount = () => {
    let userFirstName = (document.getElementById("userFirstNameBank") as unknown as HTMLInputElement);
    let userLastName = (document.getElementById("userLastNameBank") as unknown as HTMLInputElement);

    
    if (localStorage.firstName){
        userFirstName.value = JSON.parse(localStorage.firstName);
    }
    if (localStorage.lastName){
        userLastName.value = JSON.parse(localStorage.lastName);
    }
}

checkIfNumber(event:any) {

    let targetValue = event.target.value
    let targetId = event.target.id;
    const regex=/^[a-zA-Z]+$/;


    if (targetId == "userCardNumber" || targetId == "userCvc"  || targetId == "userMonth" || targetId == "userYear"  ) {
    
        for (let i = 0; i < event.target.value.length; i++) {
            if (targetValue[i].match(regex))
            {
                event.target.value = "";
                targetValue = "";
            }
        }
    }
    else {
        for (let i = 0; i < event.target.value.length; i++) {
            if (!targetValue[i].match(regex))
            {
                event.target.value = "";
                targetValue = "";
            }
        }
    }

}



    render() {
      return (
        <div>
        <form style={this.gridContainer} action="">
            <div style={this.gridItem}>
                <label htmlFor="userFirstNameBank">First Name</label>
                <Input id="userFirstNameBank" onChange={this.checkIfNumber} />
            </div>
            <div style={this.gridItem}>
                <label htmlFor="userLastNameBank">Last Name</label>
                <Input id="userLastNameBank" onChange={this.checkIfNumber}/>
            </div>
            <div style={this.gridItem}>
                <label htmlFor="userCardNumber">Card Number</label>
                <Input id="userCardNumber"  onChange={this.checkIfNumber}/>
            </div>
            <div style={this.gridItem}>
                <label htmlFor="userCvc">CVC</label>
                <Input id="userCvc" onChange={this.checkIfNumber}/>
            </div>
            <div style={this.gridItem}>
                <label htmlFor="userMonth">Month</label>
                <Input id="userMonth" onChange={this.checkIfNumber}/>
            </div>
            <div style={this.gridItem}>
                <label htmlFor="userYear">Year</label>
                <Input id="userYear" onChange={this.checkIfNumber}/>
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