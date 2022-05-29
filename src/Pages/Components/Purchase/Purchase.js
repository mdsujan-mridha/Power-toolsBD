

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
 

    if (isLoading) {
        return <button class="btn btn-square loading"></button>
    }

    const handleBookinSubmit = e => {
        e.preventDefault();
        const wantQuantity= e.target.quantity.value;
        const price = e.target.price.value;
       

        const booking = {
            productId: _id,
            name: name,
            wantQuantity,
            price:price,
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
                            Available Quantity: {quantity}</h1>
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
                                <input id='quantity' className='border-2 w-full rounded-md h-12 mt-5' type="text" name="quantity" id="4" placeholder='Enter quantity' />
                                <input  className='border-2 w-full rounded-md h-12 mt-5' value={price} type="text" name="price" id="5" required/>
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
