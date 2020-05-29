import { FirebaseContext } from '../Firebase';
import React from 'react';
import { PrimaryButton } from 'pivotal-ui/react/buttons'
import { CartContext } from './CartContext';
import 'pivotal-ui/css/iconography';
import 'pivotal-ui/css/alerts';
import 'pivotal-ui/css/iconography';
import { Divider } from 'pivotal-ui/react/dividers';
import { SuccessAlert } from 'pivotal-ui/react/alerts'

interface ConfirmOrderButtonProps {
          checkIfDone: () => boolean
 }

interface ConfirmOrderButtonState {
    isLoading: boolean;
}

class ConfirmOrderButton extends React.Component<{}, ConfirmOrderButtonState> {
    constructor(props: any) {
        super(props);
        this.state = {
            isLoading: false
        }
    }

    firebaseInstance = null as any;
    animationTimer = null as any;

    render() {
        const { isLoading } = this.state;
        return (<FirebaseContext.Consumer>
            {firebase =>
                <CartContext.Consumer>
                    {cartContext =>
                        <>
                            {this.firebaseInstance = firebase.doSignInAnonymously()}
                            {isLoading ?
                                <div className="icon icon-middle spinner position-absolute" style={{ fontSize: "96px", margin: "0 auto" }}><svg className="icon-spinner-lg" height="100px" width="100px" viewBox="0 0 101 101" xmlns="http://www.w3.org/2000/svg">
                                    <circle className="ring" cx="50%" cy="50%" fill="none" r="45%" strokeLinecap="butt" strokeWidth="10%"></circle>
                                    <circle className="path" cx="50%" cy="50%" fill="none" r="45%" strokeLinecap="butt" strokeWidth="10%"></circle>
                                </svg></div> : this.animationTimer === null && <>
                                    <Divider />
                                    <PrimaryButton large type="submit" disabled={cartContext.cart.length < 1} className="auth" id="anon"
                                        onClick={() => this.toggleState}>Confirm order</PrimaryButton></>} {!isLoading && this.animationTimer !== null && <SuccessAlert withIcon>Your order has been placed.</SuccessAlert>}
                        </>
                    }</CartContext.Consumer>
            }</FirebaseContext.Consumer>);

    }

    handleClick = () => { this.toggleState() }

    /**
         * Clear spinner timer on mount to avoid overlapping.
         */
    componentDidMount() {
        clearTimeout(this.animationTimer);
    }

    /**
     * Clear spinner timer on unmount.
     */
    componentWillUnmount() {
        clearTimeout(this.animationTimer);
    }

    /**
     * Handles the start of the timer for the loading spinner.
     * Clears timer if it exists and then sets timer that will disable the spinner when it finishes.
     */
    setLoadingTimer = () => {
        if (this.animationTimer) {
            this.clearLoadingTimer();
        }
    };

    /**
     * Clears spinner timer if it exists.
     */
    clearLoadingTimer = () => {
        if (this.animationTimer) {
            clearTimeout(this.animationTimer);
            this.animationTimer = 0;
        }
    };

    /**
     * Toggles state for button and spinner.
     */
    toggleState = () => {
        this.setState({ isLoading: true }, this.setLoadingTimer);
    }
}

export default ConfirmOrderButton;
