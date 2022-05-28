import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../CustomsHooks/useAdmin';

const Dashboard = () => {
    const [user,loading] = useAuthState(auth);
    const userName = user?.displayName;
    const userEmail = user?.email;
    const [admin] = useAdmin(user);

    if(loading){
        return <button class="btn btn-square loading"></button>
    }

    return (
        <div class="drawer drawer-mobile px-12 mt-10">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col text-center text-2xl font-semibold">
                <Outlet></Outlet>
              

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-slate-200">
                    <div class="avatar">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://api.lorem.space/image/face?hash=3174" />
                        </div>
                    </div>
                    <li className='text-center text-xl font-bold uppercase'> <h3>{userName}</h3> </li>
                    <li className='text-lg font-medium text-primary'> <h3> {userEmail} </h3></li>
                    <li><Link to="/dashboard"> My Order </Link> </li>
                    <li><Link to="review"> My review </Link> </li>
                       {
                           admin && <>
                               <li> <Link to="users"> All users </Link>  </li>
                               <li> <Link to="addnewtools"> Add new Tools </Link>  </li>
                           </>
                       }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;