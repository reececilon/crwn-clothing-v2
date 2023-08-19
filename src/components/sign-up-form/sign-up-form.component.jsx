import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import './sign-up-form.styles.scss';

const defualtFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defualtFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    console.log(formFields);

    const resetFormFields = () => {
        setFormFields(defualtFormFields);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({...formFields, [name]: value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                email, 
                password
                );

                await createUserDocumentFromAuth(user, { displayName });
                resetFormFields();

        } catch(error) {
            if(error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email, already in use');
            } else {
                console.log('user creation encountered and error, ', error)
            }
        }
    }

    return (
        <div class='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={(event)=>{handleSubmit(event)}}>
                <FormInput label='Display name' type='text' onChange={handleChange} name="displayName" value={displayName} required/>
                <FormInput label='Email' type='email' onChange={handleChange} name="email" value={email} required/>
                <FormInput label='Password' type='password' onChange={handleChange} name="password" value={password} required/>
                <FormInput label='Confirm password' type='password' onChange={handleChange} name="confirmPassword" value={confirmPassword} required/>
                <Button type='submit'>Sign up</Button>
            </form>
        </div>
    )
}

export default SignUpForm;