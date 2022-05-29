
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {  useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import OrderRow from './OrderRow';

const MyOrder = () => {
    const [orders, setOrders] = useState([])
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    
    useEffect(() => {
        if (user) {
            fetch(`https://guarded-bayou-50166.herokuapp.com/bookings?customer=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {

                        navigate('/home');
                    }
                    return res.json()
                })
                .then(data => {

                    setOrders(data)
                })
            // console.log(orders);
        }
    }, [user]);

   

    if (loading) {
        return <button className="btn btn-square loading"></button>
    }
    return (
        <div className='mr-10'>
            <h1> My order {orders.length} </h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th> Product </th>
                            <th> Quantity </th>
                            <th> price </th>
                            <th> Pay </th>
                            <th > Procced </th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) =><OrderRow
                            key={order._id}
                            order={order}
                            index={index}
                            ></OrderRow>)
                        }
                    </tbody>
                </table>
            </div>



        </div>
    );
};

export default MyOrder;