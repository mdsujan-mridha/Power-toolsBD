import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from './SocialLogin';

const Register = () => {
    

    return (
        <div className='flex justify-center items-center h-screen'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center text-4xl my-5 font-bold "> Signup </h2>
                    <div>
                        <form>

                            <input className='border-2 w-full rounded-md h-12 mt-5' placeholder='Name' type="text" name="name" id="1" />
                            <input className='border-2 w-full rounded-md h-12 mt-5' placeholder='E-mail' type="email" name="email" id="2" />
                            <input className='border-2 w-full rounded-md h-12 mt-5' placeholder='password' type="password" name="password" id="3" />
                            <input className='btn btn-primary text-white w-full max-w-full text-white-100 font-medium mt-9 border-2' type="submit" value="Signup" />
                            <p className='my-5 text-lg font-semibold'>Already have an account? <Link className='text-primary' to="/login">Login </Link>  </p>
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

export default Register;