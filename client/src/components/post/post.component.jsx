import React, { useState } from 'react';

import { auth, signInWithGoogle, createUserProfileDocument, signInwithFacebook } from '../../firebase/firebase.util';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

const Post= ({onCancel}) => {
    const [signUpInfo, setSignUpInfo] = useState({
        email:'',
        password:'',
        confirmPassword:'',
        displayName:'',
    });

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
        setSignUpInfo({...signUpInfo, [name]: value });
      };
    return (
        <div id="myModal" className="modal-form">
            <div className="modal-content">
                <span className="close mb-5" onClick={onCancel}>&times;</span>
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
                </form>
            </div>
        </div>
    );
};

export default Post;