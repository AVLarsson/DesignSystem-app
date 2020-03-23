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
                    className: 'bg-light-gray type-black',
                    logo: <div className="ptl pbl pll" style={{ fontSize: '40px' }}></div>,
                    companyName: 'RetroShop',
                },
                sidebarProps: {
                    className: 'bg-decorative-yellow',
                    primaryLinks: [
                        { text: 'Product 1' },
                        { text: 'Product 2' },
                        { text: 'Product 3' },
                        { text: 'Product 4' },
                        { text: 'Product 5' },
                        { text: 'Product 6' },
                    ],
                    secondaryLinks: [{ text: 'Checkout' }, { text: 'Contact' }],
                    renderLink: ({ text }) => <a style={{ color: 'unset' }} href="#">{text}</a>
                }
            }}>
                <div className="bg-light-green paxl" style={{ height: '100%', overflow: 'scroll' }}>
                    <Panel {...{ header: <h3 className="mam">All products</h3> }}>
                        <Grid className="grid-show mbxl pal">
                            <FlexCol col={8}>
                                <Image style={{ height: '100%', width: '100%', objectFit: 'cover' }} src="http://source.unsplash.com/user/malvestida/Rp-viEAP8Bo" />
                            </FlexCol>
                            <FlexCol col={8}>
                                <Image style={{ height: '100%', width: '100%', objectFit: 'cover' }} src="http://source.unsplash.com/user/ryancp/EGOclsi5QZY" />
                            </FlexCol>
                            <FlexCol col={8}>
                                <Image style={{ height: '100%', width: '100%', objectFit: 'cover' }} src="http://source.unsplash.com/user/tamasp/_PLpBPi6IB4" />
                            </FlexCol>
                        </Grid>
                    </Panel>
                </div>
            </Siteframe>
        )
    }
}

export default HomePage;