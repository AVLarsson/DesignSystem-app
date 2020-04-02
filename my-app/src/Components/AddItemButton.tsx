import * as React from 'react';
import { Modal } from 'pivotal-ui/react/modal';
import { DefaultButton } from 'pivotal-ui/react/buttons';
import '../styles/addItemButton.css';
import { Icon } from 'pivotal-ui/react/iconography';
import { CartContext } from './CartContext';

export interface AddItemButtonState {
    show: boolean;
    disableAnimation: boolean;
    disableButton: boolean;
}

export interface AddItemButtonProps {
    id: number;
    onClick: any
    // onClick: () => void
    // addItem: (id: number) => void
}

export default class AddItemButton extends React.Component<AddItemButtonProps, AddItemButtonState> {
    static contextType = CartContext;

    constructor(props?: any) {
        super(props);
        this.state = {
            show: false,
            disableAnimation: false,
            disableButton: false,
        };
    }

    render() {
        return (
            <>
                <DefaultButton
                    className={`product${this.props.id}`}
                    disabled={this.state.disableButton}
                    icon={this.state.disableButton ? <Icon src="spinner-lg" /> : null}
                    onClick={this.toggleState}>
                    {this.state.disableButton ? 'Adding...' : 'Add to cart'}
                </DefaultButton>
                <Modal animationDuration={this.state.disableAnimation ? 0 : undefined}
                    title="Successfully added item to cart!"
                    size={this.context.windowWidth <= 481 ? "calc(80% + 2rem)" : "auto"}
                    dialogClassName="display-flex center paxl"
                    show={this.state.show}
                    onHide={() => this.setState({ show: false })}
                >
                    <DefaultButton large flat style={{ width: '100%', marginTop: '3rem' }} onClick={() => this.setState({ show: false })}>Close</DefaultButton>
                </Modal>
            </>
        );
    }

    /**
     * Toggles state for button and modal. 
     * They need separate states or else the button won't complete it's Timeout.
     */
    toggleState = () => {
        this.props.onClick()
        this.setState({ disableButton: true, show: true });
        setTimeout(() => {
            this.setState({ disableButton: false, show: false });
        }, 2000);
    }
}