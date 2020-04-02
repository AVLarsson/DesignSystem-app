import * as React from 'react';
import {Form} from 'pivotal-ui/react/forms';
import {Grid, FlexCol} from 'pivotal-ui/react/flex-grids';
import "../Imports.css";
import {Input} from 'pivotal-ui/react/inputs';

export default class KlarnaInfo extends React.Component {


    handleInputChange(event:any) {
        const targetValue = event.target.value;
        console.log(targetValue)
    }


    render() {
      return (
        <div className="fadeInInfo">
            <h2>Please Enter Your Info</h2>
            <Form style={{display: "flex", justifyContent: "center"}} {...{
                fields: {
                  firstName: {
                    inline: true,
                    label: 'First Name',
                    children: <Input onKeyUp={this.handleInputChange}/>
                  },
                  lastName: {
                    inline: true,
                    label: 'Last Name',
                    children: <Input onKeyUp={this.handleInputChange}/>
                  },
                  email: {
                      inline: true,
                      label: "Email",
                      children: <Input onKeyUp={this.handleInputChange}/>
                  }
                }
              }}>
                {({fields} : {fields:any} ) => { 
            return (<div style={{width: "80vw"}}>
                <Grid className="grid-show mbxl" style={this.centerStyle}>
  
                    <FlexCol col={5}>{fields.firstName}</FlexCol>
                    <FlexCol col={5}>{fields.lastName}</FlexCol>
  
                </Grid>
                <Grid className="grid-show mbxl" style={this.centerStyle}>
  
                    <FlexCol col={7}>{fields.email}</FlexCol>
  
                 </Grid>
            </div>)
            } }
            </Form>
        </div>
    )
}

    centerStyle: React.CSSProperties = {
        display: "flex",
        justifyContent: "center",
        paddingTop: "20px"
    }

}