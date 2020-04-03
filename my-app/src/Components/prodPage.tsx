import * as React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Grid, FlexCol } from 'pivotal-ui/react/flex-grids';
import { Siteframe } from 'pivotal-ui/react/siteframe';
import 'pivotal-ui/css/siteframe';
import { Panel } from 'pivotal-ui/react/panels';
import 'pivotal-ui/css/panels';
import 'pivotal-ui/css/colors';
import { Image } from 'pivotal-ui/react/images';
import 'pivotal-ui/css/images';
import { Row, Col } from 'pivotal-ui/react/grids';
import AddItemButton from './AddItemButton';
import { ProductItem } from '../ProductItems/ProductItemss';
import { Products } from '../ProductItems/ProductItemss';
import { CartContext } from './CartContext';
import { DefaultButton } from 'pivotal-ui/react/buttons'

// import {Icon} from 'pivotal-ui/react/iconography';
// import 'pivotal-ui/css/iconography';


interface Props {
  id?: number;
  product: Products
}

class ProdPage extends React.Component<Props, {}> {

  render() {
    return (
      <CartContext.Consumer>{context =>
        <Siteframe {...{
          headerProps: {
            className: 'bg-light-gray paxl',
            companyName:
              <span style={{ color: 'black' }}>RetroShop</span>,
            cols: [
              <Grid
                className="grid-show position-fixed type-black em-alt"
                {...{ style: { right: '0', height: 'window.innerHeight' } }}
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
            className: 'bg-decorative-yellow overflow-hidden',
            primaryLinks: [{ text: [<img style={{ width: '100%' }} src='https://i.imgur.com/ANCnCV1.png' />], id: 'logo' },
            { text: 'Coat', path: '/product', id: '1' },
            { text: 'Sunglasses', path: '/product', id: '2' },
            { text: 'Sneakers', path: '/product', id: '3' },
            { text: 'Blazer', path: '/product', id: '4' },
            { text: 'Boots', path: '/product', id: '5' },
            { text: 'Jacket', path: '/product', id: '6' },
            { text: 'All products', path: '/', id: '999' }],
            secondaryLinks: [{ text: 'Shopping Bag' }, { text: 'Checkout', path: '/checkout', id: '0' }],
            renderLink: ({ text, path, id }: any) =>
              <>
                {id === 'logo' ? text : path ?
                  <Link to={`${path !== '/checkout' ? path : context.cart.length >= 1 ? path : '/'}`} key={id} href={path} style={{ padding: '3px', color: 'unset', textDecoration: 'none' }}>
                    <DefaultButton disabled={path === '/checkout' && context.cart.length === 0 ? true : false} className={id === '0' ? '' : 'mlxl pan pui-btn--flat type-black'}>
                      {text}
                    </DefaultButton>
                  </Link> : <DefaultButton className={'mas'} onClick={context.currentCart}>{text}</DefaultButton>}
              </>
          }
        }}>

          <div className="bg-light-green" style={{ height: '100%', width: 'auto', overflowX: 'hidden' }}>
            <Panel {...{
              className: 'bg-light-green display-flex',
              style: { backgroundImage: 'url("https://i.imgur.com/MGlC0Hj.png")', minWidth: 'fit-content', width: 'auto', height: '20%', overflow: 'auto', padding: '0' }
            }}>
            </Panel>

            <div className='bg-white border-rounded' style={{ width: '70rem', height: '50rem', margin: 'auto', marginTop: '4rem', boxShadow: '0px 3px 5px 0px rgba(0,0,0,0.38)' }}>

              <ProductItem id={this.props.id} product={this.props.product} />


            </div>
          </div>
        </Siteframe>
      }</CartContext.Consumer>
    );
  }
};


export default ProdPage;