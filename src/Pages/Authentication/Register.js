import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import UseToken from '../Components/CustomsHooks/UseToken';
import SocialLogin from './SocialLogin';

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification: true});

// update profile 
const [updateProfile, updating, error2] = useUpdateProfile(auth);
const navigate = useNavigate()
const [token] = UseToken(user);

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    if (token) {
        navigate('/products');
    }
    const handleSignUp = async e => {
        e.preventDefault()
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const passsword = passwordRef.current.value;
       await createUserWithEmailAndPassword(email, passsword)
       await updateProfile({displayName:name});


    }
   let loadingElement;
   if(loading){
       loadingElement=
       <button className="btn btn-square loading"></button>
   }
   let errorElement;
   if(error){
    errorElement=
    <button className="btn loading"> {error?.message} </button>
   }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-4xl my-5 font-bold "> Signup </h2>
                    <div>
                        <form onSubmit={handleSignUp}>

                            <input ref={nameRef} className='border-2 w-full rounded-md h-12 mt-5' placeholder='Name' type="text" name="name" id="1" required />
                            <input ref={emailRef} className='border-2 w-full rounded-md h-12 mt-5' placeholder='E-mail' type="email" name="email" id="2" required />
                            <input ref={passwordRef} className='border-2 w-full rounded-md h-12 mt-5' placeholder='password' type="password" name="password" id="3" required />
                            <p> {errorElement} </p>
                            <p> {loadingElement} </p>
                            <input className='btn btn-primary text-white w-full max-w-full text-white-100 font-medium mt-9 border-2' type="submit" value="Signup" />
                            <p className='my-5 text-lg font-semibold'>Already have an account? <Link className='text-primary' to="/login">Login </Link>  </p>
                        </form>
                        <div className="flex flex-col w-full border-opacity-50">
                            <div className="divider">OR</div>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;