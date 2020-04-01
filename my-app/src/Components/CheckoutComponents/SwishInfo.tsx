import * as React from 'react';
import {Form} from 'pivotal-ui/react/forms';
import {Grid, FlexCol} from 'pivotal-ui/react/flex-grids';
import "../Imports.css";

export default class SwishInfo extends React.Component {
    render() {
      return (
        <div className="fadeInInfo">
            <h2>Please Enter Your Info</h2>
            <Form style={{display: "flex", justifyContent: "center"}} {...{
                fields: {
                  firstName: {
                    inline: true,
                    label: 'First Name'
                  },
                  lastName: {
                    inline: true,
                    label: 'Last Name',
                  },
                  phoneNumber: {
                      inline: true,
                      label: "Phone Number"
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
  
                    <FlexCol col={5}>{fields.phoneNumber}</FlexCol>
  
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