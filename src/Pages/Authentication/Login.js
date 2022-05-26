import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from './SocialLogin';


const Login = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body items-center">
                    <h2 class=" text-center font-bold text-4xl"> Login  </h2>
                    <div className='mt-10'>
                        <form>
                            <input className='border-2 w-full rounded-md h-12 mt-5' type="email" name="email" id="1" />
                            <input className='border-2 w-full rounded-md h-12 mt-5' type="password" name="password" id="2" />
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