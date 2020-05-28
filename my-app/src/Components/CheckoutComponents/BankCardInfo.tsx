import * as React from 'react';
// import { Input } from 'pivotal-ui/react/inputs';
import "../Imports.css";
import { Panel } from 'pivotal-ui/react/panels';
import { Form, FormUnit } from 'pivotal-ui/react/forms';
import { Grid, FlexCol } from 'pivotal-ui/react/flex-grids';
import ConfirmOrderButton from '../ConfirmOrderButton';
import { CartContext } from '../CartContext';

// import { bankCardFields } from '../fields'
// interface Props {
//     passStateFromBankCard: any
//     checkIfNumber: (input: any) => boolean
//     date: Date
//     checkIfDone: () => boolean
// }

interface State {
    firstName: string
    lastName: string
    bankNumber: string
    cvc: string
    month: string
    year: string
}

interface Props {
    fields: any

}


export default class BankCardInfo extends React.Component<Props, {}> {
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
        // this.props.passStateFromBankCard(props)
    }

    handleSubmit({ firstName, lastName, bankNumber, cvc, month, year }: State) {
        this.sendToParent({ firstName, lastName, bankNumber, cvc, month, year })
    }

    // handleChange = (current?: any) => {

    //     const { firstName, lastName, bankNumber, cvc, month, year } = this.state;
    //     if (firstName !== "" && lastName !== "" && bankNumber !== "" && cvc !== "" && month !== "" && year !== "") {
    //         this.sendToParent(this.state)
    //     } else console.log("not completed")

    // }

    render() {
        return (
            <Panel>
{/* {Object.keys(bankCardFields).map(val => console.log(val))} */}
                <div>
                    <FlexCol>
                        <Grid>
                            <FlexCol></FlexCol>
                            <FlexCol></FlexCol>
                        </Grid>
                        <Grid>
                            <FlexCol></FlexCol>
                            <FlexCol></FlexCol>
                            <FlexCol>
                                <Grid>
                                    <FlexCol></FlexCol>
                                    <FlexCol></FlexCol>
                                </Grid>
                            </FlexCol>
                        </Grid>
                        <Grid>
                        </Grid>
                    </FlexCol>
                </div>
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