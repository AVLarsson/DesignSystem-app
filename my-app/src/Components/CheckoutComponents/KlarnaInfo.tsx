import * as React from 'react';
import "../Imports.css";
import {Input} from 'pivotal-ui/react/inputs';

interface Props {
  passStateFromKlarna: any
}

export default class KlarnaInfo extends React.Component  <Props, {}> {

  constructor(props:any) {
    super(props)
    this.checkIfNumber = this.checkIfNumber.bind(this)
}

state = {
    firstName: "",
    lastName: "",
    email: ""
}

  // componentDidMount = () => {

  //   let userFirstName; 
  //   let userLastName;
  //   let userEmail;


    
  //   if (localStorage.firstName){
  //       userFirstName = JSON.parse(localStorage.firstName);
  //       this.setState({firstName:userFirstName})
  //   }
  //   if (localStorage.lastName){
  //       userLastName = JSON.parse(localStorage.lastName);
  //       this.setState({lastName:userLastName})
  //   }
  //   if (localStorage.email){
  //       userEmail = JSON.parse(localStorage.email);
  //       this.setState({email:userEmail})
  //   }
  // }

  checkIfNumber(event:any) {
    event.persist()
    let targetValue = event.target.value
    const targetName = event.target.name;

    const regex=/^[a-zA-Z]+$/;

    if (targetName !== "email") {
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

        if (targetName === "email") {
            this.setState({email:targetValue}, this.sendToParent)
        }
}

sendToParent = () => {
  this.props.passStateFromKlarna(this.state)
}


  render() {
    return (

      <div>
        <form style={this.gridContainer}>
          <div style={this.gridItem}>
            <label htmlFor="userFirstNameKlarna">First Name</label>
            <Input name="firstName" id="userFirstNameKlarna" onChange={this.checkIfNumber} />
          </div>
          <div style={this.gridItem}>
            <label htmlFor="userLastNameKlarna">Last Name</label>
            <Input name="lastName" id="userLastNameKlarna" onChange={this.checkIfNumber} />
          </div>
          <div style={this.gridItem}>
            <label htmlFor="userEmailKlarna">Email</label>
            <Input name="email" id="userEmailKlarna" onChange={this.checkIfNumber}/>
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