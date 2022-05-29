

import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ order }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [Success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    
    const [clientSecret, setClientSecret] = useState('');

   const {_id,price,customerName,customer} = order;

    useEffect( () => {
          const url = 'http://localhost:5000/create-payment-intent';
        fetch(url,{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({price})
        })
            .then(res => res.json())
            .then(data => {
             
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            });

    }, [price]);

    const handleSubmit =  async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {

            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        setCardError(error?.message || '')
        setSuccess('')
        setProcessing(true);
       
        // confirm card payment  
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
              clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name:customerName ,
                        customerEmail:customer

                    },
                },
            },
        );
        if(intentError){
             setCardError(intentError?.message);
             setProcessing(false);
             
        }
        else{
            setCardError('');
            setTransactionId(paymentIntent?.id);
            console.log(paymentIntent);
            setSuccess('Your payment done');
            // store payment on database 
            const payment = {
                order:_id,
                transactionId:paymentIntent.id

            }
            fetch(`http://localhost:5000/bookings/${_id}`,{
                method:'PATCH',
                headers:{
                    'content-type': 'application/json',
                },
                body:JSON.stringify(payment)
            })
                 .then(res => res.json())
                     .then(data => {
                          setProcessing(false);
                         console.log(data)
                     })
        }
    }
    if(processing){
        return <button class="btn btn-square loading"></button>
    }
    return (
        <>

            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-warning btn-sm mt-5' type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>

            {
                cardError && <>

                    <div class="alert alert-error shadow-lg">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span> {cardError} </span>
                        </div>
                    </div>
                </>
            }
            {
                Success && <>

                    <div class="alert alert-error shadow-lg">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span> {setSuccess} </span>
                        </div>
                    </div>
                </>
            }

        </>
    );
};

export default CheckoutForm;