import * as React from 'react';
// import { Input } from 'pivotal-ui/react/inputs';
import "../Imports.css";
import { Panel } from 'pivotal-ui/react/panels';
import { Form } from 'pivotal-ui/react/forms';
import { Grid, FlexCol } from 'pivotal-ui/react/flex-grids';
import ConfirmOrderButton from '../ConfirmOrderButton';
import { CartContext } from '../CartContext';

interface Props {
    passStateFromBankCard: any
    checkIfNumber: (input: any) => boolean
    date: Date
    checkIfDone: () => boolean
}

interface State {
    firstName: string
    lastName: string
    bankNumber: string
    cvc: string
    month: string
    year: string
}

export default class BankCardInfo extends React.Component<Props, State> {
    static contextType = CartContext;
    constructor(props: any) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            bankNumber: "",
            cvc: "",
            month: "",
            year: ""
        }

        this.checkIfNumber = this.checkIfNumber.bind(this)
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

    checkIfNumber(event: any) {
        event.persist()
        let targetValue = event.target.value
        const targetName = event.target.name;
        let targetId = event.target.id;
        const regex = /^[a-zA-Z]+$/;


        if (targetId === "userCardNumber" || targetId === "userCvc" || targetId === "userMonth" || targetId === "userYear") {

            for (let i = 0; i < event.target.value.length; i++) {
                if (targetValue[i].match(regex)) {
                    event.target.value = "";
                    targetValue = "";
                }
            }
        }
        else {
            for (let i = 0; i < event.target.value.length; i++) {
                if (!targetValue[i].match(regex)) {
                    event.target.value = "";
                    targetValue = "";
                }
            }
        }

    }

    sendToParent(props: State) {
        this.props.passStateFromBankCard(props)
    }

    handleSubmit({ firstName, lastName, bankNumber, cvc, month, year }: State) {
        this.sendToParent({ firstName, lastName, bankNumber, cvc, month, year })

    }

    render() {
        return (
            <Panel>
                <Form {...{
                    className: "pbxxxl mbxxl",
                    onSubmit: ({ initial, current }: any) => { this.handleSubmit(current) },
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
                        bankNumber: {
                            initialValue: '',
                            validator: (currentValue: any) => !this.props.checkIfNumber(currentValue) ? 'Please enter a number' : currentValue.length !== 16 ? 'Please enter 16 digits' : null,
                            label: 'Card Number'
                        },
                        cvc: {
                            initialValue: '',
                            validator: (currentValue: any) => !this.props.checkIfNumber(currentValue) ? 'Please enter a number' : currentValue.length !== 3 ? 'Please enter at least 3 numbers' : null,
                            label: 'CVC',
                        },
                        month: {
                            help: 'Month',
                            initialValue: '',
                            validator: (currentValue: any) => !this.props.checkIfNumber(currentValue) ? 'Please enter a number' : currentValue > 12 ? 'Please enter a month' : null,
                        },
                        year: {
                            help: 'Year',
                            initialValue: '',
                            className: "txt-b",
                            validator: (currentValue: any) => !this.props.checkIfNumber(currentValue) ? 'Please enter a number' : currentValue < this.props.date.getFullYear() || currentValue > 9999 ? 'Your card has expired' : null,
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
                                        <FlexCol>{fields.bankNumber}</FlexCol>
                                        <FlexCol>{fields.cvc}</FlexCol>
                                        <FlexCol>
                                            <h6 className="em-high">Expiry date</h6>
                                            <Grid>
                                                <FlexCol>{fields.month}</FlexCol>
                                                <FlexCol>{fields.year}</FlexCol>
                                            </Grid>
                                        </FlexCol>
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
            </Panel>

            /*
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