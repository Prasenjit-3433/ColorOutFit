import { useState } from "react";
import { useDispatch } from "react-redux";

import FormInput from "../form-input/form-input.component";
import { Button, BUTTON_TYPE_CLASSES } from "../button/button.component";
import { googleSignInStart, emailSignInStart } from '../../store/user/user.action';

import { SignUpContainer, ButtonsContainer } from './sign-in-form.styles';

const defaultFormFields = {
    email: '',
    password: ''
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    const dispatch = useDispatch();

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = () => {
        dispatch(googleSignInStart());
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        dispatch(emailSignInStart(email, password));
        resetFormFields();
    }

    const handleChange = (event) => {
        // destructure the name, value of that field from event.target
        const { name, value } = event.target;
        
        // Since we're only going to be updating one input at a time, 
        setFormFields({ ...formFields, [name]: value });
    }

    return (
        <SignUpContainer>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Email' type='email' required onChange={handleChange} name='email' value={email} />

                <FormInput label='Password' type='password' required onChange={handleChange} minLength='6' name='password' value={password} />
                
                <ButtonsContainer>
                    <Button type='submit'>Sign In</Button>
                    <Button type='button' onClick={signInWithGoogle} buttonType={BUTTON_TYPE_CLASSES.google} >Google Sign In</Button>
                </ButtonsContainer>
            </form>
        </SignUpContainer>
    );
}

export default SignInForm;