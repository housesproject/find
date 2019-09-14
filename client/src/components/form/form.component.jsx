import React, { useEffect, useState } from 'react';

import SignIn from '../sign-in/sign-in.component';

import './form.styles.scss';

const Form = (props) => {
    console.log(props);
    const popUpCompoent = () => {
        const { showName, onCancel } = props;
        switch(showName) {
            case 'signIn':
                    return (
                        <SignIn onCancel={onCancel}/>
                    );
             case 'signUp':
                   return (
                        <div>signUp</div>
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