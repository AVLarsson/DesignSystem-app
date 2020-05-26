import * as React from 'react';
import {Input} from 'pivotal-ui/react/inputs';
import "../Imports.css";

interface Props {
    passStateFromBankCard: any
}


export default class BankCardInfo extends React.Component <Props, {}> {
    constructor(props:any) {
        super(props)
        this.checkIfNumber = this.checkIfNumber.bind(this)
    }
    
    state = {
        firstName: "",
        lastName: "",
        bankNumber: "",
        cvc: "",
        month: "",
        year: ""
    }

//   componentDidMount = () => {
//     let userFirstName; 
//     let userLastName;

    
//     if (localStorage.firstName){
//         userFirstName = JSON.parse(localStorage.firstName);
//         this.setState({firstName:userFirstName})
//     }
//     if (localStorage.lastName){
//         userLastName = JSON.parse(localStorage.lastName);
//         this.setState({lastName:userLastName})
//     }
// }

checkIfNumber(event:any) {
    event.persist()
    let targetValue = event.target.value
    const targetName = event.target.name;
    let targetId = event.target.id;
    const regex=/^[a-zA-Z]+$/;


    if (targetId === "userCardNumber" || targetId === "userCvc"  || targetId === "userMonth" || targetId === "userYear"  ) {
    
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

    if (targetName === "firstName") {
        this.setState({firstName:targetValue}, this.sendToParent)
    }

    if (targetName === "lastName") {
        this.setState({lastName:targetValue}, this.sendToParent)
    }

    if (targetName === "bankCard") {
        this.setState({bankNumber:targetValue}, this.sendToParent)
    }

    if (targetName === "cvc") {
        this.setState({cvc:targetValue}, this.sendToParent)
    }

    if (targetName === "month") {
        this.setState({month:targetValue}, this.sendToParent)
    }

    if (targetName === "year") {
        this.setState({year:targetValue}, this.sendToParent)
    }

}

sendToParent = () => {
    this.props.passStateFromBankCard(this.state)
}



    render() {
      return (
        <div>
        <form style={this.gridContainer} action="">
            <div style={this.gridItem}>
                <label htmlFor="userFirstNameBank">First Name</label>
                <Input name="firstName" id="userFirstNameBank" onChange={this.checkIfNumber} />
            </div>
            <div style={this.gridItem}>
                <label htmlFor="userLastNameBank">Last Name</label>
                <Input name="lastName" id="userLastNameBank" onChange={this.checkIfNumber}/>
            </div>
            <div style={this.gridItem}>
                <label htmlFor="userCardNumber">Card Number</label>
                <Input name="bankCard" id="userCardNumber"  onChange={this.checkIfNumber}/>
            </div>
            <div style={this.gridItem}>
                <label htmlFor="userCvc">CVC</label>
                <Input name="cvc" id="userCvc" onChange={this.checkIfNumber}/>
            </div>
            <div style={this.gridItem}>
                <label htmlFor="userMonth">Month</label>
                <Input name="month" id="userMonth" onChange={this.checkIfNumber}/>
            </div>
            <div style={this.gridItem}>
                <label htmlFor="userYear">Year</label>
                <Input name="year" id="userYear" onChange={this.checkIfNumber}/>
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