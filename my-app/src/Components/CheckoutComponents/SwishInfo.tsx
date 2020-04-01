import * as React from 'react';
import {Form} from 'pivotal-ui/react/forms';
import {Grid, FlexCol} from 'pivotal-ui/react/flex-grids';
import {Input} from 'pivotal-ui/react/inputs';
import "../Imports.css";

export default class SwishInfo extends React.Component {
    render() {
      return (
        <div className="fadeInInfo">
            <h2>Please Enter Your Info</h2>
            <Form style={{ display: "flex", justifyContent: "center", margin: "50px" }}>
            {() => {
            return (<div>
                <Grid className="grid-show mbxl">
  
                    <FlexCol><Input placeholder="First Name" type="text" /></FlexCol>
                    <FlexCol><Input placeholder="Last Name" type="text" /></FlexCol>
  
                </Grid>
                <Grid className="grid-show mbxl">
  
                    <FlexCol col={10}><Input placeholder="PhoneNumber" type="text" /></FlexCol>
  
                 </Grid>
            </div>)
            } }
            </Form>
        </div>
    )
    }
}