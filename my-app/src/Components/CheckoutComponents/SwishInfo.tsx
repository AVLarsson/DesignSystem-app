import * as React from 'react';
// import { Input } from 'pivotal-ui/react/inputs';
import "../Imports.css";
import { Grid, FlexCol } from 'pivotal-ui/react/flex-grids';
import { Form } from 'pivotal-ui/react/forms';
import { Panel } from 'pivotal-ui/react/panels';
import ConfirmOrderButton from '../ConfirmOrderButton';
import { CartContext } from '../CartContext';

// interface Props {
//   passStateFromSwish: any
//   checkIfNumber: (input: string) => boolean
//   checkIfDone: () => boolean

// }
interface State {
  firstName: string
  lastName: string
  phoneNumber: string
}


export default class SwishInfo extends React.Component<{}, State> {
  static contextType = CartContext;
  constructor(props: any) {
    super(props)
    this.state = {
      firstName: "",
      lastName: "",
      phoneNumber: ""
    }

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

  /*
    checkIfNumber(event: any) {
      event.persist()
      let targetValue = event.target.value
      let targetId = event.target.id;
      const targetName = event.target.name;
      const regex = /^[a-zA-Z]+$/;
  
  
      if (targetId === "userPhoneNumberSwish") {
  
        for (let i = 0; i < event.target.value.length; i++) {
          if (targetValue[i].match(regex)) {
            event.target.value = "";
          }
        }
      }
      else {
        for (let i = 0; i < event.target.value.length; i++) {
          if (!targetValue[i].match(regex)) {
            event.target.value = "";
          }
        }
      }
  
  
      if (targetName === "firstName") {
        this.setState({ firstName: targetValue }, this.sendToParent)
      }
  
      if (targetName === "lastName") {
        this.setState({ lastName: targetValue }, this.sendToParent)
      }
  
      if (targetName === "phoneNumber") {
        this.setState({ phoneNumber: targetValue }, this.sendToParent)
      }
    }
    */

  sendToParent = (props: State) => {
    // this.props.passStateFromSwish(props)
  }

  handleSubmit = ({ firstName, lastName, phoneNumber }: State) => {
    this.sendToParent({ firstName, lastName, phoneNumber })
  }

  handleChange = (current?: any) => {

    const { firstName, lastName, phoneNumber } = this.state;
    if (firstName !== "" && lastName !== "" && phoneNumber !== "") {
      this.sendToParent(this.state)
    } else console.log("not completed")

  }

  render() {
    return (
      <Panel>
        <div>
          <FlexCol>
            <Grid>
              <FlexCol></FlexCol>
              <FlexCol></FlexCol>
            </Grid>
            <Grid>
              <FlexCol></FlexCol>
            </Grid>
            <Grid>
            </Grid>
          </FlexCol>
        </div>
      </Panel >
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