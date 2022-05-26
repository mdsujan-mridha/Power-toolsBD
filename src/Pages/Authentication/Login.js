import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin';


const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const emailRef = useRef();
    const passworRef = useRef();

    const handleLogin = e => {

        const email = emailRef.current.value;
        const password = passworRef.current.value;
        signInWithEmailAndPassword(email,password);


    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body items-center">
                    <h2 class=" text-center font-bold text-4xl"> Login  </h2>
                    <div className='mt-10'>
                        <form onSubmit={handleLogin}>
                            <input ref={emailRef} className='border-2 w-full rounded-md h-12 mt-5' placeholder='email' type="email" name="email" id="1" required />
                            <input ref={passworRef} className='border-2 w-full rounded-md h-12 mt-5' placeholder='password' type="password" name="password" id="2" required />
                            <button className='mt-5 text-primary font-semibold text-md'> Forgot Password? </button>
                            <input type="submit" className='btn btn-primary text-white w-full max-w-full text-white-100 font-medium mt-9 border-2' value="Login" />
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