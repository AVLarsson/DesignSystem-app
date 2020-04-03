import * as React from 'react';
import 'pivotal-ui/css/selection';

interface Props {
    status: any
}



export default class Receipt extends React.Component <Props, {onAdd?:any}>  {

    componentDidMount = () => {
        console.log(this.props.status.shippingPrice)
    }

    reloadWebsite() {
        window.location.reload()
    }

    render() {
        return (
            <div id="receipt" style={this.receiptStyle}>
                <h2>Receipt</h2>
                <p>-----------------------------------------</p>
                <h3>The products costs {""} ENTER PRICE</h3>
                <h3>The shipping costs {""} {this.props.status.shippingPrice}kr</h3>
                <h3>The shipping will take {""} {this.props.status.shippingTime} {""} working days</h3>
                <h3>Total price is TOTAL PRICE</h3>
                <button onClick={this.reloadWebsite}>Ok</button>
            </div>
        )
    }

    receiptStyle: React.CSSProperties = {
        position: "fixed", 
        backgroundColor:"lightgray", 
        marginLeft: "40%",
        width:"400px",
        bottom:"10vh",
        top:"10vh",
    
        display: "flex",
        alignItems: "center",
        flexDirection:"column",
        border: "2px solid black",
        borderRadius:"16px",
        justifyContent:"space-around"
      }

}