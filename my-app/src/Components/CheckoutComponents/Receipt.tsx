import * as React from 'react';
import 'pivotal-ui/css/selection';
import { BrandButton } from 'pivotal-ui/react/buttons';
import { useHistory } from 'react-router-dom';

interface Props {
    status: any;
    deliveryDate: () => string
}

const Receipt = (props: Props) => {
    const history = useHistory();
    // function reloadWebsite() {
    //     window.location.reload()
    // }

    const receiptStyle: React.CSSProperties = {
        position: "fixed",
        backgroundColor: "lightgray",
        marginLeft: "40%",
        width: "400px",
        bottom: "10vh",
        top: "10vh",

        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        border: "2px solid black",
        borderRadius: "16px",
        justifyContent: "space-around"
    }

    return (
        <div id="receipt" style={receiptStyle}>
            <h2>Receipt</h2>
            <p>-----------------------------------------</p>
            <h3>{`The products costs ${props.status.price}`}kr</h3>
            <h3>{`The shipping costs ${props.status.shippingPrice}kr`}</h3>
            <h3>{`The shipping will take ${props.status.shippingTime} day(s)`}</h3>
            <h3>{`Est. delivery: ${props.deliveryDate()}`}</h3>
            <h3>{`Total price is ${props.status.totalPrice} kr`}</h3>
            <BrandButton onClick={() => history.push("/")}>Ok, take me to the start page!</BrandButton>
        </div>
    )
}

export default Receipt;