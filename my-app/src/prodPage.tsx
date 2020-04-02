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
// import {Icon} from 'pivotal-ui/react/iconography';
// import 'pivotal-ui/css/iconography';


class ProdPage extends React.Component {

    render() {
        return (
            <>
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
  </FlexCol>
  {/* <FlexCol fixed>
    <div style={{fontSize: '48px'}}>
  <Icon src="react"/>
</div>
  </FlexCol> */}
 </Grid>
 ]},
    sidebarProps: {
      className: 'bg-decorative-yellow paxl', 
            // primaryLinks: [ {cols:[<Grid className="grid-show"><FlexCol {...{alignment:'top'}}><div style={{backgroundColor:'black', height:'4rem', margin:'auto'}}><img src='https://i.imgur.com/ANCnCV1.png'/></div></FlexCol></Grid>]}, {text: 'Product1'}, {text: 'Product2'}, {text: 'Product3'}, {text: 'Product4'}, {text: 'Product5'},{text: 'Product6'},{text: 'All products'}],
      primaryLinks: [{text:[ <img style={{width:'100%'}} src='https://i.imgur.com/ANCnCV1.png'/>]}, {text: 'Product1'}, {text: 'Product2'}, {text: 'Product3'}, {text: 'Product4'}, {text: 'Product5'},{text: 'Product6'},{text: 'All products'}],
      secondaryLinks: [{ text: 'Checkout' }, { text: 'Contact' }],
                    renderLink: ({ text }: any) => <a className="underline-hover" style={{ color: 'unset' }} href="#">{text}</a>
    
    //   cols:[<Grid
    // className="grid-show"
    // {...{style: { height:'window.innerHeight' }}}
    // flexDirection="row"
    // justifyContent="space-between">
    // <FlexCol><img src='https://i.imgur.com/NMTsDht.png'/>]</FlexCol>
    //   </Grid>
    //   ]
    }
  }}>
  <div className="bg-light-green" style={{ height: '100%', width: 'auto', overflowX:'hidden'}}>
    <Panel {...{
      className: 'bg-light-green display-flex',
      style: { backgroundImage: 'url("https://i.imgur.com/MGlC0Hj.png")', minWidth: 'fit-content', width: 'auto', height: '20%', overflow: 'auto', padding: '0' }
    }}>      
    </Panel>

  <div className='bg-white border-rounded' style={{width: '70rem', height: '50rem', margin:'auto', marginTop:'4rem', boxShadow: '0px 3px 5px 0px rgba(0,0,0,0.38)'}}>
    <Grid className="grid-show mbxl" justifyContent='space-evenly'>
      <FlexCol {...{style: {maxWidth: '30rem', height: '37rem'}, contentAlignment: 'middle', breakpoint: 'sm', col: '16'}}>
        
        <div style={{width: '100%', backgroundColor: 'black', height: '80%'}}>
         <img src="https://images.unsplash.com/photo-1520591799316-6b30425429aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80" style={{maxHeight: '45rem', maxWidth:'100%', objectFit: 'cover'}} alt=""/>
        </div>
        
      </FlexCol>

      <FlexCol {...{style: {maxWidth: '30rem', height: '35rem', marginTop:'4rem'}, breakpoint: 'sm', col: '6'}}>
        <div style={{width: '100%'}}>
          <span className="pll display-flex em-high h1">Title text</span>
          <span className="pll display-flex h3">Text text.</span>
            <br/>
            <br/>
          <span className="pll display-flex h2">799kr</span>
            <br/>
            <br/>
          <span className="pll display-flex">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam debitis nesciunt, aliquam error unde veritatis vel cumque sunt perferendis illo repudiandae, dolorem, modi dolor non! Officiis asperiores natus autem quaerat!.</span>
          
        </div>
      </FlexCol>

    {/* <FlexCol {...{style: {maxWidth: '30rem', height: '35rem'},breakpoint: 'sm', col: '8',contentAlignment: 'middle', className: 'bg-light-green' }}>
      <div style={{width: '100%', backgroundColor: 'black', height: '80%', overflow: 'hidden'}}>
       <img src="https://images.unsplash.com/photo-1520591799316-6b30425429aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80" style={{height: 'auto', maxWidth:'100%', objectFit: 'cover'}} alt=""/>
      </div>
      <div style={{width: '100%', backgroundColor: 'white', height: '20%'}}>
        <span className="pll display-flex ">Nike air 2000x</span>
        <span className="pll display-flex ">Inomhussko, väldämpad.</span>
        <span className="pll display-flex ">799kr</span>
      </div>
    </FlexCol> */}

    {/* <FlexCol {...{style: {maxWidth: '30rem', height: '35rem'},breakpoint: 'sm', col: '8',contentAlignment: 'middle', className: 'bg-light-green'}}>
      <div style={{width: '100%', backgroundColor: 'black', height: '80%'}}>
        {/*Prod bild*/}
      {/* </div>
      <div style={{width: '100%', backgroundColor: 'white', height: '20%'}}>
        <span className="pll display-flex ">Nike air 2000x</span>
        <span className="pll display-flex ">Inomhussko, väldämpad.</span>
        <span className="pll display-flex ">799kr</span>
      </div>
    </FlexCol>
  </Grid> */} 

  {/* <Grid className="grid-show mbxl bg-light-green" justifyContent='space-evenly'> */}
  {/* <FlexCol {...{style: {maxWidth: '30rem', height: '35rem'}, className: 'bg-light-green', contentAlignment: 'middle', breakpoint: 'md', col: '8'}}>
  <div style={{width: '100%', backgroundColor: 'black', height: '80%'}}>
        {/*Prod bild*/}
      {/* </div>
      <div style={{width: '100%', backgroundColor: 'white', height: '20%'}}>
        <span className="pll display-flex ">Nike air 2000x</span>
        <span className="pll display-flex ">Inomhussko, väldämpad.</span>
        <span className="pll display-flex ">799kr</span>
      </div>
  </FlexCol> */} 

    {/* <FlexCol {...{style: {maxWidth: '30rem', height: '35rem'},breakpoint: 'md', col: '8',contentAlignment: 'middle', className: 'bg-light-green' }}>
    <div style={{width: '100%', backgroundColor: 'black', height: '80%'}}>
        {/*Prod bild*/}
      {/* </div>
      <div style={{width: '100%', backgroundColor: 'white', height: '20%'}}>
        <span className="pll display-flex ">Nike air 2000x</span>
        <span className="pll display-flex ">Inomhussko, väldämpad.</span>
        <span className="pll display-flex ">799kr</span>
      </div>
    </FlexCol> */} 

    {/* <FlexCol {...{style: {maxWidth: '30rem', height: '35rem'},breakpoint: 'md', col: '8',contentAlignment: 'middle', className: 'bg-light-green'}}>
    <div style={{width: '100%', backgroundColor: 'black', height: '80%'}}>
        {/*Prod bild*/}
      {/* </div>
      <div style={{width: '100%', backgroundColor: 'white', height: '20%'}}>
        <span className="pll display-flex ">Nike air 2000x</span>
        <span className="pll display-flex ">Inomhussko, väldämpad.</span>
        <span className="pll display-flex ">799kr</span>
      </div>
    </FlexCol> */} 
    </Grid>
    </div>
  </div>
</Siteframe>
            </>
        );
    }
};

export default ProdPage;