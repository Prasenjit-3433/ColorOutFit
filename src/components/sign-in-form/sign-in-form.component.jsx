import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { createUserDocumentFromAuth, signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';

import './sign-in-form.styles.scss';

const defaultFormFields = {
    email: '',
    password: ''
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
      };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Authenticate user
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(response);
            resetFormFields();
        } catch (error) {
            switch(error.code) {
                case 'auth/wrong-password':
                    alert('Incorrect Password for email');
                    break;
                case 'auth/user-not-found': 
                    alert('No user exists with this email');
                    break;
                default: 
                    console.log(error)
            }
        }
    }

    const handleChange = (event) => {
        // destructure the name, value of that field from event.target
        const { name, value } = event.target;
        
        // Since we're only going to be updating one input at a time, 
        setFormFields({ ...formFields, [name]: value });
    }

    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Email' type='email' required onChange={handleChange} name='email' value={email} />

                <FormInput label='Password' type='password' required onChange={handleChange} minLength='6' name='password' value={password} />
                
                <div className="buttons-container">
                    <Button type='submit'>Sign In</Button>
                    <Button type='button' onClick={signInWithGoogle} buttonType='google' >Google Sign In</Button>
                </div>
            </form>
        </div>
    );
}

export default SignInForm;