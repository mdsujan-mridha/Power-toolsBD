import React from 'react';

const Banner = () => {
    return (
        <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img className='max-w-lg' src="https://i.ibb.co/qrCxmd9/banner-image.jpg" />
          <div className='w-max'>
            <h1 class="text-5xl  font-bold"> Explore Us for the future  </h1>
            <p class="py-6"> A bearing is a machine element that constrains relative motion to only the desired motion, and reduces friction between moving parts </p>
            <button class="btn btn-primary"> Get Now </button>
          </div>
        </div>
      </div>
    );
};

export default Banner;