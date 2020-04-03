import { FirebaseContext } from '../Firebase';
import React, { ReactInstance } from 'react';
import { PrimaryButton } from 'pivotal-ui/react/buttons'
import { CartContext } from './CartContext';
import { Products } from 'src/ProductItems/ProductItemss';
import { Redirect } from 'react-router-dom';

interface Props {
    checkIfDone: () => boolean
}

export const ConfirmOrderButton = (props: Props) => {
    const handleClick = async (firebase: any, cart: Products[]) => {
        /* 
        UNCOMMENT THE LINE BELOW TO SAVE TO DATABASE
    
        firebase.doSignInAnonymously();
        */

        try {
            await firebase.doSignInAnonymously();
            console.log("Your order has been placed.");
            return (<Redirect to="/" />)
            return;
        } catch (error) {
            console.log(error)
        }
    }

    return <FirebaseContext.Consumer>
        {firebase =>
            <CartContext.Consumer>
                {cartContext =>
                    <>
                        <p className="type-sm">Continue as guest and</p>
                        <PrimaryButton className="auth" id="anon"
                            onClick={() => {
                                props.checkIfDone() === true && handleClick(firebase, cartContext.cart);
                            }}>
                            Confirm order
                        </PrimaryButton>
                    </>
                }</CartContext.Consumer>
        }</FirebaseContext.Consumer>
}