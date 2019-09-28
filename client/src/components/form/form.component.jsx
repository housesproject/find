import React, { useEffect, useState } from 'react';

<<<<<<< HEAD
import SignIn from '../sign-in/sign-in.component';
=======
import SignInSignUp from '../sign-in/signIn-signUp.component';
>>>>>>> master

import './form.styles.scss';

const Form = (props) => {
<<<<<<< HEAD
    console.log(props);
=======
>>>>>>> master
    const popUpCompoent = () => {
        const { showName, onCancel } = props;
        switch(showName) {
            case 'signIn':
                    return (
<<<<<<< HEAD
                        <SignIn onCancel={onCancel}/>
                    );
             case 'signUp':
                   return (
                        <div>signUp</div>
=======
                        <SignInSignUp onCancel={onCancel} showName={showName} showComponent={true} />
                    );
             case 'signUp':
                   return (
                        <SignInSignUp onCancel={onCancel} showName={showName} showComponent={false} />
>>>>>>> master
                   );   
             case 'post':
                return (
                        <div>post</div>
            );           
            default:
                return;    
        }
    }
    return (
        <>
         { popUpCompoent() }   
        </>
)};

export default Form;