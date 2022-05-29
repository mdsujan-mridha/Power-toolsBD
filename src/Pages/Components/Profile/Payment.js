import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L4XDiGUD7cpESBuIIkTbK9TiFtpX62F9GlBOuI0jAQZyffB3iwx8fbQD1FVmecLlnh1bmQBozDdiIirNSVdzuZP003ADfA9BT');

const Payment = () => {
    const { id } = useParams();
    const url = `https://guarded-bayou-50166.herokuapp.com/booking/${id}`;

    const { data: order, isLoading } = useQuery(['booking', id], () => fetch(url,{
        method: 'GET',
        headers: {
            
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }

    }).then(res => res.json()))
    if (isLoading) {
        return <button class="btn btn-square loading"></button>
    }
    return (
        <div>
            <h1 className="text-center text-primary font-bold mt-10"> Make payment </h1>

            <div class="card w-50 max-w-md shadow-xl my-12 mr-12">
                <div class="card-body">

                    <p> make payment for {order?.name} </p>
                    <p className='text-lg text-purple-600'> Please pay :{order?.price} </p>
                </div>
            </div>
            <div class="card flex-shrink-1 w-full max-w-md shadow-2xl bg-base-100">
                <div class="card-body">

                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order}/>
                    </Elements>

                </div>
            </div>
        </div>

    );
};

export default Payment;