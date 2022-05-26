import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
     
    return (
        <div>
            <button className='btn btn-outline btn-accets border-2 w-full' onClick={()=> signInWithGoogle()}> Login With Google </button>
        </div>
    );
};

export default SocialLogin;