// import * as React from 'react';
// import {Icon} from 'pivotal-ui/react/iconography';

// export default class ShoppingBag extends React.Component {
//     render() {
//         return (
//             <div>
//                 <div style={{display: "flex", justifyContent: "center", justifySelf: "center"}}>
//                     <img style={this.centeringStyleImage} src="https://picsum.photos/200" alt=""/>
//                     <p style={this.centeringStyle}>Description</p>
//                     <p style={this.centeringStyle}>Price</p>
//                     <p style={this.centeringStyle}>1st</p>
//                     <Icon src="add_circle"/>
//                     <Icon src="cancel"/>
//                 </div>
//             </div>
//         )
//     }
//     centeringStyle: React.CSSProperties = {
//         margin: "0",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         marginRight: "20px"
//       }
//       centeringStyleImage: React.CSSProperties = {
//         margin: "0",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         marginRight: "40px"
//       }
// }

import * as React from 'react';
import { Component } from 'react';
import SingleCartItem from "./SingleCartItem";
import { theShoppingCart } from "../Checkout";


interface Props {
    products: theShoppingCart[],
    incrementProduct: (id: string) => void,
    minusProduct: (id: string) => void,
    deleteProduct: (id: string) => void,
}


export default class Counters extends Component <Props, {} >{


    render() { 
        
        return ( 
                <div style={theShoppingCarts}>
                    <h2 style={giveMargin}>You have this many different items: {this.props.products.filter(c => c.value > 0).length}</h2>
                    {this.props.products.map(counter => (
                    <SingleCartItem key={counter.id} 
                        onDelete={() => {this.props.deleteProduct(counter.id)}} 
                        counter={counter} 
                        onAdd={() => {this.props.incrementProduct(counter.id)}} 
                        onMinus={() => {this.props.minusProduct(counter.id)}}/>))}
                </div>
        );
    }

}


const countersStyle: React.CSSProperties = {
    position: "fixed",
    justifySelf: "center",
    top: "10vh",
    bottom: "10vh",
    left: "10vw",
    right: "10vw",
    border: "2px solid white",
    borderRadius: "12px" ,
    backgroundColor: "#deebf0",
    textAlign: "center",
    overflow: "scroll",
    
}

const theShoppingCarts: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    justifySelf: "center",
}

const giveMargin: React.CSSProperties = {
    margin: "20px"
}