import React from 'react';
import { FirebaseContext } from './Firebase';
import { PrimaryButton } from 'pivotal-ui/react/buttons';
import QuantitySelector from './Firebase/QuantitySelector';

export const Size = ["XS", "S", "M", "L", "XL"];
export const Color = ["black", "white", "red"];

export interface ShoppingCartState {
    quantity: number;
    price: number;
    total: number;
}

class CartProduct extends React.Component<{}, ShoppingCartState> {
    constructor(props?: any) {
        super(props);

        this.state = {
            quantity: 0,
            price: 0,
            total: 0
        }
    }

    render() {
        return (
            <FirebaseContext.Consumer>
                {firebase => <>
                    <QuantitySelector quantityCallback={this.quantityCallback} quantity={this.state.quantity} />
                    <p className="type-sm">Continue as guest and</p>
                    <PrimaryButton className="auth" id="anon"
                        onClick={() => { this.handleClick(firebase) }}>
                        Confirm order
                    </PrimaryButton>
                </>}
            </FirebaseContext.Consumer>
        )
    }

    quantityCallback = (changedQuantity: number) => {
        this.setState({
            quantity: changedQuantity,
            total: this.state.price * changedQuantity
        })
    }

    handleClick = (firebase: any) => {
        firebase.doSignInAnonymously();
    }
}

export default CartProduct;