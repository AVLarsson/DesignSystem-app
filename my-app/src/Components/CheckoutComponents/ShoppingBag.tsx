import * as React from 'react';
import {Icon} from 'pivotal-ui/react/iconography';

export default class ShoppingBag extends React.Component {
    render() {
        return (
            <div>
                <div style={{display: "flex", justifyContent: "center", justifySelf: "center"}}>
                    <img style={this.centeringStyleImage} src="https://picsum.photos/200" alt=""/>
                    <p style={this.centeringStyle}>Description</p>
                    <p style={this.centeringStyle}>Price</p>
                    <p style={this.centeringStyle}>1st</p>
                    <Icon src="add_circle"/>
                    <Icon src="cancel"/>
                </div>
            </div>
        )
    }
    centeringStyle: React.CSSProperties = {
        margin: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginRight: "20px"
      }
      centeringStyleImage: React.CSSProperties = {
        margin: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginRight: "40px"
      }
}