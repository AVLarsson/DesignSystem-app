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

const theShoppingCarts: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    justifySelf: "center",
}

const giveMargin: React.CSSProperties = {
    margin: "20px"
}