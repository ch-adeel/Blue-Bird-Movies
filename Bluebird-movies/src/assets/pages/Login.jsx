import { signInWithPopup } from 'firebase/auth';
import React from 'react'
import GoogleButton from 'react-google-button'
import { auth, googleAuthProvider } from '../firebase/firebaseConfig';
export default function Login() {
    const handleSignInWithGoogle =async () => {
        try{
            const result =await signInWithPopup(auth, googleAuthProvider);
            console.log(result);
        }
        catch(error){
        console.error(error);
    }
}
  return (
    <div>
      <GoogleButton
  onClick={handleSignInWithGoogle}
/>
    </div>
  )
}
