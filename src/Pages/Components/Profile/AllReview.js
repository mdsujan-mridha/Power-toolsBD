import React, { useEffect, useState } from 'react';
import CustomerReview from './CustomerReview';

const AllReview = () => {
    const[allReview ,setAllReview] = useState([]);
     useEffect( ()=>{
         fetch('https://guarded-bayou-50166.herokuapp.com/review')
          .then(res => res.json())
           .then(data => {
               setAllReview(data)
           })
     },[])

    return (
        <div className='px-12'>
            <h1 className="text-center text-primary text-3xl font-bold mt-10"> User Review {allReview?.length} </h1>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12'>

           {
               
               allReview.map(r=><CustomerReview
               key={r._id}
               r={r}
               ></CustomerReview>)
            }
           </div>

        </div>
    );
};

export default AllReview;