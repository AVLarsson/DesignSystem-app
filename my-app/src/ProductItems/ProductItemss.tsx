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
        <div className={`Products img${props.product.id}`}>
            <span className="productImage mtxxl">
                <img alt='' src={image} onClick={() =>
                    setShow(true)} />
            </span>
            <p className='mtl productTitle em-max type-md'>{name}</p>
            <p className='prodictDescription type-sm'>{description}</p>
            <p className=' productPrice type-sm'>{price}kr</p>
            {/** lägg till onClick={addToCart} i knappen nedan */}
            <AddItemButton />
            {/* <button id='addToCart' >Köp</button> */}

            <Modal onHide={() => { }} show={show} setShow={setShow}>
                <img alt='' src={image} className='product-modal-image' />
                <p className='productTitle'>{name}</p>
            </Modal>

        </div>

    )
}
