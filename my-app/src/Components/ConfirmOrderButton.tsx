import { FirebaseContext } from '../Firebase';
import React, { ReactInstance } from 'react';
import { PrimaryButton } from 'pivotal-ui/react/buttons'

export const ConfirmOrderButton: React.FunctionComponent = () => {
    const handleClick = (firebase: ReactInstance) => {
        /* 
        UNCOMMENT THE LINE BELOW TO SAVE TO DATABASE
    
        firebase.doSignInAnonymously();
        
        */
        console.log('clicked', firebase);
    }

    return <FirebaseContext.Consumer>
        {firebase => 
            <>
                <p className="type-sm">Continue as guest and</p>
                <PrimaryButton className="auth" id="anon" onClick={() => { handleClick(firebase) }}>
                    Confirm order
                </PrimaryButton>
            </>
        }</FirebaseContext.Consumer>
}