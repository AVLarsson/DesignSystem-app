import * as React from 'react';
import {Icon} from 'pivotal-ui/react/iconography';

export default class SingleCartItem extends React.Component<{ product:any, onAdd:any, onMinus:any}>{


    render() { 
        return (
            <div style={{ display: "flex", justifyContent: "center", justifySelf: "center" }}>
                <img style={this.centeringStyleImage} src={this.props.product.image} alt="" />
                <p style={this.centeringStyle}>{this.props.product.name}</p>
                <p style={this.centeringStyle}>Price: {this.props.product.price}kr</p>
                <p style={this.centeringStyle}>Quantity: {this.props.product.quantity}</p>
                <Icon onClick={() => this.props.onAdd(this.props.product)} src="add_circle" />
                <Icon onClick={() => this.props.onMinus(this.props.product, this.props.product.id)} src="cancel" />
            </div>
        );
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
};