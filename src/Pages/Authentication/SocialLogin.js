import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import UseToken from '../Components/CustomsHooks/UseToken';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const location =useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/'

    const [token] = UseToken(user);
    useEffect( () =>{
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])

    let loadingElement;
    if(loading){
        loadingElement =
        <button class="btn btn-square loading"></button>
    }

    let erroeElement;
    if(error){
        erroeElement=
        <button class="btn loading"> {error?.message} </button>
    }

     
    return (
        <div>
             <p> {erroeElement} </p>
             <p> {loadingElement} </p>
            <button className='btn btn-outline btn-accets border-2 w-full' onClick={()=> signInWithGoogle()}> Login With Google </button>
        </div>
    );
};

export default SocialLogin;