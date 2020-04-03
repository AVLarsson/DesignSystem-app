import * as React from 'react';
import { Component } from 'react';
import SingleCartItem from "./SingleCartItem";
import { theShoppingCart } from "../Checkout";
import { Products } from 'src/ProductItems/ProductItemss';
import { CartContext } from '../CartContext';


interface Props {
    cart: Products[],
    // incrementProduct: (id: string) => void,
    // minusProduct: (id: string) => void,
    // deleteProduct: (id: string) => void,
}


export default class Counters extends Component <Props, {} >{

    render() { 
        
        return ( 
            <CartContext.Consumer>
            {context =>
                <div style={theShoppingCarts}>
                    <h2 style={giveMargin}>You have this many different items: {this.props.cart.filter(c => c.quantity > 0).length}</h2>
                    {this.props.cart.map(product => (
                    <SingleCartItem key={product.id} 
                        product={product} 
                        onAdd={() => context.addToCart(product.id)}
                        onMinus={() => context.removeFromCart(product.id)}
                        />))}
                </div>
    }
    </CartContext.Consumer>
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