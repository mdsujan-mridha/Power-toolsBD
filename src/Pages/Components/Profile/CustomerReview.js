import React from 'react';

const CustomerReview = ({ r }) => {
    // console.log(r);
    const {customer, review ,customerEmail} = r;


    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h1 className='text-center text-2xl font-semibold mt-5'> Customer Name: {customer} </h1>
                <h1 className='text-center text-sm font-semibold mt-5'> Customer contact email :{customerEmail} </h1>
                <p> Review: {review} </p>
            </div>
        </div>

    );
};

export default CustomerReview;