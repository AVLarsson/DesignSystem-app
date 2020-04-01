import * as React from 'react';
import {Form} from 'pivotal-ui/react/forms';
import {Grid, FlexCol} from 'pivotal-ui/react/flex-grids';

export default class CheckoutInfo extends React.Component {
    render() {
        return (
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
                  email: {
                      inline: true,
                      label: "Email"
                  },
                  phoneNumber: {
                      inline: true,
                      label: "Phone Number"
                  },
                  adress: {
                      inline: true,
                      label: "Adress",
                  },
                  zipcode: {
                      inline: true,
                      label: "Zipcode",
                  },
                  country: {
                      inline: true,
                      label: "Country",
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