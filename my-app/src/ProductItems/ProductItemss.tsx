import React, { useState } from 'react';
// import { Modal } from 'pivotal-ui/react/modal';
// import { mockedProducts } from '../MockedData'
import AddItemButton from '../Components/AddItemButton';
import { CartContext } from '../Components/CartContext';
import { DangerButton } from 'pivotal-ui/react/buttons'
import { Modal } from 'pivotal-ui/react/modal';
import { mockedProducts } from '../MockedData'
import AddItemButton from 'src/AddItemButton';
import {Grid, FlexCol} from 'pivotal-ui/react/flex-grids';
// Importera från alla sidorna (skulle jag tro!)


export interface Products {
    id?: number;
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
export let cartItems: Object[] = []

export interface Props {
    id?: number;
    product: Products
    // handleClick: (product: Products) => void
}

export function ProductItem(props: Props) {
    const [show, setShow] = useState(false)
    /*
        const addToCart = () => {
            props.handleClick(props.product)
    
        }*/
    console.log('wlh = ' + window.location.pathname);
    
    const { name, description, price, image } = props.product
    if (window.location.pathname === '/') {
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
            </span>
            {/* <Modal onHide={() => { }} show={show} setShow={setShow}>
                <img alt='' src={image} className='product-modal-image' />
                <p className='productTitle'>{name}</p>
            </Modal> */}

        </div>
        )
    } else {
        return (
            <Grid className="grid-show mbxl" justifyContent='space-evenly'>
             <FlexCol {...{style: {maxWidth: '30rem', height: '37rem'}, contentAlignment: 'middle', breakpoint: 'sm', col: '16'}}>
      
        
        <div style={{width: '100%', backgroundColor: 'black', height: '80%'}}> 
                <img alt='' src={image} style={{maxHeight: '45rem', maxWidth:'100%', objectFit: 'cover'}} onClick={() =>
                    setShow(true)} />
        </div>
        
      </FlexCol>

      <FlexCol {...{style: {maxWidth: '30rem', height: '35rem', marginTop:'4rem'}, breakpoint: 'sm', col: '6'}}>
        <div style={{width: '100%'}}>
          <span className="pll display-flex em-high h1">{name}</span>
            <br/>
          <span className="pll display-flex h2">{price}kr</span>
          <AddItemButton />
            <br/>
            <br/>
          <span className="pll display-flex">{description}</span>
        </div>
      </FlexCol>     
      </Grid>       
        )
    }
    
}
