import * as React from 'react';
import { Modal } from 'pivotal-ui/react/modal';
import { DefaultButton } from 'pivotal-ui/react/buttons';
import './styles/addItemButton.css';
import { Icon } from 'pivotal-ui/react/iconography';

export interface AddItemButtonState {
    show: boolean,
    disableAnimation: boolean,
    disableButton: boolean,
    windowWidth: number
}

export default class AddItemButton extends React.Component<{}, AddItemButtonState> {
    constructor(props?: any) {
        super(props);
        this.state = {
            show: false,
            disableAnimation: false,
            disableButton: false,
            windowWidth: window.innerWidth,
        };
        this.updateScreenWidth = this.updateScreenWidth.bind(this);
    }

    render() {
        return (
            <>
                <DefaultButton 
                    disabled={this.state.disableButton}
                    icon={this.state.disableButton ? <Icon src="spinner-lg"/> : null}
                    onClick={this.toggleState}>
                        {this.state.disableButton ? 'Adding...' : 'Add to cart'}
                </DefaultButton>
                <Modal animationDuration={this.state.disableAnimation ? 0 : undefined}
                    title="Successfully added item to cart!"
                    size={this.state.windowWidth <= 481 ? "calc(80% + 2rem)" : "auto"}
                    dialogClassName="display-flex center paxl"
                    show={this.state.show}
                    onHide={() => this.setState({ show: false })}
                >
                    <DefaultButton large flat style={{ width: '100%', marginTop: '3rem' }} onClick={() => this.setState({ show: false })}>Close</DefaultButton>
                </Modal>
            </>
        );
    }


    /** Add event listener on mount */
    componentDidMount() {
        window.addEventListener('resize', this.updateScreenWidth);
    }

    /** Removes event listener on unmount */
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateScreenWidth);
    }

    /** Updates current screen width in state. */
    updateScreenWidth() {
        this.setState({ windowWidth: window.innerWidth });
    }

    /**
     * Toggles state for button and modal. 
     * They need separate states or else the button won't complete it's Timeout.
     */
    toggleState = () => {
        this.setState({ disableButton: true, show: true });
        setTimeout(() => {
            this.setState({ disableButton: false, show: false });
        }, 2000);
    }
}