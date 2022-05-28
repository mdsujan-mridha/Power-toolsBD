
import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase.init';

const Review = () => {
    const [user] = useAuthState(auth)
     const handleReviewSubmit = e =>{
          e.preventDefault();

          const reviewSubmit = {
              customer:user?.displayName,
              customerEmail:user?.email,
              review: e.target.review.value
          }
         
         fetch('http://localhost:5000/review',{
                     method:'POST',
                     headers:{
        
                         'content-type':'application/json'
                     },
                     body:JSON.stringify(reviewSubmit)
                 })
                 .then(res =>res.json())
                  .then(data=>{
                      console.log(data);
                  })
     }
    return (

        <div className ='flex justify-center items-center h-screen'>
        <div class ="card w-96 bg-base-100 shadow-xl">
            <div class="card-body items-center">
                <h2 class=" text-center font-bold text-4xl"> Add Review  </h2>       
            <form onSubmit={handleReviewSubmit} className='grid grid-cols-1 w-full'>
                <input className='border-2 w-full rounded-md h-40 mt-5' type="text" name="review" id="1"  required placeholder='Enter write your review'/>
                <input className='btn btn-primary text-white  w-full text-white-100 font-medium mt-9 border-2' type="submit" value="add" />
            </form>
    
            </div>
        </div>
    </div>

    );
};

export default Review;