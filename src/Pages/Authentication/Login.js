import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import UseToken from '../Components/CustomsHooks/UseToken';
import SocialLogin from './SocialLogin';


const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [token] = UseToken(user)



    const emailRef = useRef();
    const passworRef = useRef();
    const navigate = useNavigate()
    const handleLogin = e => {

        const email = emailRef.current.value;
        const password = passworRef.current.value;
        signInWithEmailAndPassword(email, password);


    }
    let errorElement ;
    if (error) {
        errorElement=
         <div class="alert alert-error shadow-lg">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{error.message}</span>
            </div>
        </div>
    }
    let loadingElement;
    if(loading){
        loadingElement =
        <button class="btn btn-square loading"></button>
    }
     
    if(user){
        navigate ('/home');
    }

    return (
        <div className ='flex justify-center items-center h-screen'>
            <div class ="card w-96 bg-base-100 shadow-xl">
                <div class="card-body items-center">
                    <h2 class=" text-center font-bold text-4xl"> Login  </h2>
                    <div className='mt-10'>
                        <form onSubmit={handleLogin}>
                            <input ref={emailRef} className='border-2 w-full rounded-md h-12 mt-5' placeholder='email' type="email" name="email" id="1" required />
                            <input ref={passworRef} className='border-2 w-full rounded-md h-12 mt-5' placeholder='password' type="password" name="password" id="2" required />
                            <button className='mt-5 text-primary font-semibold text-md'> Forgot Password? </button>
                            <input type="submit" className='btn btn-primary text-white w-full max-w-full text-white-100 font-medium mt-9 border-2' value="Login" />
                            <p> {errorElement} </p>
                            <p> {loadingElement} </p>
                            <p className='my-5 font-semibold text-md'>New in Power ToolsBD? <button className='text-primary ml-3'> <Link to="/register"> Create an Account </Link> </button> </p>
                        </form>
                        <div class="flex flex-col w-full border-opacity-50">
                            <div class="divider">OR</div>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;