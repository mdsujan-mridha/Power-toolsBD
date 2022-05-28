

import { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';

const Purchase = () => {

    const [user, loading] = useAuthState(auth);
    const { productId } = useParams();

    const { data: products, isLoading, refetch } = useQuery('booking', () => fetch(`http://localhost:5000/product/${productId}`)
        .then(res => res.json())
    )
    const _id = products?._id;
    const img = products?.img;
    const name = products?.name;
    const content = products?.content;
    const price = products?.price;
    const quantity = parseInt( products?.quantity);
 
    const qutyRef = useRef();

    const wantQuantity = parseInt(qutyRef?.current?.value);
    const newQuantity = parseInt(quantity - wantQuantity);

    if (wantQuantity <= 30) {
        return <div class="alert alert-warning shadow-lg">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
          <span>Warning: Order Should be 30+ </span>
        </div>
      </div>
        
    }



    if (isLoading) {
        return <button class="btn btn-square loading"></button>
    }

    const handleBookinSubmit = e => {
        e.preventDefault();
        const wantQuantity = qutyRef.current.value;

        const booking = {
            productId: _id,
            name: name,
            wantQuantity,
            customer: user.email,
            customerName: user.displayName,
            phone: e.target.phone.value

        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                console.log(data);

            })
    }

    if (loading) {
        return <button class="btn loading">loading</button>
    }

    return (
        <div className=' flex order-2 justify-evenly mt-10'>
            <div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <h1 className='text-center text-3xl font-semibold'>  Your choice Item </h1>
                    <figure class="px-5 pt-5">
                        <img className='w-64 h-52' src={img} />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title my-3 text-2xl font-semibold"> Product: {name} </h2>
                        <p className='text-justify'>
                            {content}
                        </p>
                        <h1 className='text-left text-xl font-semibold'>
                            Available Quantity: {newQuantity}</h1>
                        <p className='text-left text-xl font-semibold'> Price: {price}</p>
                    </div>
                </div>
            </div>
            <div>
                <div class="card w-96 bg-base-100 shadow-xl">

                    <div class="card-body">
                        <h2 className='text-center mt-5 text-4xl font-semibold'> Invoice </h2>
                        <div>
                            <form onSubmit={handleBookinSubmit}>
                                <input className='border-2 w-full rounded-md h-12 mt-5' value={user.displayName} type="text" name="name" id="1" disabled />
                                <input className='border-2 w-full rounded-md h-12 mt-5' value={user.email} type="email" name="email" id="2" disabled />
                                <input className='border-2 w-full rounded-md h-12 mt-5' type="text" name="phone" id="3" placeholder='Your Phone number' />
                                <input ref={qutyRef} className='border-2 w-full rounded-md h-12 mt-5' type="text" name="quantity" id="4" placeholder='Enter quantity' />
                                <input className='btn btn-primary w-full rounded-md h-12 mt-5 text-white' type="submit" value="Pruchase" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>




    );
};

export default Purchase;
