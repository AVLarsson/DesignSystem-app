import React from 'react';
import { Siteframe } from 'pivotal-ui/react/siteframe';
import { Panel } from 'pivotal-ui/react/panels';
import { Grid, FlexCol } from 'pivotal-ui/react/flex-grids';
import { ProductItem } from '../ProductItems/ProductItemss';
import { mockedProducts } from '../MockedData';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import { DefaultButton } from 'pivotal-ui/react/buttons';

const HomePage = () => {
    const { currentCart, cart } = React.useContext(CartContext);

    return (<Siteframe {...{
        headerProps: {
            className: 'bg-light-gray paxl',
            companyName:
                <span style={{ color: 'black', fontSize:"30px", fontStyle:"italic" }}>RetroShop</span>,
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
            primaryLinks: [{ text: [<img alt='RetroShop logo' key={"000"} style={{ width: '90%', margin:'auto' }} src='https://i.imgur.com/ANCnCV1.png' />], id: 'logo' },
            { text: 'Coat', path: '/product', id: '1' },
            { text: 'Sunglasses', path: '/product', id: '2' },
            { text: 'Sneakers', path: '/product', id: '3' },
            { text: 'Blazer', path: '/product', id: '4' },
            { text: 'Boots', path: '/product', id: '5' },
            { text: 'Jacket', path: '/product', id: '6' },
                { text: 'All products', path: '/', id: '' }
            ],
            secondaryLinks: [{ text: 'Shopping Bag' }, { text: 'Checkout', path: '/checkout', id: '0' }],
            renderLink: ({ text, path, id }: any) =>
            <>
            {id === 'logo' ? text : path ?
              <Link to={`${path !== '/checkout' ? `${path}${id}` : cart.length >= 1 ? path : '/'}`} key={id} href={path} style={{ padding: '3px', color: 'unset', textDecoration: 'none' }}>
                <DefaultButton disabled={path === '/checkout' && cart.length === 0 ? true : false} className={id === '0' ? '' : 'mlxl pan pui-btn--flat type-black'}>
                  {text}
                </DefaultButton>
              </Link> : <DefaultButton className={'mas'} onClick={currentCart}>{text}</DefaultButton>}
          </>
        }
    }}>
        <div className="bg-light-green scroll" style={{ height: '100%', width: 'auto' }}>
        <Panel {...{
              className: 'bg-light-green display-flex',
              style: { backgroundImage: 'url("https://i.imgur.com/6Ncy7S2.png")', minWidth: 'fit-content', width: 'auto', height: '20%', overflow: 'auto', padding: '0' }
            }}>
            </Panel>
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
    </Siteframe>   
    )
}

export default HomePage;