import React from 'react';

export interface QuantitySelectorState {
    quantity: number;
}

export interface QuantitySelectorProps extends QuantitySelectorState {
    quantityCallback: (changedQuantity: number) => void;
}

class QuantitySelector extends React.Component<QuantitySelectorProps, QuantitySelectorState> {
    constructor(props: QuantitySelectorProps) {
        super(props);
        this.state = {
            quantity: this.props.quantity
        }

        // this.handleQuantityChange = this.handleQuantityChange.bind(this);
    }

    handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.valueAsNumber <= 10 && event.target.valueAsNumber >= 1) {
            this.setState({ quantity: event.target.valueAsNumber});
            this.props.quantityCallback(this.state.quantity);
        }
    }

    render() {
        return (
            <label>
                <input
                    type="number"
                    value={this.state.quantity}
                    onChange={this.handleQuantityChange}
                    max="10"
                    min="1"
                />
            </label>
        )
    }
    //this.props.productUpdate(this.state.size, this.state.type, this.state.quantity, this.props.index)
}

export default QuantitySelector;