import { Button } from '@mui/material';
import React from 'react';
import { auth , provider } from './firebase';
import "./Login.css";
import { useStateValue } from './StateProvider';
import { actionTypes } from './Reducer';

const Login = () => {

    const[state , dispatch] = useStateValue();

    const signIn = (e) =>{
        auth.signInWithPopup(provider)
        .then((result) => {
            console.log(result);
             dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
             })
        })
        .catch((error) => {
            alert(error.message);
        });
    };


  return (
    <div className='login'>
        <div className="login__container">
            <img src="data:image/png;base64,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" alt="Logo" />
            <h1>Sign in to clever Programmer HQ</h1>
            <p>rakshitagarwal@gamil.com</p>
            <Button onClick={signIn}>Sign in with Google</Button>
        </div>
    </div>
  )
}

export default Login;