import { FirebaseContext } from '../Firebase';
import React, { ReactInstance, FC } from 'react';
import { PrimaryButton } from 'pivotal-ui/react/buttons'
import { CartContext } from './CartContext';
import { Products } from 'src/ProductItems/ProductItemss';
import { Redirect, withRouter } from 'react-router-dom';

interface Props {
    checkIfDone: () => boolean
}

const ConfirmOrderButton = (props: any) => {
    const {
        history,
        location,
        match,
        staticContext,
        onClick,
        className,
        ...rest
      } = props
    const handleClick = async (firebase: any, cartContext: any) => {
        try {
            await firebase.doSignInAnonymously();
            console.log("Your order has been placed.");
            cartContext.cart = [];
            return history.push('/');
        } catch (error) {
            console.log(error)
        }
    }

    return <FirebaseContext.Consumer>
        {firebase =>
            <CartContext.Consumer>
                {cartContext =>
                    <>
                        <p className="type-sm">Confirm Payment</p>
                        <PrimaryButton className="auth" id="anon"
                            onClick={() => {
                                props.checkIfDone() === true && handleClick(firebase, cartContext);
                            }}>
                            Confirm order
                        </PrimaryButton>
                    </>
                }</CartContext.Consumer>
        }</FirebaseContext.Consumer>
}

export default withRouter(ConfirmOrderButton);