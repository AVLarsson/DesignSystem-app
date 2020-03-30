import * as React from 'react';

import {Grid, FlexCol} from 'pivotal-ui/react/flex-grids';
import {Siteframe} from 'pivotal-ui/react/siteframe';
import 'pivotal-ui/css/siteframe';
import {Panel} from 'pivotal-ui/react/panels';
import 'pivotal-ui/css/panels';
import 'pivotal-ui/css/colors';
import {Image} from 'pivotal-ui/react/images';
import 'pivotal-ui/css/images';
import {Row, Col} from 'pivotal-ui/react/grids';
// import 'pivotal-ui/react/iconography';

class ProdPage extends React.Component {

    render() {
        return (
            <>
                {/* <div className='bg-light-green paxl' style={{position: 'relative', height: window.outerHeight}}> */}
            
  <Siteframe {...{
    headerProps: {
      companyName:'Retro Shop',
      className: 'bg-accent-gray paxl',
      cols: [
<Grid
 className="grid-show position-fixed type-black em-alt"
 {...{style: { right: '0', height:'window.innerHeight' }}}
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
 {/* <div style={{fontSize: '48px'}}>
  <Icon src="react"/>
  <Icon src="account_circle"/>
  <Icon src="add_circle"/>
</div> */}
 </FlexCol>
 </Grid>
 ]},
    sidebarProps: {
      className: 'bg-decorative-yellow paxl',
      primaryLinks: [{text: 'Product1'}, {text: 'Product2'}, {text: 'Product3'}, {text: 'Product4'}, {text: 'Product5'},{text: 'Product6'},{text: 'All products'}],
      secondaryLinks: [{text: 'Check out'}, {text: 'Contact us'}],
      renderLink: ({text} : {text:any}) => <a href="#">{text}</a>
    }
  }}>
  <div className="bg-light-green" style={{ height: '100%', width: 'auto', overflow: 'auto' }}>
    <Panel {...{
      className: 'bg-light-green display-flex',
      style: { minWidth: 'fit-content', width: 'auto', height: '20%', marginTop: '2rem'}
    }}>
                    
    </Panel>
       <div>
  <Grid className="grid-show mbxl bg-light-green" justifyContent='space-evenly'>
    <FlexCol {...{style: {maxWidth: '30rem', minHeight: '35rem'}, className: 'bg-light-green', contentAlignment: 'middle', breakpoint: 'sm', col: '8'}}>
      <div style={{width: '100%', backgroundColor: 'black', height: '80%'}}>
        {/*Prod bild*/}
      </div>
      <div style={{width: '100%', backgroundColor: 'white', height: '20%'}}>
        <span className="pll display-flex ">Nike air 2000x</span>
        <span className="pll display-flex ">Inomhussko, väldämpad.</span>
        <span className="pll display-flex ">799kr</span>
      </div>
    </FlexCol>

    <FlexCol {...{style: {maxWidth: '30rem', minHeight: '35rem'},breakpoint: 'sm', col: '8',contentAlignment: 'middle', className: 'bg-light-green' }}>
      <div style={{width: '100%', backgroundColor: 'black', height: '80%'}}>
        {/*Prod bild*/}
      </div>
      <div style={{width: '100%', backgroundColor: 'white', height: '20%'}}>
        <span className="pll display-flex ">Nike air 2000x</span>
        <span className="pll display-flex ">Inomhussko, väldämpad.</span>
        <span className="pll display-flex ">799kr</span>
      </div>
    </FlexCol>

    <FlexCol {...{style: {maxWidth: '30rem', minHeight: '35rem'},breakpoint: 'sm', col: '8',contentAlignment: 'middle', className: 'bg-light-green'}}>
      <div style={{width: '100%', backgroundColor: 'black', height: '80%'}}>
        {/*Prod bild*/}
      </div>
      <div style={{width: '100%', backgroundColor: 'white', height: '20%'}}>
        <span className="pll display-flex ">Nike air 2000x</span>
        <span className="pll display-flex ">Inomhussko, väldämpad.</span>
        <span className="pll display-flex ">799kr</span>
      </div>
    </FlexCol>
  </Grid>

  <Grid className="grid-show mbxl bg-light-green" justifyContent='space-evenly'>
  <FlexCol {...{style: {maxWidth: '30rem', minHeight: '35rem'}, className: 'bg-light-green', contentAlignment: 'middle', breakpoint: 'md', col: '8'}}>
  <div style={{width: '100%', backgroundColor: 'black', height: '80%'}}>
        {/*Prod bild*/}
      </div>
      <div style={{width: '100%', backgroundColor: 'white', height: '20%'}}>
        <span className="pll display-flex ">Nike air 2000x</span>
        <span className="pll display-flex ">Inomhussko, väldämpad.</span>
        <span className="pll display-flex ">799kr</span>
      </div>
  </FlexCol>

    <FlexCol {...{style: {maxWidth: '30rem', minHeight: '35rem'},breakpoint: 'md', col: '8',contentAlignment: 'middle', className: 'bg-light-green' }}>
    <div style={{width: '100%', backgroundColor: 'black', height: '80%'}}>
        {/*Prod bild*/}
      </div>
      <div style={{width: '100%', backgroundColor: 'white', height: '20%'}}>
        <span className="pll display-flex ">Nike air 2000x</span>
        <span className="pll display-flex ">Inomhussko, väldämpad.</span>
        <span className="pll display-flex ">799kr</span>
      </div>
    </FlexCol>

    <FlexCol {...{style: {maxWidth: '30rem', minHeight: '35rem'},breakpoint: 'md', col: '8',contentAlignment: 'middle', className: 'bg-light-green'}}>
    <div style={{width: '100%', backgroundColor: 'black', height: '80%'}}>
        {/*Prod bild*/}
      </div>
      <div style={{width: '100%', backgroundColor: 'white', height: '20%'}}>
        <span className="pll display-flex ">Nike air 2000x</span>
        <span className="pll display-flex ">Inomhussko, väldämpad.</span>
        <span className="pll display-flex ">799kr</span>
      </div>
    </FlexCol>
  </Grid>
</div>
  
    </div>
  </Siteframe>
            </>
        );
    }
};

export default ProdPage;