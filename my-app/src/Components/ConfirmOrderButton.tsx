import Firebase, { FirebaseContext } from '../Firebase';
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

interface ConfirmOrderButtonProps {
    checkIfDone: any;
}

interface ConfirmOrderButtonState {
    isLoading: boolean;
}

class ConfirmOrderButton extends React.Component<ConfirmOrderButtonProps, ConfirmOrderButtonState> {
    constructor(props: ConfirmOrderButtonProps) {
        super(props);
        this.state = {
            isLoading: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (<FirebaseContext.Consumer>
            {firebase =>
                <CartContext.Consumer>
                    {cartContext =>
                        <>
                            {this.state.isLoading === true ?
                                <div className="icon icon-middle spinner position-absolute" style={{ fontSize: "96px", margin: "0 auto" }}><svg className="icon-spinner-lg" height="100px" width="100px" viewBox="0 0 101 101" xmlns="http://www.w3.org/2000/svg">
                                    <circle className="ring" cx="50%" cy="50%" fill="none" r="45%" strokeLinecap="butt" strokeWidth="10%"></circle>
                                    <circle className="path" cx="50%" cy="50%" fill="none" r="45%" strokeLinecap="butt" strokeWidth="10%"></circle>
                                </svg></div> : null}
                            <p className="type-sm">Confirm Payment</p>
                            <PrimaryButton large disabled={this.state.isLoading || cartContext.cart.length <= 0} className="auth" id="anon"
                                onClick={cartContext.cart.length <= 0 ? null :
                                    () => this.props.checkIfDone() === true ? this.handleClick(firebase, cartContext) : () => null
                                }>
                                Confirm order
                            </PrimaryButton>
                        </>
                    }</CartContext.Consumer>
            }</FirebaseContext.Consumer>);
    }

    handleClick = (firebase: any, cartContext: any) => {
        this.setState({ isLoading: true });
        firebase.doSignInAnonymously();

        setTimeout(() => {
            cartContext.cart = [];
            this.setState({ isLoading: false });
        }, 2000);
        return null;
    }
}

export default ConfirmOrderButton;
