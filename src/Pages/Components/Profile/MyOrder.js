import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const MyOrder = () => {
    const [orders, setOrders] = useState([])
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/bookings?customer=${user.email}`,{
                method:'GET',
                headers:{
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
            })
                .then(res => {
                    console.log('res',res);
                    if(res.status === 401 || res.status === 403){
                          
                          navigate('/home');
                    }
                   return res.json()
                })
                .then(data => {

                    setOrders(data)
                })
            console.log(orders);
        }
    }, [user]);

    if (loading) {
        return <button class="btn btn-square loading"></button>
    }
    return (
        <div>
            <h1> My order {orders.length} </h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th> Product </th>
                            <th> Quantity </th>
                            <th > Procced </th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order,index) =>
                                <tr>

                                     <td>{index + 1}</td>
                                    <td> {order.name} </td>
                                    <td> {order.quantity} </td>
                                    <td>
                                        <button class="btn btn-circle btn-outline">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                        </button>
                                    </td>

                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>



        </div>
    );
};

export default MyOrder;