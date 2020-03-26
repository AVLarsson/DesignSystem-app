import * as React from 'react';
import {Form} from 'pivotal-ui/react/forms';
import {Grid, FlexCol} from 'pivotal-ui/react/flex-grids';
import {Input} from 'pivotal-ui/react/inputs';

export default class CheckoutInfo extends React.Component {
    render() {
        return (
            <Form  style={{display: "flex", justifyContent: "center"}}>
                {() => {
                return (
                    <div>
                        <Grid className="grid-show mbxl">
                          
                        <FlexCol><Input placeholder="First Name" type="text"/></FlexCol>
                        <FlexCol><Input placeholder="Last Name" type="text"/></FlexCol>
                            
                        </Grid>
                        <Grid className="grid-show mbxl">
                          
                        <FlexCol col={10}><Input placeholder="Email" type="text"/></FlexCol>
                        <FlexCol col={10}><Input placeholder="Phone Number" type="text"/></FlexCol>

                        </Grid>
                        <Grid className="grid-show mbxl">

                        <FlexCol col={15}><Input placeholder="Adress" type="text"/></FlexCol>

                        </Grid>
                        <Grid className="grid-show mbxl">

                        <FlexCol col={10}><Input placeholder="Zipcode" type="text"/></FlexCol>
                        <FlexCol col={10}><Input placeholder="Country" type="text"/></FlexCol>

                        </Grid>
                    </div>
                );
                }}
            </Form>
        )
    }
}