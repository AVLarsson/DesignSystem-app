import React, { useState } from 'react';
import { mockedProducts } from '../MockedData'
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
    handleAdd: (product: Products) => void
}

function ProductItem(props: Props) {
    const [show, setShow] = useState(false)

    const addToCart = () => {
        props.handleAdd(props.product)
    }
}

const {name, description, price, image} = props.product
return (
    <div className='Products'>
        <img alt='' src={image} onClick={() => 
            setShow(true)} />
        <p className='productTitle'>{name}</p>
        <p className='prodictDescription'>{description}</p>
        <p className='productPrice'>{price}</p>
        <button id='addToCart' onClick={addToCart}>Köp</button>

        <Modal show={show}  setShow={setShow}>
            <img alt='' src={image} className='product-modal-image' />
            <p className='productTitle'>{name}</p>
        </Modal>

    </div>
    
)
