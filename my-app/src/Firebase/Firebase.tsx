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

    doSignInAnonymously = () => {
        let newOrderId = this.getOrderId();
        this.state.auth.signInAnonymously()
            .then(authUser => { this.saveOrderData(authUser, JSON.stringify(newOrderId)) })
            .catch(error => {
                console.log(error.code, error.message)
            });
    }

    saveOrderData(authUser: app.auth.UserCredential, newOrderId: string) {

        // Object.keys(this.state.order).flatMap((item, index) => {
        //     Object.keys(item[index]).map((c, i) => {
        //         console.log('c', c, 'i', i)
        //         let ee = Object.keys(c)
        //         console.log(ee, ee[i])
        //     })
        // })

        // this.state.db.ref(`/test/${authUser.user?.uid}/${newOrderId}`).
        if (authUser.user !== null) {
            for (const order in this.state.order) {
                const keyName = this.state.order[order];
                this.state.db.ref(`/test/${authUser.user?.uid}/${newOrderId}`).set(order);
                    // Object.keys(keyName).map((key, i) =>
                        // this.state.db.ref(`/test/${authUser.user?.uid}/${newOrderId}`).update({ key: { i: keyName[key] }})
    
                    
                
            }
        }
    }
    // console.log(key, this.state.order[order][key]);

    writeUserData() {
        this.state.db.ref('/id').set('hi');
        console.log('data saved')
    }

    /**
     * Generates random integer between 10000-99999.
     * @returns {string} random integer.
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