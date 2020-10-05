import React,  {useContext}  from 'react';
import'../LoginGoogle/LoginGoogle.css'
import google from '../../logos/google.png'

import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const LoginGoogle = () => {

    
        const [logedInUser , setLogedInUser] = useContext(UserContext);
        const history = useHistory();
      const location = useLocation();
      const { from } = location.state || { from: { pathname: "/" } };
        if (firebase.apps.length === 0) {
            firebase.initializeApp(firebaseConfig);
        }

    const handelgooglesingin =()=>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName,email} = result.user;
            const sindenUser = {name : displayName , email}
            setLogedInUser(sindenUser);
            history.replace(from);
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }
    return (
        <div>
            <div>
                <h1>Login With Google</h1>
            </div>
            <div className="google">
            <button onClick={handelgooglesingin}><img src={google} alt=""/>Login With Google</button>
            </div>
        </div>
    );
};


export default LoginGoogle;