import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyProfile = () => {
    const [user,loading] = useAuthState(auth);

    if(loading){
        return <button class="btn btn-square loading"></button>
    }
    return (
        <div> 
            <h1> Welcome to your profile </h1>
            <h1 className='text-primary text-4xl font-semibold mt-12'> {user?.displayName} </h1>

        </div>
    );
};

export default MyProfile;