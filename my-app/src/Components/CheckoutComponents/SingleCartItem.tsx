import * as React from 'react';
import {Icon} from 'pivotal-ui/react/iconography';

export default class SingleCartItem extends React.Component<{ counter:any, onDelete:any, onAdd:any, onMinus:any}>{


    render() { 
        return (
            <div style={{display: "flex", justifyContent: "center", justifySelf: "center"}}>
                <img style={this.centeringStyleImage} src="https://picsum.photos/200" alt=""/>
                <p style={this.centeringStyle}>{this.props.counter.id}</p>
                <p style={this.centeringStyle}>Price</p>
                <p style={this.centeringStyle}>{this.props.counter.value}</p>
                <Icon onClick={() => this.props.onAdd(this.props.counter)} src="add_circle"/>
                <Icon onClick={() => this.props.onMinus(this.props.counter, this.props.counter.id)} src="cancel"/>
                <button onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
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