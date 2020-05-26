import * as React from 'react';
import {Input} from 'pivotal-ui/react/inputs';
import "../Imports.css";

interface Props {
    passStateFromSwish: any
  }
  

export default class SwishInfo extends React.Component <Props, {}> {

    constructor(props:any) {
        super(props)
        this.checkIfNumber = this.checkIfNumber.bind(this)
    }
    
    state = {
        firstName: "",
        lastName: "",
        phoneNumber: ""
    }

//   componentDidMount = () => {

//     let userFirstName; 
//     let userLastName;
//     let userPhoneNumber;

    
//     if (localStorage.firstName){
//         userFirstName = JSON.parse(localStorage.firstName);
//         this.setState({firstName:userFirstName})
//     }
//     if (localStorage.lastName){
//         userLastName = JSON.parse(localStorage.lastName);
//         this.setState({lastName:userLastName})
//     }
//     if (localStorage.phoneNumber){
//         userPhoneNumber = JSON.parse(localStorage.phoneNumber);
//         this.setState({phoneNumber:userPhoneNumber})
//     }
// }


checkIfNumber(event:any) {
    event.persist()
    let targetValue = event.target.value
    let targetId = event.target.id;
    const targetName = event.target.name;
    const regex=/^[a-zA-Z]+$/;


    if (targetId === "userPhoneNumberSwish") {
    
        for (let i = 0; i < event.target.value.length; i++) {
            if (targetValue[i].match(regex))
            {
                event.target.value = "";
            }
        }
    }
    else {
        for (let i = 0; i < event.target.value.length; i++) {
            if (!targetValue[i].match(regex))
            {
                event.target.value = "";
            }
        }
    }


    if (targetName === "firstName") {
        this.setState({firstName:targetValue}, this.sendToParent)
    }

    if (targetName === "lastName") {
        this.setState({lastName:targetValue}, this.sendToParent)
    }

    if (targetName === "phoneNumber") {
        this.setState({phoneNumber:targetValue}, this.sendToParent)
    }
}

sendToParent = () => {
    this.props.passStateFromSwish(this.state)
  }


    render() {
      return (
        <div>
        <form style={this.gridContainer} action="">
            <div style={this.gridItem}>
                <label htmlFor="userFirstNameSwish">First Name</label>
                <Input name="firstName" id="userFirstNameSwish" onChange={this.checkIfNumber}/>
            </div>
            <div style={this.gridItem}>
                <label htmlFor="userLastNameSwish">Last Name</label>
                <Input name="lastName" id="userLastNameSwish" onChange={this.checkIfNumber}/>
            </div>
            <div style={this.gridItem}>
                <label htmlFor="userPhoneNumberSwish">Phone Number</label>
                <Input name="phoneNumber" id="userPhoneNumberSwish" onChange={this.checkIfNumber}/>
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