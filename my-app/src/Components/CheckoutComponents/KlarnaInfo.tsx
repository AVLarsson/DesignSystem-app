import * as React from 'react';
import "../Imports.css";
import { Input } from 'pivotal-ui/react/inputs';
import { Grid, FlexCol } from 'pivotal-ui/react/flex-grids';
import { Form } from 'pivotal-ui/react/forms';
import { Panel } from 'pivotal-ui/react/panels';
import ConfirmOrderButton from '../ConfirmOrderButton';
import { CartContext } from '../CartContext';

// eslint-disable-next-line
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

interface Props {
  passStateFromKlarna: (props: any) => void
  checkIfDone: () => boolean
}

interface State {
  firstName: string
  lastName: string
  email: string
}

export default class KlarnaInfo extends React.Component<Props, State> {
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

  checkIfEmail(input: any) {
    const regex = new RegExp(EMAIL_REGEX);
    return regex.test(input);
  }

  sendToParent = (props: State) => {
    console.log("Submitted, send")
    this.props.passStateFromKlarna(props)
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
        <Form {...{
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
            email: {
              initialValue: '',
              validator: (currentValue: any) => !this.checkIfEmail(currentValue) ? 'Please enter a valid email as abc@abc.com' : null,
              label: 'Email',
              help: 'Hint: abc@abc.com'
            }
          }
        }}>
          {({ fields, canSubmit, onSubmit }: any) => {
            return (
              <div>
                <FlexCol>
                  <Grid>
                    <FlexCol onChange={(e: React.ChangeEvent<HTMLInputElement>) => (e.target.value !== null && this.setState({ firstName: e.target.value }, this.handleChange))}>{fields.firstName}</FlexCol>
                    <FlexCol onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({lastName:e.target.value}, this.handleChange)}>{fields.lastName}</FlexCol>
                  </Grid>
                  <Grid>
                    <FlexCol onChange={(e: React.ChangeEvent<HTMLInputElement>) => e.target.value !== null && this.setState({email: e.target.value}, this.handleChange)}>{fields.email}</FlexCol>
                  </Grid>
                  <Grid>
                    <FlexCol>
                      <ConfirmOrderButton checkIfDone={this.props.checkIfDone} onClick={() => this.props.checkIfDone() && canSubmit() ? onSubmit() : null} isDisabled={!canSubmit()} />
                    </FlexCol>
                  </Grid>
                </FlexCol>
              </div>
            );
          }}
        </Form>
      </Panel>
      /*
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
      */
    )
  }
}