import React from 'react';
import { Siteframe } from 'pivotal-ui/react/siteframe';
import { Panel } from 'pivotal-ui/react/panels';
import { Grid, FlexCol } from 'pivotal-ui/react/flex-grids';
import { ProductItem } from '../ProductItems/ProductItemss';
import { mockedProducts } from '../MockedData';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext';
import { DefaultButton } from 'pivotal-ui/react/buttons';

const HomePage = () => {
    const { currentCart } = React.useContext(CartContext);

    return (<Siteframe {...{
        headerProps: {
            className: 'bg-light-gray paxl',
            companyName:
                <span style={{ color: 'black' }}>RetroShop</span>,
            cols: [
                <Grid
                    className="grid-show position-fixed type-black em-alt"
                    {...{ style: { right: '0' } }}
                    flexDirection="row"
                    justifyContent="space-between">
                    <FlexCol fixed>
                        <span>Accessories</span>
                    </FlexCol>
                    <FlexCol fixed>
                        <span>Clothes</span>
                    </FlexCol>
                    <FlexCol fixed>
                        <span>Brands</span>
                    </FlexCol>
                </Grid>
            ]
        },
        sidebarProps: {
            className: 'bg-decorative-yellow',
            primaryLinks: [
                { text: 'Coat', path: '/product1', id: '1' },
                { text: 'Sunglasses', path: '/product2', id: '2' },
                { text: 'Sneakers', path: '/product3', id: '3' },
                { text: 'Blazer', path: '/product4', id: '4' },
                { text: 'Boots', path: '/product5', id: '5' },
                { text: 'Jacket', path: '/product6', id: '6' },
                { text: 'All products', path: '/', id: '999' }
            ],
            secondaryLinks: [{ text: 'Shopping Bag' }, { text: 'Checkout', path: '/checkout', id: '0' }],
            renderLink: ({ text, path, id }: any) =>
                <>
                    {path ? <Link to={`${path}`} key={id} href={path} style={{ color: 'unset', textDecoration: 'none' }}>
                        <DefaultButton className={id === '0' ? '' : 'pui-btn--flat type-black'}>
                            {text}</DefaultButton>
                    </Link> : <DefaultButton className={'maxl'} onClick={currentCart}>{text}</DefaultButton>}
                </>
        }
    }}>
        <div className="bg-light-green paxl scroll" style={{ height: '100%', width: 'auto' }}>
            <Panel {...{
                header: <h3 className="mam">All products</h3>,
                className: 'scroll display-flex',
                style: { minWidth: 'fit-content', width: 'auto', height: 'auto' }
            }}>
                <Grid className="grid-show pbxl scroll" justifyContent="space-evenly">
                    {mockedProducts.map(product => {
                        return (
                            <FlexCol key={product.id} col={8} className="width-product pan">
                                <ProductItem key={product.id} showCart={false} product={product} />
                            </FlexCol>
                        )
                    })}
                </Grid>
            </Panel>
        </div>
    </Siteframe>)



}

export default HomePage;

/* ------ OLD PRODUCT CARD ------
<FlexCol col={8} className="width-product pan mbxxxl">
    <Image className="pal" src="http://source.unsplash.com/user/lordmaui/54e6y8NYiSM" />
    <p className="pll prl mbxl man display-flex space-between">
        <span>Vans</span>
        <span>499SEK</span>
    </p>
</FlexCol>*/
