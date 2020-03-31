import React, { useState } from 'react';
import { Modal } from 'pivotal-ui/react/modal';
import { mockedProducts } from '../MockedData'
import AddItemButton from 'src/AddItemButton';
// Importera från alla sidorna (skulle jag tro!)


export interface Products {
    id: number;
    name: string;
    description: string;
    price: string;
    image: string;
}

export let cartItems: Object[] = []

interface Props {
    product: Products
    // handleClick: (product: Products) => void
}

export function ProductItem(props: Props) {
    const [show, setShow] = useState(false)
/*
    const addToCart = () => {
        props.handleClick(props.product)

    }*/

    const { name, description, price, image } = props.product
    return (
        <div className='Products'>
            <img alt='' src={image} onClick={() =>
                setShow(true)} />
            <p className='productTitle'>{name}</p>
            <p className='prodictDescription'>{description}</p>
            <p className='productPrice'>{price}</p>
            {/** lägg till onClick={addToCart} i knappen nedan */}
            <AddItemButton />
            {/* <button id='addToCart' >Köp</button> */}

            <Modal onHide={() => {}} show={show} setShow={setShow}>
                <img alt='' src={image} className='product-modal-image' />
                <p className='productTitle'>{name}</p>
            </Modal>

        </div>

    )
}
