import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

const SignIn = () => {
    const logGoogleUser = async () => {
        // console.log("!!!!!! Inside the SignIn component !!!!!!");
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <h1>This is the sign-in page</h1>
            <button onClick={logGoogleUser}>SignIn with google popup</button>
        </div>
    )
};

export default SignIn;