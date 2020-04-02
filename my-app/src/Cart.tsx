import React from 'react';
import { CartContext } from './CartContext';
import { Modal } from 'pivotal-ui/react/modal';
import { ProductItem } from './ProductItems/ProductItemss';
import { Products } from './ProductItems/ProductItemss';
import { mockedProducts } from './MockedData';

interface CartState {
    cart: Products[];
    addToCart: (id: number) => void
    removeFromCart: (id: number) => void;
    currentCart: () => void;
    updateScreenWidth: () => void;
    showCart: boolean;
    windowWidth: number;
    total: number;
}

export default class Cart extends React.Component<{}, CartState> {
    constructor(props?: any) {
        super(props);
        this.state = {
            cart: [] as any,
            addToCart: this.addToCart,
            removeFromCart: this.removeFromCart,
            currentCart: this.currentCart,
            updateScreenWidth: this.updateScreenWidth,
            showCart: false,
            total: 0,
            windowWidth: window.innerWidth
        }

        this.addToCart = this.addToCart.bind(this);
        this.removeFromCart = this.removeFromCart.bind(this);
        this.currentCart = this.currentCart.bind(this);
        this.setState = this.setState.bind(this);
        this.updateScreenWidth = this.updateScreenWidth.bind(this);
    }

    render() {
        const { windowWidth } = this.state;
        return (
            <>
                <CartContext.Provider value={this.state}>
                    {this.props.children}
                    <Modal dialogClassName="pbxxl"
                        size={`${windowWidth <= 481 ? "100%" : "calc(70% + 2rem)"}`}
                        onHide={() => this.setState({ showCart: false })}
                        show={this.state.showCart}>
                        {this.showInfo()}
                        {this.state.total === 0 ? null : <p className="pal em-high float-right">Total: {this.state.total}kr</p>}
                    </Modal>
                </CartContext.Provider>
            </>
        )
    }

    showInfo() {
        const { windowWidth } = this.state;
        if (1 <= this.state.cart.length) {
            return ( 
                this.state.cart.map(product => {
                    return (product.quantity === 0 ? null : <ProductItem
                        className="width-product"
                        showCart={true}
                        key={product.id}
                        mobileView={windowWidth <= 481}
                        product={product} />
                    )}))
        } else if (this.state.cart.length === 0) {
            return <p>Looks like your shopping bag is empty...</p>
        }
    }

    removeFromCart = (id: number) => {
        let { cart, total } = this.state;

        cart.map(product => {
            if (product.id === id && product.quantity <= 1) {
                total = total - parseInt(product.price);
                this.removeProduct(id, total);
            } else if (product.id === id) {
                product.quantity--;
                total = total - parseInt(product.price);
                this.setState({ cart, total });
            }
        })
    }

    removeProduct(id: number, total: number) {
        const cart = this.state.cart.filter(product => product.id !== id);
        this.setState({ cart, total });
    }

    currentCart = () => {
        this.setState(prevState => ({
            showCart: !prevState.showCart
        }))
    }

    addToCart = (id: number) => {
        let { cart, total } = this.state;

        const newItem = mockedProducts.find(product => product.id === id);
        const existedItem = cart.find(product => id === product.id);

        if (existedItem) {
            existedItem.quantity++;
            total = total + parseInt(existedItem.price);
        } else if (newItem) {
            cart.push(newItem as Products);
            total = total + parseInt(newItem.price);
        }

        this.setState({ cart: cart, total });
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
}