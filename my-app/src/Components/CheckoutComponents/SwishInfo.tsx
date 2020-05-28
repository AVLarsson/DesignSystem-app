import * as React from 'react';
// import { Input } from 'pivotal-ui/react/inputs';
import "../Imports.css";
import { Grid, FlexCol } from 'pivotal-ui/react/flex-grids';
import { Form } from 'pivotal-ui/react/forms';
import { Panel } from 'pivotal-ui/react/panels';
import ConfirmOrderButton from '../ConfirmOrderButton';
import { CartContext } from '../CartContext';

interface Props {
  passStateFromSwish: any
  checkIfNumber: (input: string) => boolean
  checkIfDone: () => boolean

}
interface State {
  firstName: string
  lastName: string
  phoneNumber: string
}


export default class SwishInfo extends React.Component<Props, State> {
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
    this.props.passStateFromSwish(props)
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
        <Form {...{
          resetOnSubmit: false,
          className: "pbxxxl mbxxl",
          onSubmit: ({ initial, current }: any) => { this.handleChange(current) },
          fields: {
            firstName: {
              initialValue: '',
              validator: (currentValue: any) => currentValue.length < 1 ? 'Please enter your first name' : null,
              label: 'First Name'
            },
            lastName: {
              initialValue: '',
              validator: (currentValue: any) => currentValue.length < 1 ? 'Please enter your last name' : null,
              label: 'Last Name'
            },
            phoneNumber: {
              initialValue: '',
              validator: (currentValue: any) => !this.props.checkIfNumber(currentValue) ? 'Please enter a valid email' : null,
              label: 'Phone Number',
            }
          }
        }}>
          {({ fields, canSubmit, onSubmit }: any) => {
            return (
              <div>
                <FlexCol>
                  <Grid>
                    <FlexCol>{fields.firstName}</FlexCol>
                    <FlexCol>{fields.lastName}</FlexCol>
                  </Grid>
                  <Grid>
                    <FlexCol>{fields.phoneNumber}</FlexCol>
                  </Grid>
                  <Grid>
                    <FlexCol>
                      <ConfirmOrderButton checkIfDone={this.props.checkIfDone} onClick={() => canSubmit() ? onSubmit() : null} isDisabled={!canSubmit() || !this.props.checkIfDone} />
                    </FlexCol>
                  </Grid>
                </FlexCol>
              </div>
            );
          }}
        </Form>

      </Panel >
      /*
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
  */
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