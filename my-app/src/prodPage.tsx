import * as React from 'react';

import {Grid, FlexCol} from 'pivotal-ui/react/flex-grids';
import {Siteframe} from 'pivotal-ui/react/siteframe';
import 'pivotal-ui/css/siteframe';
import {Panel} from 'pivotal-ui/react/panels';
import 'pivotal-ui/css/panels';
import 'pivotal-ui/css/colors';
import {Image} from 'pivotal-ui/react/images';
import 'pivotal-ui/css/images';


class ProdPage extends React.Component {

    render() {
        console.log('hejehj');
        return (
            <>
                <div style={{position: 'relative', height: window.outerHeight, backgroundColor:'light-green'}}>
            
  <Siteframe {...{
    headerProps: {cols: [
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
 ]},
    sidebarProps: {
     className: 'bg-decorative-yellow',
      primaryLinks: [{text: 'Product1'}, {text: 'Product2'}, {text: 'Product3'}, {text: 'Product4'}, {text: 'Product5'},{text: 'Product6'},{text: 'All products'}],
      secondaryLinks: [{text: 'Check out'}, {text: 'Contact us'}],
      renderLink: ({text} : {text:any}) => <a href="#">{text}</a>
    }
  }}>
    <div className="bg-light-gray pal" style={{height: '100%', backgroundColor:'warm-5' , overflow: 'auto'}}>
       <header>hello</header>
      <Panel style= {{backgroundColor: 'black'}}{...{title: 'Produkter', className:'light-green', }}> 
     <h3>Produktrad 1</h3>
      </Panel>
        <Panel {...{}}>
     <h3>Produktrad 2</h3>
      </Panel>
    </div>
  </Siteframe>
</div>
            </>
        );
    }
};

export default ProdPage;