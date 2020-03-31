import React from 'react';
import { Siteframe } from 'pivotal-ui/react/siteframe';
import { Panel } from 'pivotal-ui/react/panels';
import { Grid, FlexCol } from 'pivotal-ui/react/flex-grids';
import { Image } from 'pivotal-ui/react/images';

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
                            {...{style: { right: '0' }}}
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
                        { text: 'T-shirt' },
                        { text: 'Jacket' },
                        { text: 'Sneakers' },
                        { text: 'Sweatshirt' },
                        { text: 'Shirt' },
                        { text: 'Jeans' },
                    ],
                    secondaryLinks: [{ text: 'Checkout' }, { text: 'Contact' }],
                    renderLink: ({ text }: any) => <a className="underline" style={{ color: 'unset' }} href="#">{text}</a>
                }
            }}>
                <div className="bg-light-green paxl" style={{ height: '100%', width: 'auto' }}>
                    <Panel {...{
                        header: <h3 className="mam">All products</h3>,
                        className: 'scroll display-flex',
                        style: { minWidth: 'fit-content', width: 'auto', height: 'auto' }
                    }}>
                        <Grid className="grid-show type-sm pbxl scroll" justifyContent="space-evenly">
                            <FlexCol col={8} className="width-product pan mbxxxl">
                                <Image className="pal" src="http://source.unsplash.com/user/malvestida/Rp-viEAP8Bo" />
                                <p className="pll prl mbxl man display-flex space-between">
                                    <span>Nike Air</span>
                                    <span>599SEK</span>
                                </p>
                            </FlexCol>
                            <FlexCol col={8} className="width-product pan mbxxxl">
                                <Image className="pal" src="http://source.unsplash.com/user/ryancp/EGOclsi5QZY" />
                                <p className="pll prl mbxl man display-flex space-between">
                                    <span>Adidas</span>
                                    <span>899SEK</span>
                                </p>
                            </FlexCol>
                            <FlexCol col={8} className="width-product pan mbxxxl">
                                <Image className="pal" src="http://source.unsplash.com/user/tamasp/_PLpBPi6IB4" />
                                <p className="pll prl mbxl man display-flex space-between">
                                    <span>Vans</span>
                                    <span>499SEK</span>
                                </p>
                            </FlexCol>
                        </Grid>
                    </Panel>
                </div>
            </Siteframe>
        )
    }
}

export default HomePage;