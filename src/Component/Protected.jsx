import React from 'react';
import { withRouter } from 'react-router-dom';
import { authService } from './Auth/AuthGuard';

const reset = (history) =>{
    history.push('/');
}

const signOut = (history) =>{
    authService.signOut(reset.bind(null,history))
}
const WelcomeDiv =(history)=>(<div>Welcome User <button onClick={signOut.bind(null,history)}>Sign Out</button></div>)


const Protected = ({history}) => {
    console.log(WelcomeDiv);
    console.log('in log of protected');
    
    return (
        authService.isAuthenticated? WelcomeDiv(history):<div/>
    );
};

export default withRouter(Protected);