import React from 'react';
import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { FirebaseContext } from '.';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB4DQfTqNMJrnRQv4h4hrAfM7PWNmjFVWo",
    authDomain: "designsystem-app.firebaseapp.com",
    databaseURL: "https://designsystem-app.firebaseio.com",
    projectId: "designsystem-app",
    storageBucket: "designsystem-app.appspot.com",
    messagingSenderId: "584912358716",
    appId: "1:584912358716:web:f28876b182d1cd29e7a239",
    measurementId: "G-4ELWFERPBF"
};

export interface FirebaseState {
    db: app.database.Database;
    auth: app.auth.Auth;
    orderId: string;
    order: { [key: string]: { [key: string]: number } };
}

app.initializeApp(firebaseConfig);

class Firebase extends React.Component<{}, FirebaseState> {
    constructor(props?: any) {
        super(props);

        this.state = {
            db: app.database(),
            auth: app.auth(),
            orderId: '',
            order: {
                '2': {
                    quantity: 2,
                    price: 199
                },
                '4': {
                    quantity: 1,
                    price: 399
                }
            }
        }

        app.auth().onAuthStateChanged(function (user) {
            if (user) {
                console.log('signed in', user.uid)
            } else {
                console.log('no user')
            }
        });
        this.setState = this.setState.bind(this)
        this.getOrderId = this.getOrderId.bind(this)
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.log(error, errorInfo)
    }

    /** 
     * Sign in user anonymously on Firebase.
     * User is assigned a randomized ID without needing credentials (email, password)
     */
    doSignInAnonymously = () => {
        let newOrderId = this.getOrderId();
        this.state.auth.signInAnonymously()
            .then(authUser => this.saveOrderData(authUser, JSON.stringify(newOrderId)) )
            .catch(error => this.errorMessage(error) );
    }

    errorMessage = (error: firebase.auth.Error) => {
        return <p>Sign in failed. Error code: {JSON.stringify(error.code)}. Error message: {JSON.stringify(error.message)}.</p>
    }

    /**
     * Save order to database.
     * @param authUser authorized user.
     * @param newOrderId random order id.
     */
    saveOrderData(authUser: app.auth.UserCredential, newOrderId: string) {
        // if user has signed in (anonymously)
        if (authUser.user !== null) {
            // iterate through each product in order
            Object.keys(this.state.order).forEach(productID => {
                // create database ref for each product in order
                const firebaseRef = this.state.db.ref(`/test/${authUser.user?.uid}/${newOrderId}/${productID}`);
                // loop through key-value pairs in each product in order
                Object.entries(this.state.order[productID]).forEach(orderValue => {
                    // update (add) each key-value pair to product
                    firebaseRef.update({
                        [orderValue[0]]: orderValue[1]
                    })
                })
            })
        }
    }

    /**
     * Generates random integer between 10000-99999.
     * @returns {string} random integer as string.
     */
    getOrderId(): string {
        return JSON.stringify(Math.floor(Math.random() * 89998) + 10000);
    }

    getUserData() {
        // this.db.ref('/' + this.firebaseAuth.currentUser)
        // this.state.db.ref('/' + this.generateOrderId()).set('hej')
    }

    componentDidMount() {
        this.state.auth.onAuthStateChanged(authUser => {
            console.log('hell');

            if (authUser) {
                console.log(authUser.isAnonymous);
                console.log(authUser.uid);
                console.log(authUser);
            } else {
                //signed out
            }
            // authUser
            //     ? this.setState({ authUser })
            //     : this.setState({ authUser: null });
        });
    }
}

export { FirebaseContext };
export default Firebase;