import React, { useState } from 'react';

import { auth, signInWithGoogle } from '../../firebase/firebase.util';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

const SignIn = ({onCancel}) => {
    const [emailAndPassword, setEmailAndPassword] = useState({
        email:'',
        password:''
    });
    const handleSubmit = async event => {
        event.preventDefault();
        try {
          await auth.signInWithEmailAndPassword(emailAndPassword.email, emailAndPassword.password);
          setEmailAndPassword({
              email:'',
              password:''
            }
            );
        } catch (error) {
          console.log(error);
        }
      };
    
      const handleChange = event => {
        const { value, name } = event.target;
        console.log(event.target);
        setEmailAndPassword({ [name]: value });
      };
    return (
        <div id="myModal" className="modal-form">
            <div className="modal-content">
                <span className="close mb-5" onClick={onCancel}>&times;</span>
                <button className='sign-in-sns btn btn-secondary' onClick={signInWithGoogle}><i className="fa fa-google" />Sign in with Google</button>
                <p className='text-center mt-5 mb-5 line-border'>Or</p>
                <form onSubmit={handleSubmit}>
                    <div className='mb-5'>
                        <FormInput
                            name='email'
                            type='email'
                            handleChange={handleChange}
                            value={emailAndPassword.email}
                            placeHolder='xxxxx@gmail.com'
                            required 
                        />
                        <FormInput
                            name='password'
                            type='password'
                            value={emailAndPassword.password}
                            handleChange={handleChange}
                            placeHolder='password...'
                            required
                        />   
                    </div>    
                    <CustomButton type="submit">Login</CustomButton> 
                    <p className='text-center mt-3'>Forgot password?</p>
                </form>
            </div>
        </div>
    );
};

export default SignIn;