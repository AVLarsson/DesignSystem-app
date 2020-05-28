import * as React from 'react';
import "../Imports.css";
import { Grid, FlexCol } from 'pivotal-ui/react/flex-grids';
import { Panel } from 'pivotal-ui/react/panels';
import { CartContext } from '../CartContext';

// interface Props {
//   passStateFromKlarna: (props: any) => void
//   checkIfDone: () => boolean
// }

interface State {
  firstName: string
  lastName: string
  email: string
}

export default class KlarnaInfo extends React.Component<{}, State> {
  static contextType = CartContext;
  constructor(props: any) {
    super(props)

    this.state = {
      firstName: "",
      lastName: "",
      email: ""
    }

    // this.checkIfNumber = this.checkIfNumber.bind(this)
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
  /*
    checkIfNumber(event: any) {
      event.persist()
      let targetValue = event.target.value
      const targetName = event.target.name;
  
      const regex = /^[a-zA-Z]+$/;
  
      if (targetName !== "email") {
        for (let i = 0; i < event.target.value.length; i++) {
          if (!targetValue[i].match(regex)) {
            event.target.value = "";
            targetValue = "";
          }
        }
      }
  
  
      if (targetName === "firstName") {
        this.setState({ firstName: targetValue }, this.sendToParent)
      }
  
      if (targetName === "lastName") {
        this.setState({ lastName: targetValue }, this.sendToParent)
      }
  
      if (targetName === "email") {
        this.setState({ email: targetValue }, this.sendToParent)
      }
    }
    */


  sendToParent = (props: State) => {
    console.log("Submitted, send")
    // this.props.passStateFromKlarna(props)
  }

  handleChange = (current?: any) => {

    const { firstName, lastName, email } = this.state;
    if (firstName !== "" && lastName !== "" && email !== "") {
      this.sendToParent(this.state)
    } else console.log("not completed")

  }

  render() {
    return (
      <Panel>
        <div>
          <FlexCol>
            <Grid>
              <FlexCol>{this.props.children}</FlexCol>
              <FlexCol></FlexCol>
            </Grid>
            <Grid>
              <FlexCol></FlexCol>
            </Grid>
            <Grid>
            </Grid>
          </FlexCol>
        </div>
      </Panel>

    )
  }
}