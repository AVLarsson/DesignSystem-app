import { FirebaseContext } from '../Firebase';
import React, { ReactInstance, FC } from 'react';
import { PrimaryButton } from 'pivotal-ui/react/buttons'
import { CartContext } from './CartContext';
import { Products } from 'src/ProductItems/ProductItemss';
import { Redirect, withRouter } from 'react-router-dom';
import 'pivotal-ui/css/iconography';
import { SuccessAlert, InfoAlert, WarningAlert, ErrorAlert } from 'pivotal-ui/react/alerts';
import 'pivotal-ui/css/alerts';
import { Icon } from 'pivotal-ui/react/iconography'
import 'pivotal-ui/css/iconography'

interface Props {
    checkIfDone: () => boolean
}

const ConfirmOrderButton = (props: any) => {
    const [isLoading, setIsLoading] = React.useState(false);
    const {
        history,
        location,
        match,
        staticContext,
        onClick,
        className,
        ...rest
    } = props
    const handleClick = (firebase: any, cartContext: any) => {
        setIsLoading(true);
        firebase.doSignInAnonymously();
        setTimeout(() => {
        }, 1000);
        setTimeout(() => {
            setIsLoading(false);
            alert("Your order has been placed.")
            cartContext.cart = [];
            history.push('/');
        }, 4000);
    }

    return (<FirebaseContext.Consumer>
        {firebase =>
            <CartContext.Consumer>
                {cartContext =>
                    <>
                                            {isLoading === true ?
                            <div className="icon icon-middle spinner position-absolute" style={{ fontSize: "96px", margin: "0 auto" }}><svg className="icon-spinner-lg" height="100px" width="100px" viewBox="0 0 101 101" xmlns="http://www.w3.org/2000/svg">
                                <circle className="ring" cx="50%" cy="50%" fill="none" r="45%" strokeLinecap="butt" strokeWidth="10%"></circle>
                                <circle className="path" cx="50%" cy="50%" fill="none" r="45%" strokeLinecap="butt" strokeWidth="10%"></circle>
                            </svg></div> : null}
                        <p className="type-sm">Continue as guest and</p>

                        <PrimaryButton className="auth" id="anon"
                            onClick={() => {
                                props.checkIfDone() === true && handleClick(firebase, cartContext);
                            }}>
                            Confirm order
                        </PrimaryButton>
                    </>
                }</CartContext.Consumer>
        }</FirebaseContext.Consumer>)
}

export default withRouter(ConfirmOrderButton);