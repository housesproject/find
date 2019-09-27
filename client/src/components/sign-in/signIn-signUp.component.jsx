import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { auth, signInWithGoogle, createUserProfileDocument } from '../../firebase/firebase.util';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './signIn-signUp.styles.scss';

const SignIn = ({onCancel, showComponent}) => {
    const [show, setShow] = useState(showComponent);
    const [emailAndPassword, setEmailAndPassword] = useState({
        email:'',
        password:''
    });
    const [signUpInfo, setSignUpInfo] = useState({
        email:'',
        password:'',
        confirmPassword:'',
        displayName:'',
    });
    const signInHandleSubmit = async event => {
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

      const signUpHandleSubmit = async event => {
        event.preventDefault();

        const {email, password, confirmPassword, displayName} = signUpInfo;


        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
          }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(
                email,
                password
          )
          await createUserProfileDocument(user, {displayName});
          setSignUpInfo({
                email:'',
                password:'',
                confirmPassword:'',
                displayName:'',
          })  ;
        } catch (error) {
          console.log(error);
        }
      };
    
      const handleChange = event => {
        const { value, name } = event.target;
        setEmailAndPassword({...emailAndPassword, [name]: value });
        setSignUpInfo({...signUpInfo, [name]: value });
      };
      const comp = () => {
          if(show) {
            return (
                <>
                <button className='sign-in-sns btn btn-secondary' onClick={signInWithGoogle}><i className="fa fa-google" />Sign in with Google</button>
                <p className='text-center mt-5 mb-5 line-border'>Or</p>
                <form onSubmit={signInHandleSubmit}>
                    <div className='mb-5'>
                        <FormInput
                            name='email'
                            type='email'
                            value={emailAndPassword.email}
                            handleChange={handleChange}
                            placeholder='xxxxx@gmail.com'
                            required 
                        />
                        <FormInput
                            name='password'
                            type='password'
                            value={emailAndPassword.password}
                            handleChange={handleChange}
                            placeholder='password...'
                            required
                        />   
                    </div>    
                    <CustomButton type="submit">Login</CustomButton> 
                    <p className='text-center'><button className='text-green border-0 mt-3 mb-3' onClick={() => setShow(true)}>Forgot password?</button></p>
                    <hr/>
                    <p className='text-center'>Don't have an account? <button className='text-green border-0' onClick={() => setShow(false)}>Sign Up</button></p>
                </form>
                </>
            )
          } else {
              return (
                <>
                <form onSubmit={signUpHandleSubmit}>
                    <div className='mb-5'>
                        <FormInput
                            name='email'
                            type='email'
                            handleChange={handleChange}
                            value={signUpInfo.email}
                            placeholder='xxxxx@gmail.com'
                            required 
                        />
                        <FormInput
                            name='displayName'
                            type='text'
                            handleChange={handleChange}
                            value={signUpInfo.displayName}
                            placeholder='Full Name'
                            required 
                        />
                        <FormInput
                            name='password'
                            type='password'
                            value={signUpInfo.password}
                            handleChange={handleChange}
                            placeholder='password...'
                            required
                        />   
                        <FormInput
                            name='confirmPassword'
                            type='password'
                            value={signUpInfo.confirmPassword}
                            handleChange={handleChange}
                            placeholder='confirm password...'
                            required
                        />   
                    </div>    
                    <CustomButton type="submit">Sign up</CustomButton> 
                    <hr className='mt-4 mb-4'/>
                    <p className='text-center'>Alredy have a Find account? <button className='text-green border-0' onClick={() => setShow(true)}>Sign in</button></p>
                </form>
                </>
              )
          }
      }
    return (
        <div id="myModal" className="modal-form">
            <div className="modal-content">
                <span className="close mb-5" onClick={onCancel}>&times;</span>
                {comp()}
            </div>
        </div>
    );
};

export default SignIn;