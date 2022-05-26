import React from 'react';

const Upcoming = () => {
    return (
        <div>
            
            <h1 className='text-center text-4xl font-bold'>  Our Upcoming Tools </h1>
            <div class="hero min-h-screen mt-[-200px]">
                
                <div class="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/ZNvVKLW/upcoming.jpg" class=" max-w-sm lg:max-w-xl max-h-80 rounded-lg shadow-2xl" />
                    <div className='mx-5'>
                        <h1 class="text-5xl font-bold">Box Office News!</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary"> Pre-Order Now </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Upcoming;