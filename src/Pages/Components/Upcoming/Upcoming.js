import React from 'react';

const Upcoming = () => {
    return (
        <div>

            <h1 className='text-center text-4xl font-bold'>  Our Upcoming Tools </h1>
            <div class="hero min-h-screen mt-[-200px]">

                <div class="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/ZNvVKLW/upcoming.jpg" class=" max-w-sm lg:max-w-xl max-h-80 rounded-lg shadow-2xl" />
                    <div className='mx-5'>
                        <h1 class="text-5xl font-bold"> Gear box </h1>
                        <p class="py-6"> The purpose of a gearbox is to increase or reduce speed. As a result, torque output will be the inverse of the speed function. If the enclosed drive is a speed reducer (speed output is less than speed input), the torque output will increase; if the drive increases speed, the torque output will decrease. </p>
                        <button class="btn btn-primary"> Pre-Order Now </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Upcoming;