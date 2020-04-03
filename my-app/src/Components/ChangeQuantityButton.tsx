import React from 'react';
import { CartContext } from './CartContext';
import { Icon } from 'pivotal-ui/react/iconography';
import 'pivotal-ui/css/iconography';

interface ChangeQuantityButtonProps {
    action: string;
}

export const ChangeQuantityButton = (props: ChangeQuantityButtonProps) => {
    const { cart } = React.useContext(CartContext);

    return (
        <Icon src="add_circle" style={{fill: 'blue'}}/>
    )
}