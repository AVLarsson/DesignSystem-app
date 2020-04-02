import * as React from 'react';
import {Form} from 'pivotal-ui/react/forms';
import {Grid, FlexCol} from 'pivotal-ui/react/flex-grids';
import {Input} from 'pivotal-ui/react/inputs';


interface Props {
    status: any
}

export default class CheckoutInfo extends React.Component <Props, {}> {

    state = { updateBool: false }

      componentDidMount = () => {

        console.log(this.state.updateBool)
          
          if (this.props.status.firstName === false) {
        }
        
        let theName = (document.getElementById("userFirstName") as unknown as HTMLInputElement);
        if (localStorage.firstName){
            
            theName.value = JSON.parse(localStorage.firstName);
            
            console.log(theName.value)
        }
        else {
            // this.forceUpdate(this.componentDidMount)  
        }
    }
    
    componentDidUpdate() {
        let theName = (document.getElementById("userFirstName") as unknown as HTMLInputElement);
        if (localStorage.firstName){
            
            theName.value = JSON.parse(localStorage.firstName);
        }
    }
    
    bananarama() {
        console.log(this.state.updateBool);
    }

    handleInputChange(event:any) {
        const targetValue = event.target.value;
        const targetName = event.target.name
        const valueString = JSON.stringify(targetValue);

        localStorage.setItem(targetName, valueString)
    
            
    }


    render() {
        return (
            <Form style={{display: "flex", justifyContent: "center"}} {...{
                fields: {
                  firstName: {
                    inline: true,
                    label: 'First Name',
                    initialValue: "hello",
                    children: <Input id="userFirstName" onKeyUp={this.handleInputChange} />,
                  },
                  lastName: {
                    inline: true,
                    label: 'Last Name',
                    initialValue: "hello",
                    children: <Input onKeyUp={this.handleInputChange}/>
                  },
                  email: {
                      inline: true,
                      label: "Email",
                      children: <Input onKeyUp={this.handleInputChange}/>
                  },
                  phoneNumber: {
                      inline: true,
                      label: "Phone Number",
                      children: <Input onKeyUp={this.handleInputChange}/>
                  },
                  adress: {
                      inline: true,
                      label: "Adress",
                      children: <Input onKeyUp={this.handleInputChange}/>
                  },
                  zipcode: {
                      inline: true,
                      label: "Zipcode",
                      children: <Input onKeyUp={this.handleInputChange}/>
                  },
                  country: {
                      inline: true,
                      label: "Country",
                      children: <Input onKeyUp={this.handleInputChange}/>
                  }
                }
              }}>
                {({fields} : {fields:any} ) => { 
                return (
                    <div style={{width: "80vw"}}>
                        <Grid className="grid-show mbxl" style={this.centerStyle}>
                          
                        <FlexCol col={5}>{fields.firstName}</FlexCol>
                        <FlexCol col={5}>{fields.lastName}</FlexCol>
                            
                        </Grid>
                        <Grid className="grid-show mbxl" style={this.centerStyle}>
                          
                        <FlexCol col={5}>{fields.email}</FlexCol>
                        <FlexCol col={5}>{fields.phoneNumber}</FlexCol>

                        </Grid>
                        <Grid className="grid-show mbxl" style={this.centerStyle}>

                        <FlexCol col={10}>{fields.adress}</FlexCol>

                        </Grid>
                        <Grid className="grid-show mbxl" style={this.centerStyle}>

                        <FlexCol col={3}>{fields.zipcode}</FlexCol>
                        <FlexCol  col={5}>{fields.country}</FlexCol>

                        </Grid>
                    </div>
                );
                }}
            </Form>
        )
    }

    centerStyle: React.CSSProperties = {
        paddingTop: "20px",
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center",
      }
}