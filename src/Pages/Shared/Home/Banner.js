import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img className='lg:max-w-lg ' src="https://i.ibb.co/qrCxmd9/banner-image.jpg" />
          <div className=' w-96 sm:mt-10 lg:w-max'>
            <h1 className="text-5xl  font-bold"> Explore Us for the future  </h1>
            <p className="py-6"> A bearing is a machine element that constrains relative motion to only the desired motion, and reduces friction between moving parts </p>
            <button className="btn btn-primary"> Get Now </button>
          </div>
        </div>
      </div>
    );
};

export default Banner;