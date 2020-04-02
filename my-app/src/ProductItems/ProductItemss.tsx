import React, { useState } from 'react';
// import { Modal } from 'pivotal-ui/react/modal';
// import { mockedProducts } from '../MockedData'
import AddItemButton from '../Components/AddItemButton';
import { CartContext } from '../Components/CartContext';
import { DangerButton } from 'pivotal-ui/react/buttons'
// Importera från alla sidorna (skulle jag tro!)


export interface Products {
    id: number;
    name: string;
    description: string;
    price: string;
    image: string;
    quantity: number;
}

interface Props {
    id?: number;
    className?: string
    product: Products;
    showCart: boolean;
    mobileView?: boolean;
}

export function ProductItem(props: Props) {

    const { addToCart, removeFromCart } = React.useContext(CartContext);
    const { id, name, description, price, image, quantity } = props.product;

    return (
        <div className={`${props.showCart ? 'showCart display-flex row' : '' } Products ${props.className ? props.className : ''}`}>
            <span className={`productImage mtl ${props.showCart ? 'mobile' : ''}`}>
                <img alt={`${description}`} src={image} />
            </span>
            <span className={`${props.showCart && !props.mobileView ? 'display-flex' : ''}`}>
                <p className='mtl productTitle em-max type-md'>{name}</p>
                <p className='prodictDescription type-sm'>{description}</p>
                <p className=' productPrice type-sm'>{price}kr</p>
                {props.showCart ? <><p className='productQuantity type-sm'>Quantity: {quantity}</p>
                    <DangerButton onClick={() => removeFromCart(id)} {...{style: { minWidth: "5em", maxWidth: "10em" }}}>Remove</DangerButton></> :
                    <AddItemButton id={id} onClick={() => addToCart(id)} />}
            </span>
            {/* <Modal onHide={() => { }} show={show} setShow={setShow}>
                <img alt='' src={image} className='product-modal-image' />
                <p className='productTitle'>{name}</p>
            </Modal> */}

        </div>
    )
}