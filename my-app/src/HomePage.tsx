import React from 'react';
import { Siteframe } from 'pivotal-ui/react/siteframe';
import { Panel } from 'pivotal-ui/react/panels';
import { Grid, FlexCol } from 'pivotal-ui/react/flex-grids';
import { Image } from 'pivotal-ui/react/images';
import { ProductItem } from './ProductItems/ProductItemss';
import { mockedProducts } from './MockedData';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
    render() {
        return (
            <Siteframe {...{
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
                        { text: 'Coat', path: '/product', id: '1' },
                        { text: 'Sunglasses', path: '/product', id: '2' },
                        { text: 'Sneakers', path: '/product', id: '3' },
                        { text: 'Blazer', path: '/product', id: '4' },
                        { text: 'Boots', path: '/product', id: '5' },
                        { text: 'Jacket', path: '/product', id: '6' }
                    ],
                    secondaryLinks: [{ text: 'Checkout' }, { text: 'Contact' }],
                    renderLink: ({ text, path, id }: any) =>
                    <>
                            <Link to={`${path}${id}`} key={id} href={path} className="underline" style={{ color: 'unset' }}>
                                {text}
                            </Link>
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
                                        <ProductItem key={product.id} product={product} />
                                    </FlexCol>
                                )
                            })}
                        </Grid>
                    </Panel>
                </div>
            </Siteframe>
        )
    }
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
